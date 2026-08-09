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

// Manejo de errores: sin esto Express responde con una pagina HTML
// y el stack trace cuando llega, por ejemplo, un JSON mal formado.
app.use((err, req, res, next) => {

    if (err.type === "entity.parse.failed") {
        return res.status(400).json({
            valid: false,
            message: "El JSON enviado no es válido."
        });
    }

    console.error(err);

    return res.status(500).json({
        valid: false,
        message: "Ocurrió un error en el servidor."
    });

});

app.listen(PORT, () => {

    console.log(`Servidor iniciado en http://localhost:${PORT}`);

});