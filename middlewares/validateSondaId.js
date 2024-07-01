export const validateSondaId = (req, res, next) => {
	const { id } = req.params;
	const sondaId = parseInt(id);

	if (isNaN(sondaId) || sondaId < 1 || sondaId > 5) {
		return res.status(422).json({ error: 'Número de sonda incorrecto' });
	}

	next();
};