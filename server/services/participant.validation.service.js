const { GROUP, GENDER } = require("../utils/constants");

exports.validate = (participant) => {

    if (!participant) {
        return {
            valid: false,
            message: "No se recibieron los datos del participante."
        };
    }

    if (!participant.fullName || participant.fullName.trim() === "") {
        return {
            valid: false,
            message: "El nombre completo es obligatorio."
        };
    }

    if (!participant.identityCard || participant.identityCard.trim() === "") {
        return {
            valid: false,
            message: "El carnet de identidad es obligatorio."
        };
    }

    if (!participant.phone || participant.phone.trim() === "") {
        return {
            valid: false,
            message: "El teléfono es obligatorio."
        };
    }

    if (!participant.city || participant.city.trim() === "") {
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
        (!participant.grade || participant.grade.trim() === "")
    ) {
        return {
            valid: false,
            message: "El curso es obligatorio para adolescentes."
        };
    }

    if (
        participant.group === GROUP.UNIVERSITARIO &&
        (!participant.career || participant.career.trim() === "")
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