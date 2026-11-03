set -euo pipefail
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
main() { sed -n '/<main/,/<\/main>/p' "$1"; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
echo "== 020 Home"
H=_site/index.html
main $H | sed 's/^ *//' | grep -v '^$' | grep -v '^<path\|^<svg\|^</svg' | head -120
main $H | grep -o '<h[12][^>]*>[^<]*' | sed 's/<h[12][^>]*>//' > k.txt; cat k.txt
diff k.txt <(printf '%s\n' "Stillness and Strokes" "Even uit de drukte" "Aankomen, creëren, reflecteren" "Eerstvolgende retraite" "Wat deelnemers zeggen" "Verder kijken")
grep -q "Je hoeft niet te kunnen tekenen" $H
test "$(grep -c 'class="home-stap"' $H)" = "3"
test "$(grep -c 'class="home-stap__icoon" viewBox="0 0 48 48" aria-hidden="true"' $H)" = "3"
main $H | grep -q 'id="2027-04-voorjaar"' && grep -q "25 – 29 april 2027" $H && grep -q "Zonnehuis, Loenen" $H && grep -q "Plekken vrij" $H
grep -q 'href="/ClaudeCode/retraites/2027-04-voorjaar/">Meer informatie' $H
grep -q 'href="/ClaudeCode/aanmelden/#2027-04-voorjaar">Vraag een plek aan' $H
for u in wat-en-waarom kalender stichting; do grep -q "class=\"home-route\" href=\"/ClaudeCode/$u/\"" $H; done
test "$(grep -c 'class="penseelstreek" aria-hidden="true"' $H)" = "2"
! grep -qi "houtskool" $H
# kaarten elders ongewijzigd
grep -q 'href="/ClaudeCode/aanmelden/#2027-04-voorjaar">Aanmelden' _site/retraites/index.html
# niets gepland
sed -i -e 's/start: 2027-04-25/start: 2020-04-25/' -e 's/eind: 2027-04-29/eind: 2020-04-29/' src/retraites/2027-04-voorjaar.md
bouw
! grep -q 'class="retraite-kaart"' $H
grep -q 'Er staat op dit moment geen nieuwe retraite gepland. <a href="/ClaudeCode/contact/">Laat het ons weten als je bericht wilt</a>' $H
sed -i 's|^  url: ""|  url: "https://forms.gle/voorbeeld"|' src/_data/site.yaml
bouw
test "$(grep -c 'class="interesselijst"' $H)" = "1"
git checkout -- src/
echo "020 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
