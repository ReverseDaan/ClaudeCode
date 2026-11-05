set -euo pipefail
npm ci 2>&1 | tail -1
npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | tail -1
node lib/controle.js _site /ClaudeCode/
ls _site/over-ons _site/over-ons/*
test ! -e _site/wat-en-waarom
test ! -e _site/stichting
sed -n '/<nav id="hoofdmenu"/,/<\/nav>/p' _site/over-ons/aanbod/index.html
sed -n '/<main/,/<\/main>/p' _site/over-ons/aanbod/index.html | grep -n "<h[1-4]\|melding\|aanbod-blok\|knop" | head -30
grep -q "Adem kort met ons mee" _site/index.html
echo "035 OK"
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
