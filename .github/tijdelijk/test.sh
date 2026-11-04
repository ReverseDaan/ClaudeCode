set -euo pipefail
npm ci 2>&1 | tail -1
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
bouw
echo "== 024"
grep -A1 "schedule:" .github/workflows/pages.yml
grep -c "@v4\|@v3" .github/workflows/pages.yml .github/workflows/controle.yml || true
! grep -q "@v4\|@v3" .github/workflows/pages.yml .github/workflows/controle.yml
test -f _site/404.html
sed -n '/<main/,/<\/main>/p' _site/404.html | sed 's/^ *//' | grep -v '^$'
grep -q '<title>Pagina niet gevonden · Stillness and Strokes</title>' _site/404.html
grep -q 'class="site-footer"' _site/404.html
for u in '/ClaudeCode/"' '/ClaudeCode/retraites/"' '/ClaudeCode/contact/"'; do sed -n '/<main/,/<\/main>/p' _site/404.html | grep -q "href=\"$u"; done
echo "-- controle op de echte site"
node lib/controle.js _site /ClaudeCode/
echo "-- kapotte link"
printf '\n[Test](/bestaat-niet/) en [zonder voorvoegsel](https://x.nl)\n' >> src/contact.md
bouw
if node lib/controle.js _site /ClaudeCode/ > uit.txt 2>&1; then echo "had moeten falen"; exit 1; fi
cat uit.txt
grep -q 'contact/index.html: link "/ClaudeCode/bestaat-niet/" gaat naar een pagina of bestand dat niet bestaat' uit.txt
git checkout -- src/
echo "-- twee h1"
printf '\n# Tweede kop\n' >> src/contact.md
bouw
if node lib/controle.js _site /ClaudeCode/ > uit.txt 2>&1; then echo "had moeten falen"; exit 1; fi
grep "h1" uit.txt
git checkout -- src/
echo "-- fout retraitebestand"
sed -i 's/^status: vrij/status: misschien/' src/retraites/2027-04-voorjaar.md
if npx @11ty/eleventy --pathprefix=/ClaudeCode/ > uit.txt 2>&1; then echo "had moeten falen"; exit 1; fi
grep -m1 '"status"' uit.txt
git checkout -- src/
echo "024 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
