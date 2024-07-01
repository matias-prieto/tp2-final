import express from "express";
import routes from "./routes/routes.js";	//Uso routes como dice el ej.

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

app.listen(8080, () => {
	console.log(`EL servidor esta corriendo en ${8080}`);
});
