// Controleert de gebouwde site (de map _site). Gebruikt in de workflow
// .github/workflows/controle.yml. Zelf draaien kan ook:
//   npx @11ty/eleventy --pathprefix=/ClaudeCode/
//   node lib/controle.js _site /ClaudeCode/
//
// Wat wordt gecontroleerd, per HTML-pagina:
//  1. geen ruwe template-code ({{ of {%) in de pagina;
//  2. precies één <h1> en een niet-lege <title>;
//  3. elke link naar een andere pagina van de site (href/src) bestaat echt.
// Gaat er iets mis, dan staat er per pagina wat er niet klopt.
import fs from "node:fs";
import path from "node:path";

const map = process.argv[2] || "_site";
const voorvoegsel = process.argv[3] || "/";

// Alle bestanden in de map, met hun pad ten opzichte van die map.
function alleBestanden(dir, basis = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const vol = path.join(dir, item.name);
    return item.isDirectory() ? alleBestanden(vol, basis) : [path.relative(basis, vol)];
  });
}

// Bestaat het bestand waar deze link naartoe gaat?
function linkBestaat(link) {
  let pad = decodeURIComponent(link.split("#")[0].split("?")[0]);
  if (pad === "") return true; // alleen een anker (#…) op dezelfde pagina
  pad = pad.slice(voorvoegsel.length);
  const doel = path.join(map, pad);
  if (fs.existsSync(doel) && fs.statSync(doel).isFile()) return true;
  return fs.existsSync(path.join(doel, "index.html"));
}

const fouten = [];
const paginas = alleBestanden(map).filter((f) => f.endsWith(".html"));

for (const pagina of paginas) {
  const html = fs.readFileSync(path.join(map, pagina), "utf8");
  const melding = (tekst) => fouten.push(`${pagina}: ${tekst}`);

  if (html.includes("{{") || html.includes("{%")) {
    melding("er staat nog template-code ({{ of {%) in de pagina");
  }

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) melding(`heeft ${h1} keer een <h1>, dat moet precies 1 keer zijn`);

  const titel = html.match(/<title>([^<]*)<\/title>/);
  if (!titel || titel[1].trim() === "") melding("heeft geen <title>");

  for (const [, link] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(link)) continue; // naar buiten of op dezelfde pagina
    if (!link.startsWith(voorvoegsel)) {
      melding(`link "${link}" begint niet met ${voorvoegsel} en werkt dus niet op GitHub Pages`);
    } else if (!linkBestaat(link)) {
      melding(`link "${link}" gaat naar een pagina of bestand dat niet bestaat`);
    }
  }
}

if (fouten.length) {
  console.error(`\nEr klopt iets niet op de site (${fouten.length} keer):\n- ` + fouten.join("\n- ") + "\n");
  process.exit(1);
}
console.log(`Alles in orde: ${paginas.length} pagina's gecontroleerd.`);
