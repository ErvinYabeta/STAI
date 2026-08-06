const crypto = require("crypto");
exports.generate = (
    participant,
    scores,
    percentiles
) => {

    return {

        id: crypto.randomUUID(),

        participant,

        scores: {

            state: scores.stateScore,

            trait: scores.traitScore

        },

        percentiles: {

            state: percentiles.statePercentile,

            trait: percentiles.traitPercentile

        },

        generatedAt: new Date()

    };

};