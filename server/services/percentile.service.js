const baremos = require("../data/baremos");

exports.calculate = (stateScore, traitScore, group, gender) => {

    // Verificar que exista el grupo
    if (!baremos[group]) {
        throw new Error(`Grupo no válido: ${group}`);
    }

    // Verificar que exista el sexo
    if (!baremos[group][gender]) {
        throw new Error(`Sexo no válido: ${gender}`);
    }

    return {

        statePercentile:
            baremos[group][gender].estado[stateScore],

        traitPercentile:
            baremos[group][gender].rasgo[traitScore]

    };

};