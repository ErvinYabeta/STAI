const express = require("express");

const router = express.Router();

const staiController = require("../controllers/stai.controller");

// Obtener preguntas
router.get("/questions", (req, res) => {

    const questions = require("../data/questions");

    res.json({
        success: true,
        questions
    });

});

// Calcular STAI
router.post("/score", staiController.calculateScore);

module.exports = router;