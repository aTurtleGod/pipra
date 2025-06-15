#!/usr/bin/env node
// CLI entry point for Pipra

const args = process.argv.slice(2);
const { setup } = require('../lib/setup');
const { build } = require('../lib/build');
const { version } = require('../lib/version');

// Handle version command
if (args.includes('-v') || args.includes('--version')) {
  console.log(`Pipra version ${version}`);
  process.exit(0);
}

// Handle setup command
if (args.includes('-setup')) {
  setup();
  process.exit(0);
}

// Handle build command
if (args.includes('build')) {
  build();
  process.exit(0);
}

// Unknown command
console.log('Unknown command. Use -v, -setup, or build.');
process.exit(1);
