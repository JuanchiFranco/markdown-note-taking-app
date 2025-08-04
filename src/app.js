import express from "express"; 
import notesRoutes from "./notes/notesRoute.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/notes", notesRoutes);


app.use((req, res) => {
    res.status(404).send("Not Found");
})

export default app;
