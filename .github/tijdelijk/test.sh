set -euo pipefail
npm ci 2>&1 | tail -1
npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | tail -1
node lib/controle.js _site /ClaudeCode/
sed -n '/class="sectie ademblok"/,/<\/section>/p' _site/index.html
grep -q '<h2 class="sectie__kop ademblok__kop" id="intro-kop" tabindex="-1">Even uit de drukte</h2>' _site/index.html
grep -q 'aria-hidden="true">' _site/index.html
grep -q "scroll-snap-type: y mandatory" _site/css/style.css
echo "033 OK"
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
