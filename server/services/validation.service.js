const questions = require("../data/questions");

exports.validate = (answers) => {

    if (!answers) {
        return {
            valid: false,
            message: "No se recibieron respuestas."
        };
    }

    if (!Array.isArray(answers)) {
        return {
            valid: false,
            message: "Las respuestas deben enviarse en un arreglo."
        };
    }

    if (answers.length !== questions.length) {
        return {
            valid: false,
            message: `Se esperaban ${questions.length} respuestas y se recibieron ${answers.length}.`
        };
    }

    for (let i = 0; i < answers.length; i++) {

        if (typeof answers[i] !== "number") {
            return {
                valid: false,
                message: `La respuesta ${i + 1} no es un número.`
            };
        }

        if (answers[i] < 0 || answers[i] > 3) {
            return {
                valid: false,
                message: `La respuesta ${i + 1} debe estar entre 0 y 3.`
            };
        }

    }

    return {
        valid: true,
        message: "Validación correcta."
    };

};