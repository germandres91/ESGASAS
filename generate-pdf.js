const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    console.log('🚀 Iniciando generación de PDF...');
    
    // Launch browser
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        
        // Set viewport for better rendering
        await page.setViewport({
            width: 1200,
            height: 800,
            deviceScaleFactor: 2
        });
        
        // Get the absolute path to the HTML file
        const htmlPath = path.resolve(__dirname, 'index.html');
        const fileUrl = `file://${htmlPath}`;
        
        console.log('📄 Cargando página HTML...');
        await page.goto(fileUrl, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });
        
        // Wait for content to load
        await page.waitForTimeout(2000);
        
        // Scroll to load all content
        console.log('📜 Cargando todo el contenido...');
        await autoScroll(page);
        
        // Generate PDF
        console.log('🖨️ Generando PDF...');
        const pdfPath = path.resolve(__dirname, 'ESGA_SAS_Webpage.pdf');
        
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '20mm',
                bottom: '20mm',
                left: '20mm'
            },
            displayHeaderFooter: true,
            headerTemplate: `
                <div style="font-size: 10px; text-align: center; width: 100%; color: #1e3a8a; font-family: Arial, sans-serif;">
                    ESGA SAS - Estudios de Suelos, Geología y Ambiental
                </div>
            `,
            footerTemplate: `
                <div style="font-size: 10px; text-align: center; width: 100%; color: #64748b; font-family: Arial, sans-serif;">
                    Página <span class="pageNumber"></span> de <span class="totalPages"></span> | 
                    Generado el ${new Date().toLocaleDateString('es-ES')}
                </div>
            `
        });
        
        console.log('✅ PDF generado exitosamente!');
        console.log(`📁 Archivo guardado en: ${pdfPath}`);
        
        // Check file size
        const stats = fs.statSync(pdfPath);
        const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        console.log(`📊 Tamaño del archivo: ${fileSizeInMB} MB`);
        
    } catch (error) {
        console.error('❌ Error al generar el PDF:', error);
    } finally {
        await browser.close();
        console.log('🔒 Navegador cerrado');
    }
}

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                
                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

// Run the script
generatePDF().catch(console.error);

