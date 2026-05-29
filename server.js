import "dotenv/config";
import app from "./src/app.js";
import conectaNaDatabase from "./src/dbConnect.js";

const PORT = 3000;

await conectaNaDatabase();

app.listen(PORT, () => {
    console.log("servidor escutando");
});
