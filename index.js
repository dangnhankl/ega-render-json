const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const settingsDirectory = path.join(__dirname, 'settings');

/*app.get('/', (req, res) => {
    fs.readdir(settingsDirectory, (err, files) => {
        if (err) {
            console.error('Error reading settings directory:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const jsFiles = files.filter(file => path.extname(file) === '.js');

        const renderedData = jsFiles.map(file => {
            const filePath = path.join(settingsDirectory, file);
            return require(filePath);
        });

        res.send(renderedData);
    });
});*/


app.get('/', (req, res) => {
    fs.readdir(settingsDirectory, (err, files) => {
        if (err) {
            console.error('Error reading settings directory:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const customFiles = ['thiet-lap-chung.js', 'trang-san-pham.js', 'trang-blog.js'];

        const remainingFiles = files.filter(file => !customFiles.includes(file));
        const sortedRemainingFiles = remainingFiles.sort();

        const jsFiles = [...customFiles, ...sortedRemainingFiles].filter(file => path.extname(file) === '.js');

        const renderedData = jsFiles.map(file => {
            const filePath = path.join(settingsDirectory, file);
            return require(filePath);
        });

        res.send(renderedData);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
