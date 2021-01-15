const app = require("./app");
const port = 5000;

async function init() {
  await app.listen(process.env.PORT || port);

  console.log(`Server on port: ${port}`);
}

init();
