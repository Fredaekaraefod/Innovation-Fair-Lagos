const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const pdfPath = path.resolve(__dirname, 'schools.pdf');
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    // PDF text
    const text = data.text;

    // Simple naive extraction - split by newlines and filter for common school keywords
    const lines = text.split(/\r?\n/);
    const schools = lines.filter(line => {
        const up = line.toUpperCase();
        return (up.includes('SCHOOL') || up.includes('COLLEGE')) &&
            !up.includes('DISTRICT') &&
            line.length > 5;
    }).map(s => s.trim()).filter(s => s.length > 0);

    const uniqueSchools = [...new Set(schools)].sort();

    const outputPath = path.join('src', 'data', 'schools.json');
    // Ensure data directory exists
    if (!fs.existsSync(path.join('src', 'data'))) {
        fs.mkdirSync(path.join('src', 'data'));
    }

    fs.writeFileSync(outputPath, JSON.stringify(uniqueSchools, null, 2));
    console.log(`Extracted ${uniqueSchools.length} schools to ${outputPath}`);
});
