const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public');
fs.mkdirSync(output, { recursive: true });
for (const file of ['index.html', 'about.html', 'work.html', 'contact.html', 'journey.html', 'resume.html', 'styles.css', 'script.js', 'resume_nabhay_khanna.pdf']) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
if (fs.existsSync(path.join(root, 'assets'))) {
  fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
}
console.log('Static portfolio built into public/');
