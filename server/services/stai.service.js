const participantValidationService = require("./participant.validation.service");
const answersValidationService = require("./validation.service");
const scoringService = require("./scoring.service");
const percentileService = require("./percentile.service");
const reportService = require("./report.service");

exports.process = (data) => {

    // Validar que exista el cuerpo de la petición
    if (!data) {
        return {
            valid: false,
            message: "No se recibieron datos."
        };
    }

    // Validar participante
    const participantValidation =
        participantValidationService.validate(data.participant);

    if (!participantValidation.valid) {
        return participantValidation;
    }

    // Validar respuestas
    const answersValidation =
        answersValidationService.validate(data.answers);

    if (!answersValidation.valid) {
        return answersValidation;
    }

    // Calcular puntajes
    const scores =
        scoringService.calculate(data.answers);

    // Calcular centiles
    const percentiles =
        percentileService.calculate(
            scores.stateScore,
            scores.traitScore,
            data.participant.group,
            data.participant.gender
        );

    // Generar reporte
    const report =
        reportService.generate(
            data.participant,
            scores,
            percentiles
        );

    return {
        valid: true,
        report
    };

};