const {
  getCountriesController,
  getCountryByIdController,
} = require("../controllers/countriesControllers");

//// Este manejador se encarga de obtener todos los países con sus respectivas actividades.
const getAllCountriesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = await getCountriesController(name);
      return res.status(200).json(response);
    }
    const response = await getCountriesController();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Error Interno del Servidor" });
  }
};

//Este manejador se encarga de obtener los detalles de un país específico identificado por su ID, junto con las actividades asociadas.
const getCountriesDetailsHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getCountryByIdController(id);
    if (response) {
      return res.status(200).json(response);
    }
    return res.status(404).json({ error: "País no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: "Error Interno del Servidor" });
  }
};

//Este manejador se encarga de obtener todos los países que coinciden con un nombre, junto con las actividades asociadas.
//const getCountriesMatchHandler = async (req, res) => {
//try {
// const { name } = req.query;
// const response = await getCountriesByNameController(name);
// return res.status(200).json(response);
//} catch (error) {
// return res.status(500).json({ error: "Error Interno del Servidor" });
//}
//};

module.exports = {
  getAllCountriesHandler,
  getCountriesDetailsHandler,
};
