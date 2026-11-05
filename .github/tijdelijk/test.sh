set -euo pipefail
npm ci 2>&1 | tail -1
npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | tail -1
node lib/controle.js _site /ClaudeCode/
sed -n '/personen-lijst/,/<\/ul>/p' _site/wat-en-waarom/index.html | head -20
echo "031 OK"
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
