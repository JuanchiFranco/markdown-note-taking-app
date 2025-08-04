import app from "./app.js";
process.loadEnvFile();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));