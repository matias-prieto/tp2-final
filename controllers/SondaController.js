// Traigo servicios si es necesario.
import SondaService from "../service/SondaService.js";

const sondaService = new SondaService();

class SondaController {
	createSonda = async (req, res) => {
		try {
			const { id, temperatura } = req.body;
			const newSonda = await sondaService.createSonda(id, temperatura);
			res.status(200).json(newSonda);
		} catch (error) {
			res.status(422).json({ error: 'Datos no válidos', message: error.message });
		}
	};

	getAllSondas = async (req, res) => {
		try {
			const sondas = await sondaService.getAllSondas();
			res.status(200).json(sondas);
		} catch (error) {
			res.status(error.statusCode).json({ error: 'Error al obtener las sondas' });
		}
	};

	getSondaById = async (req, res) => {
		try {
			const { id } = req.params;
			const sonda = await sondaService.getSondaById(parseInt(id));

			if (!sonda || sonda.length === 0) {
				return res.status(404).json({ error: 'Sonda no encontrada' });
			}

			res.status(200).json(sonda);
		} catch (error) {
			res.status(error.statusCode).json({ error: 'Error al obtener la sonda' });
		}
	};
}


export default SondaController;
