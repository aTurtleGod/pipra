// pipra setup logic: creates a starter pipra.json config file

const fs = require('fs');
const path = require('path');

function setup() {
  const config = {
    name: "my-pipra-app",
    version: "1.0.0",
    entry: "./backend/server.js",
    prerun: "./scripts/prerun.js",
    meta: {
      author: "Your Name",
      license: "MIT"
    },
    frameworks: ["express", "react"],
    apiWraps: {
      express: "./api/express.js",
      react: "./frontend/react.js"
    },
    buildOptions: {
      output: "./dist/pipra-app",
      minify: true
    }
  };

  const filePath = path.resolve(process.cwd(), 'pipra.json');
  fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
  console.log(`Created pipra.json at ${filePath}`);
}

module.exports = { setup };
