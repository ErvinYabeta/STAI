const { GROUP, GENDER } = require("../utils/constants");

exports.validate = (participant) => {

    if (!participant) {
        return {
            valid: false,
            message: "No se recibieron los datos del participante."
        };
    }

    if (typeof participant.fullName !== "string" || participant.fullName.trim() === "") {
        return {
            valid: false,
            message: "El nombre completo es obligatorio."
        };
    }

    if (typeof participant.identityCard !== "string" || participant.identityCard.trim() === "") {
        return {
            valid: false,
            message: "El carnet de identidad es obligatorio."
        };
    }

    if (typeof participant.phone !== "string" || participant.phone.trim() === "") {
        return {
            valid: false,
            message: "El teléfono es obligatorio."
        };
    }

    if (typeof participant.city !== "string" || participant.city.trim() === "") {
        return {
            valid: false,
            message: "La ciudad es obligatoria."
        };
    }

    if (typeof participant.age !== "number" || participant.age <= 0) {
        return {
            valid: false,
            message: "La edad no es válida."
        };
    }

    if (
        participant.gender !== GENDER.VARON &&
        participant.gender !== GENDER.MUJER
    ) {
        return {
            valid: false,
            message: "Sexo no válido."
        };
    }

    if (
        participant.group !== GROUP.ADOLESCENTE &&
        participant.group !== GROUP.UNIVERSITARIO &&
        participant.group !== GROUP.ADULTO
    ) {
        return {
            valid: false,
            message: "Grupo no válido."
        };
    }

    if (
        participant.group === GROUP.ADOLESCENTE &&
        (typeof participant.grade !== "string" || participant.grade.trim() === "")
    ) {
        return {
            valid: false,
            message: "El curso es obligatorio para adolescentes."
        };
    }

    if (
        participant.group === GROUP.UNIVERSITARIO &&
        (typeof participant.career !== "string" || participant.career.trim() === "")
    ) {
        return {
            valid: false,
            message: "La carrera es obligatoria para universitarios."
        };
    }

    return {
        valid: true,
        message: "Participante válido."
    };

};