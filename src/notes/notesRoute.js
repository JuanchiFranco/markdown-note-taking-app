import { Router } from "express";
import notesController from "./notesController.js"; 

const router = Router();

// Endpoint for check grammar
router.post("/check-grammar/:markdown", notesController.checkGrammar);

// Endpoint for save note
router.post("/save-note", notesController.saveNote);

// Endpoint for list notes
router.get("/list-notes", notesController.listNotes);

// Endpoint for render note
router.get("/render-note/:markdown", notesController.renderNote);

export default router;
