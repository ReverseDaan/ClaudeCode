set -euo pipefail
npm ci 2>&1 | tail -1
npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | tail -1
node lib/controle.js _site /ClaudeCode/
sed -n '/class="sectie ademblok"/,/<\/section>/p' _site/index.html
! grep -q "Even uit de drukte" _site/index.html
echo "032 OK"
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
