import fs from 'fs';
const p = new URL('./src/index.css', import.meta.url);
let lines = fs.readFileSync(p, 'utf8').split(/\r?\n/);
const i = lines.findIndex((l) => l.includes('mission styles removed'));
if (i < 0) {
  console.error('marker not found');
  process.exit(1);
}
lines = lines.slice(0, i);
fs.writeFileSync(p, `${lines.join('\n')}\n`);
console.log(`trimmed to ${lines.length} lines`);
