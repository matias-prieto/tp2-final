import Sonda from "../Model/Sonda.js";

class SondaService {
	sondaData = [];

	async createSonda(id, temperatura) {
		const fechaHora = new Date().toISOString();
		const sonda = new Sonda(id, temperatura, fechaHora);
		this.sondaData.push(sonda);
		return sonda;
	}

	async getAllSondas() {
		return this.sondaData;
	}

	async getSondasById(id) {
		return this.sondaData.filter(sonda => sonda.id === id);
	}
}

export default SondaService;