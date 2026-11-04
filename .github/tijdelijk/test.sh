set -euo pipefail
npm ci 2>&1 | tail -1
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | tail -1; }
bouw
node lib/controle.js _site /ClaudeCode/
echo "== 030"
! test -e _site/retraites/index.html
! test -e _site/retraites
test -f _site/kalender/2027-04-voorjaar/index.html && test -f _site/kalender/2027-04-voorjaar.ics
test "$(sed -n '/id="hoofdmenu"/,/<\/nav>/p' _site/index.html | grep -c '<li')" = "7"
! grep -rl 'href="/ClaudeCode/retraites' _site --include=*.html
grep -q "/kalender/2027-04-voorjaar/" _site/sitemap.xml && ! grep -q "/retraites/" _site/sitemap.xml
grep -q '"url": "https://reversedaan.github.io/ClaudeCode/kalender/2027-04-voorjaar/"' _site/kalender/2027-04-voorjaar/index.html
grep -q "kalender/2027-04-voorjaar/" _site/kalender/2027-04-voorjaar.ics
grep -q 'href="/ClaudeCode/kalender/">← Naar de kalender' _site/kalender/2027-04-voorjaar/index.html
grep -q 'href="/ClaudeCode/kalender/">Bekijk de retraites' _site/index.html
grep -q 'class="overgang-penseel"' _site/index.html
# controle merkt een oude link op
printf '\n[oud](/retraites/)\n' >> src/contact.md; bouw
if node lib/controle.js _site /ClaudeCode/ > uit.txt 2>&1; then echo "had moeten falen"; exit 1; fi; grep -m1 "retraites" uit.txt
git checkout -- src/; bouw
echo "030 OK"
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
