const staiService = require("../services/stai.service");

exports.calculateScore = (req, res) => {

    const result = staiService.process(req.body);

    if (!result.valid) {
        return res.status(400).json(result);
    }

    return res.status(200).json(result);

};