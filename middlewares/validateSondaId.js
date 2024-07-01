const ID_MIN = 1;
const ID_MAX = 5;

export const validateSondaId = (req, res, next) => {
	const { id } = req.params;
	const sondaId = parseInt(id);

	if (isNaN(sondaId) || sondaId < ID_MIN || sondaId > ID_MAX) {
		return res.status(400).json({ error: 'Número de sonda incorrecto' });
	}

	next();
};