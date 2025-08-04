import fs from "fs/promises";

async function readMarkdownFile(path) {
    try {
        const data = await fs.readFile(path, "utf-8");
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function listMarkdownFiles() {
    try {
        const files = await fs.readdir("public/markdown");
        return files;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function writeMarkdownFile(path, data) {
    try {
        await fs.writeFile(path, data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export { readMarkdownFile, writeMarkdownFile, listMarkdownFiles };
