const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


const pngFolder = path.join(__dirname, '../images/png'); 
const webpFolder = path.join(__dirname, '../images/webp'); 


if (!fs.existsSync(webpFolder)) {
    fs.mkdirSync(webpFolder, { recursive: true });
}


fs.readdir(pngFolder, (err, files) => {
    if (err) {
        console.error('Помилка читання папки:', err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.png') {
            const inputPath = path.join(pngFolder, file);
            const outputPath = path.join(webpFolder, path.basename(file, '.png') + '.webp');

           
            sharp(inputPath)
                .webp({
                    quality: 100,    
                    lossless: true   
                })
                .toFile(outputPath)
                .then(() => {
                    console.log(`Конвертовано: ${file} -> ${path.basename(outputPath)}`);
                })
                .catch(err => {
                    console.error(`Помилка конвертації ${file}:`, err);
                });
        }
    });
});
