import { readMarkdownFile, writeMarkdownFile, listMarkdownFiles } from "../utils/file.js";
import axios from "axios"; 
import { marked }  from "marked";

const notesService = {
    checkGrammar: async (markdown) => { 
        const routeToMarkdown = `public/markdown/${markdown}`; 
        // check grammar
        const response = await readMarkdownFile(routeToMarkdown);
        if(!response){
            return { success: false, message: "Markdown file not found" };
        }

        const grammarResponse = await axios.post("https://api.languagetoolplus.com/v2/check", null, {
            params: {
                text: response,
                language: "es-ES"
            }
        });   

        return { success: true, matches: grammarResponse.data.matches};
    },
    saveNote: async (title, content) => {
        //guardamos la nota
        await writeMarkdownFile(`public/markdown/${title}.md`, content);

        return { success: true, message: "Note saved successfully" };
    },
    listNotes: async (page, limit) => {
        const files = await listMarkdownFiles();
        const totalFiles = files.length;
        const totalPages = Math.ceil(totalFiles / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedFiles = files.slice(startIndex, endIndex);
        const data = {
            files: paginatedFiles,
            totalPages,
            currentPage: page,
            totalFiles
        }
        return {
            success: true,
            data
        }
    },
    renderNote: async (markdown) => {
        const routeToMarkdown = `public/markdown/${markdown}`; 
        const markdownContent = await readMarkdownFile(routeToMarkdown);
        const html = marked(markdownContent);
        return { success: true, html };
    }
}

export default notesService;
