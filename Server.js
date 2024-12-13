const express = require('express');
const multer = require('multer');
const ExifParser = require('exif-parser');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/analyze-image', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;

    // Extract EXIF metadata using a library like exif-parser
    const exifData = ExifParser.create(fs.readFileSync(imagePath)).parse();

    // Extract make and model information from the EXIF data
    const make = exifData.tags.Make;
    console.log(make);
    const model = exifData.tags.Model;
    console.log(model);

    // Respond with make and model information
    res.json({ make, model });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});