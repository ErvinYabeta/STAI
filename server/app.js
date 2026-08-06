const express = require("express");
const cors = require("cors");

const staiRoutes = require("./routes/stai.routes");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "API STAI funcionando correctamente."
    });

});

app.use("/api/stai", staiRoutes);

app.listen(PORT, () => {

    console.log(`Servidor iniciado en http://localhost:${PORT}`);

});