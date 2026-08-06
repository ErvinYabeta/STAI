const questions = require("../data/questions");

// Invierte una respuesta (0 ↔ 3, 1 ↔ 2)
function invertAnswer(answer) {

    return 3 - answer;

}

// Calcula el puntaje de una escala
function calculateScale(answers, scale) {

    let total = 0;

    for (const question of questions) {

        if (question.scale !== scale)
            continue;

        let answer = answers[question.id - 1];

        if (question.reverse) {
            answer = invertAnswer(answer);
        }

        total += answer;

    }

    return total;

}

// Función principal
exports.calculate = (answers) => {

    const stateScore = calculateScale(answers, "estado");

    const traitScore = calculateScale(answers, "rasgo");

    return {

        stateScore,

        traitScore

    };

};