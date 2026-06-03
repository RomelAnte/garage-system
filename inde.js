// Importar el módulo de la aplicación
const app = require('./src/app');
const port = 3000;

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});