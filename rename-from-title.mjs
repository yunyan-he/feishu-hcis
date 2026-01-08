import fs from 'fs';
import path from 'path';

const ROOT = './dist/docs';
const rootDocs = JSON.parse(fs.readFileSync('./dist/docs.json', 'utf-8'));

// Recursive flatten function
const flatten = (nodes) => {
    let result = [];
    nodes.forEach(node => {
        result.push(node);
        if (node.children && node.children.length > 0) {
            result = result.concat(flatten(node.children));
        }
    });
    return result;
};

const docs = flatten(rootDocs);

// Clean illegal characters
const clean = (name) => name.replace(/[\/:*?"<>|\\]/g, '_');

// Sort by slug length descending (deepest first) 
// This ensures we rename children (files/dirs) inside a folder BEFORE we rename the folder itself.
docs.sort((a, b) => b.slug.split('/').length - a.slug.split('/').length);

docs.forEach(doc => {
    const title = clean(doc.title);

    // Rename Md File
    // doc.slug is the relative path from ROOT, e.g. "parent/child"
    const oldFile = path.join(ROOT, `${doc.slug}.md`);
    if (fs.existsSync(oldFile)) {
        const dir = path.dirname(oldFile);
        const newFile = path.join(dir, `${title}.md`);

        if (oldFile !== newFile) {
            console.log(`Renaming File: ${oldFile} -> ${newFile}`);
            try {
                fs.renameSync(oldFile, newFile);
            } catch (e) {
                console.error(`Error renaming file ${oldFile}:`, e);
            }
        }
    }

    // Rename Directory
    const oldDir = path.join(ROOT, doc.slug);
    if (fs.existsSync(oldDir)) {
        const dir = path.dirname(oldDir);
        const newDir = path.join(dir, title);

        if (oldDir !== newDir) {
            console.log(`Renaming Dir:  ${oldDir} -> ${newDir}`);
            try {
                fs.renameSync(oldDir, newDir);
            } catch (e) {
                console.error(`Error renaming dir ${oldDir}:`, e);
            }
        }
    }
});
