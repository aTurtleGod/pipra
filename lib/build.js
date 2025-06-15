// pipra build logic: reads pipra.json and logs the config (placeholder for real build)

const fs = require('fs');
const path = require('path');

function build() {
  const configPath = path.resolve(process.cwd(), 'pipra.json');
  if (!fs.existsSync(configPath)) {
    console.error('pipra.json not found. Run pipra -setup first.');
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  console.log('Building project with config:', config);

  // TODO: Add real build logic (bundling, shebang, etc.)
}

module.exports = { build };
