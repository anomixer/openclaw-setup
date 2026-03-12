const fs = require('fs');
const path = require('path');

function copyAndReplace(src, dest, replacements) {
    if (!fs.existsSync(src)) {
        console.warn(`Warning: source file ${src} not found`);
        return;
    }
    let content = fs.readFileSync(src, 'utf8');
    for (const [s, r] of Object.entries(replacements)) {
        // Regex replace all occurrences
        content = content.replace(new RegExp(s, 'g'), r);
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, content);
}

const zhMaps = {
    'murmur.md': 'index.md',
    'README.md': 'setup.md',
    'docs/why-wsl2.md': 'docs/why-wsl2.md',
    'docs/wsl2-guide.md': 'docs/wsl2-guide.md',
    'docs/migration-guide.md': 'docs/migration-guide.md',
    'docs/what-model.md': 'docs/what-model.md'
};

const enMaps = {
    'murmur-en.md': 'index.md',
    'README-EN.md': 'setup.md',
    'docs/why-wsl2-en.md': 'docs/why-wsl2.md',
    'docs/wsl2-guide-en.md': 'docs/wsl2-guide.md',
    'docs/migration-guide-en.md': 'docs/migration-guide.md',
    'docs/what-model-en.md': 'docs/what-model.md'
};

// For ZH, we mostly want to replace 'murmur.md' linked in README etc. to 'index.md'
const zhReplacements = {
    'murmur\\.md': 'index.md',
    'README\\.md': 'setup.md'
};

// For EN, we want to strip the "-en" suffix so the paths are uniform across EN and ZH
const enReplacements = {
    'murmur-en\\.md': 'index.md',
    'README-EN\\.md': 'setup.md',
    'README\\.md': 'setup.md',
    'why-wsl2-en\\.md': 'why-wsl2.md',
    'wsl2-guide-en\\.md': 'wsl2-guide.md',
    'migration-guide-en\\.md': 'migration-guide.md',
    'what-model-en\\.md': 'what-model.md'
};

fs.mkdirSync('build_docs_zh', { recursive: true });
fs.mkdirSync('build_docs_en', { recursive: true });

// Execute for ZH
for (const [src, dest] of Object.entries(zhMaps)) {
    copyAndReplace(src, 'build_docs_zh/' + dest, zhReplacements);
}
if (fs.existsSync('pic')) fs.cpSync('pic', 'build_docs_zh/pic', { recursive: true });
if (fs.existsSync('docs/custom.css')) fs.copyFileSync('docs/custom.css', 'build_docs_zh/custom.css');

// Execute for EN
for (const [src, dest] of Object.entries(enMaps)) {
    copyAndReplace(src, 'build_docs_en/' + dest, enReplacements);
}
if (fs.existsSync('pic')) fs.cpSync('pic', 'build_docs_en/pic', { recursive: true });
if (fs.existsSync('docs/custom.css')) fs.copyFileSync('docs/custom.css', 'build_docs_en/custom.css');

console.log('Docs preparation for MKDocs done (ZH and EN folders ready).');
