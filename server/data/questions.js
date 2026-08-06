const { SCALE, OPTIONS } = require("../utils/constants");

const questions = [

    // ==========================
    // ESTADO
    // ==========================

    {
        id: 1,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Me siento calmado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 2,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Me siento seguro.",
        options: OPTIONS.ESTADO
    },

    {
        id: 3,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Estoy tenso.",
        options: OPTIONS.ESTADO
    },

    {
        id: 4,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Estoy contrariado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 5,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Me siento cómodo (estoy a gusto).",
        options: OPTIONS.ESTADO
    },

    {
        id: 6,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Me siento alterado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 7,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Estoy preocupado por posibles desgracias.",
        options: OPTIONS.ESTADO
    },

    {
        id: 8,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Me siento descanzado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 9,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Me siento angustiado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 10,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Me siento confortable.",
        options: OPTIONS.ESTADO
    },

    {
        id: 11,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Tengo confianza en mi mismo.",
        options: OPTIONS.ESTADO
    },

    {
        id: 12,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Me siento nervioso.",
        options: OPTIONS.ESTADO
    },

    {
        id: 13,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Estoy desasosegado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 14,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Me siento muy atado (como oprimido).",
        options: OPTIONS.ESTADO
    },

    {
        id: 15,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Estoy relajado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 16,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Me siento satisfecho.",
        options: OPTIONS.ESTADO
    },

    {
        id: 17,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Estoy preocupado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 18,
        scale: SCALE.ESTADO,
        reverse: false,
        text: "Me siento aturdido y sobreexcitado.",
        options: OPTIONS.ESTADO
    },

    {
        id: 19,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Me siento alegre.",
        options: OPTIONS.ESTADO
    },

    {
        id: 20,
        scale: SCALE.ESTADO,
        reverse: true,
        text: "Es este momento me siento bien.",
        options: OPTIONS.ESTADO
    },




    // ==========================
    // RASGO
    // ==========================

    {
        id: 21,
        scale: SCALE.RASGO,
        reverse: true,
        text: "Me siento bien.",
        options: OPTIONS.RASGO
    },

    {
        id: 22,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Me canso rápidamente.",
        options: OPTIONS.RASGO
    },

    {
        id: 23,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Siento ganas de llorar.",
        options: OPTIONS.RASGO
    },

    {
        id: 24,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Me gustaria ser tan feliz como otros.",
        options: OPTIONS.RASGO
    },
    
    {
        id: 25,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Pierdo oportunidades por no decidirme pronto.",
        options: OPTIONS.RASGO
    },

    {
        id: 26,
        scale: SCALE.RASGO,
        reverse: true,
        text: "Me siento descansado.",
        options: OPTIONS.RASGO
    },

    {
        id: 27,
        scale: SCALE.RASGO,
        reverse: true,
        text: "Soy una persona tranquila, serena y sosegada.",
        options: OPTIONS.RASGO
    },

    {
        id: 28,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Veo que las dificultades se amontonan y no puedo con ellas.",
        options: OPTIONS.RASGO
    },

    {
        id: 29,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Me preocupo demasiado por cosas sin importancia.",
        options: OPTIONS.RASGO
    },

    {
        id: 30,
        scale: SCALE.RASGO,
        reverse: true,
        text: "Soy feliz.",
        options: OPTIONS.RASGO
    },

    {
        id: 31,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Suelo tomar las cosas demasiado seriamente.",
        options: OPTIONS.RASGO
    },

    {
        id: 32,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Me falta confianza en mi mismo.",
        options: OPTIONS.RASGO
    },

    {
        id: 33,
        scale: SCALE.RASGO,
        reverse: true,
        text: "Me siento seguro.",
        options: OPTIONS.RASGO
    },

    {
        id: 34,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Evito enfrentarme a las crisis o dificultades.",
        options: OPTIONS.RASGO
    },

    {
        id: 35,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Me siento triste (meláncolico).",
        options: OPTIONS.RASGO
    },

    {
        id: 36,
        scale: SCALE.RASGO,
        reverse: true,
        text: "Estoy satisfecho.",
        options: OPTIONS.RASGO
    },

    {
        id: 37,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Me rondan y molestan pensamientos sin importancia.",
        options: OPTIONS.RASGO
    },

    {
        id: 38,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Me afectan tanto los desengaños que no puedo olvidarlos.",
        options: OPTIONS.RASGO
    },

    {
        id: 39,
        scale: SCALE.RASGO,
        reverse: true,
        text: "Soy una persona estable. ",
        options: OPTIONS.RASGO
    },

    {
        id: 40,
        scale: SCALE.RASGO,
        reverse: false,
        text: "Cuando pienso sobre asuntos y preocupaciones actuales, me pongo tenso y agitado.",
        options: OPTIONS.RASGO
    }

];

module.exports = questions;