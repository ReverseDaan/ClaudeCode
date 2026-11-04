set -euo pipefail
npm ci 2>&1 | tail -1
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
bouw
node lib/controle.js _site /ClaudeCode/
echo "== 028"
grep -q 'data-themas="bos zand penseel ochtend"' _site/index.html
! grep -rq "groen-goud" _site
test -f _site/fonts/fraunces-latin-500-italic.woff2 && test -f _site/fonts/fraunces-latin-600-italic.woff2
grep -q "Penseel &amp; papier" _site/index.html
sed -i 's/^  aan: true/  aan: false/' src/_data/site.yaml
bouw
! grep -q "fonts-themas.css" _site/index.html
git checkout -- src/
echo "028 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
