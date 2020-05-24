const app = require('./app');

const { port } = require('./config');

app.listen(port, () => console.log(`Running on http://localhost:${port}`));

module.exports = app;
