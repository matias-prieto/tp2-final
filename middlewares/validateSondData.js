export const validateSondData = (req, res, next) => {
	try {
		const { id, temperatura } = req.body;

		const sondaId = parseInt(id);
		const sondaTemperatura = parseFloat(temperatura);

		if (isNaN(sondaId) || sondaId < 1 || sondaId > 5) {
			throw new Error('Número de sonda incorrecto');
		}

		if (isNaN(sondaTemperatura) || sondaTemperatura < -20 || sondaTemperatura > 100) {
			throw new Error('Temperatura fuera de rango (-20 a 100 °C)');
		}

		req.body.id = sondaId;
		req.body.temperatura = sondaTemperatura;
		next();
	} catch (error) {
		//Ej pide devolve Datos no válidos, demás está para mí y guiarme mejor si voy bien.
		res.status(422).json({ error: 'Datos no válidos', message: error.message });
	}
};