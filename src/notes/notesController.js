import notesService from "./notesService.js";  

const notesController = {
    checkGrammar: async (req, res) => {
        try{
            const { markdown } = req.params;  
            const response = await notesService.checkGrammar(markdown);
            
            if(!response.success){
                return res.status(400).send(response.message);
            }
            res.status(200).send(response.matches);
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }   
    },
    saveNote: async (req, res) => {
        try{
            const { title, content } = req.body;
            if(!title || !content){
                return res.status(400).send("Title and content are required");
            }  

            const response = await notesService.saveNote(title, content);
            
            if(!response.success){
                return res.status(400).send(response.message);
            }
            res.status(201).send(response.message);
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }
    },
    listNotes: async (req, res) => {
        try{
            const { page=1, limit=10 } = req.query;
            const response = await notesService.listNotes(page, limit);
            
            if(!response.success){
                return res.status(400).send(response.message);
            }

            res.status(200).send(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }
    },
    renderNote: async (req, res) => {
        try{
            const { markdown } = req.params;
            const response = await notesService.renderNote(markdown);
            
            if(!response.success){
                return res.status(400).send(response.message);
            }
            res.status(200).send(response.html);
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }
    }
}

export default notesController;
