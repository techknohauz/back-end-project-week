require("dotenv").config();

const server = require("./api/server");
const port = process.env.PORT || 9500;

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));