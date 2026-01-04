import fs from "fs";
import path from "path";

const distDir = path.join(process.cwd(), "dist");

function sanitizeFileName(name) {
    return name
        .replace(/[\/\\?%*:|"<>]/g, "") // 去掉非法字符
        .replace(/\s+/g, " ")           // 合并多空格
        .trim();
}

for (const file of fs.readdirSync(distDir)) {
    const fullPath = path.join(distDir, file);
    if (!file.endsWith(".md") || !fs.statSync(fullPath).isFile()) continue;

    const content = fs.readFileSync(fullPath, "utf8");
    const match = content.match(/---\s*([\s\S]*?)\s*---/);
    if (!match) continue;

    const frontmatter = match[1];
    const titleMatch = frontmatter.match(/title:\s*(.+)/);
    if (!titleMatch) continue;

    let title = titleMatch[1].trim();
    title = title.replace(/^["']|["']$/g, "");

    const newName = sanitizeFileName(title) + ".md";
    const newPath = path.join(distDir, newName);

    if (newPath !== fullPath) {
        console.log(`Rename: ${file} -> ${newName}`);
        fs.renameSync(fullPath, newPath);
    }
}
