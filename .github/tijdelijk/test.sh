set -euo pipefail
npm ci 2>&1 | tail -1
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
bouw
node lib/controle.js _site /ClaudeCode/
echo "== 026"
H=_site/index.html
grep -q '<html lang="nl" data-home' $H && ! grep -q 'data-home' _site/contact/index.html
grep -q 'landschap.js' $H && ! grep -q 'landschap.js' _site/contact/index.html
grep -q '<span class="sr-only">Stillness and Strokes</span>' $H
grep -q '<text x="50%" y="1em" text-anchor="middle">Stillness and Strokes</text>' $H
test "$(grep -c 'class="landschap__thema landschap__thema--' $H)" = "12"
grep -q 'class="landschap" aria-hidden="true"' $H
! grep -q 'hero__rand' $H
python3 -c "import re;h=open('$H').read();s=h[h.index('<div class=\"landschap\"'):h.index('<div class=\"container hero__inhoud\"')];print('landschap kB',len(s.encode())//1024)"
! grep -rl ' style="' _site --include=*.html
sed -i 's/^naam: "Stillness and Strokes"/naam: "Testnaam Bos"/' src/_data/site.yaml
bouw
grep -q '<text x="50%" y="1em" text-anchor="middle">Testnaam Bos</text>' $H
git checkout -- src/
echo "026 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
