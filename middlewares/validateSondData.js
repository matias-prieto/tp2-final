const TEMP_MIN = -20;
const TEMP_MAX = 100;
const ID_MIN = 1;
const ID_MAX = 5;

export const validateSondData = (req, res, next) => {
	try {
		const { id, temperatura } = req.body;

		const sondaId = parseInt(id);
		const sondaTemperatura = parseFloat(temperatura);

		if (isNaN(sondaId) || sondaId < ID_MIN || sondaId > ID_MAX) {
			throw new Error('Número de sonda incorrecto');
		}

		if (isNaN(sondaTemperatura) || sondaTemperatura < TEMP_MIN || sondaTemperatura > TEMP_MAX) {
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