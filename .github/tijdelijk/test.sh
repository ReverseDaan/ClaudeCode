set -euo pipefail
npm ci 2>&1 | tail -2
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
voet() { sed -n '/<footer/,/<\/footer>/p' "$1"; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
echo "== 023"
sed -n '/<head>/,/<\/head>/p' _site/index.html
! grep -rl "googleapis\|gstatic" _site
test "$(ls _site/fonts/*.woff2 | wc -l)" = "10"; ls -la _site/fonts
! grep -rl ' style="' _site --include=*.html
! grep -rho '<script>' _site --include=*.html | grep -q .
grep -q 'http-equiv="Content-Security-Policy"' _site/index.html && grep -q 'name="referrer" content="strict-origin-when-cross-origin"' _site/index.html
grep -q 'data-themas="bos zand groen-goud ochtend"' _site/index.html
test "$(voet _site/index.html | grep -c '>Veelgestelde vragen<')" = "1"
! voet _site/index.html | grep -q "Volg ons"
! grep -q "hero__foto\|hero-bos" _site/index.html
! grep -q "telefoon\|plaats:" src/_data/site.yaml
grep -q "Ook de lettertypes komen van onze eigen site" _site/privacy/index.html
# varianten: foto, social en interesselijst
mkdir -p src/images && printf 'test' > src/images/hero-bos.jpg
python3 - <<'PY'
p="src/_data/site.yaml"; t=open(p).read()
t=t.replace('social: []','social:\n  - naam: "Instagram"\n    url: "https://www.instagram.com/test/"').replace('  url: ""\n  kop: "Houd me','  url: "https://forms.gle/x"\n  kop: "Houd me',1)
open(p,"w").write(t)
PY
bouw
grep -q '<img class="hero__foto" src="/ClaudeCode/images/hero-bos.jpg" alt="Zonlicht valt tussen de bomen door in een rustig bos" fetchpriority="high">' _site/index.html
voet _site/index.html | grep -q 'Volg ons' && voet _site/index.html | grep -q 'href="https://www.instagram.com/test/" rel="noopener noreferrer"'
grep -q 'target="_blank" rel="noopener noreferrer"' _site/index.html
cp -r _site /tmp/variant
git checkout -- src/ && rm -rf src/images
# stijlwisselaar uit: geen themalettertypes en geen data-themas
sed -i 's/^  aan: true/  aan: false/' src/_data/site.yaml
bouw
! grep -q "fonts-themas.css\|data-themas\|stijlwisselaar.js" _site/index.html
git checkout -- src/
echo "023 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
echo "VARIANT-BEGIN"; tar czf - -C /tmp variant | base64 -w0; echo; echo "VARIANT-EINDE"
