import app from "./app.js";
import { config } from "./config/constants.js";

const PORT = config.PORT;

app.listen(PORT)
    .on("listening", () => console.log(`Server running on port http://localhost:${PORT}`))
    .on("error", (error) => console.error(error));