set -euo pipefail
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
main() { sed -n '/<main/,/<\/main>/p' "$1"; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
echo "== 016 Privacy"
P=_site/privacy/index.html
main $P | sed 's/^ *//' | grep -v '^$'
! grep -qi "in de maak" $P
main $P | grep -o '<h2[^>]*>[^<]*' | sed 's/<h2[^>]*>//' > k.txt
diff k.txt <(printf '%s\n' "Wie wij zijn" "Welke gegevens en waarom" "Waar je gegevens staan" "Delen met anderen" "Je rechten" "Cookies" "Contact")
test "$(main $P | grep -c '<tr>')" = "5"
grep -q "Tot je je afmeldt" $P && grep -q "Tot 1 jaar na de retraite" $P && grep -q "Tot de retraite voorbij is" $P
grep -q "Stillness and Strokes organiseert" $P && grep -q "KvK-nummer: 12345678 (voorbeeld)" $P
grep -q 'class="volgt">betaaldienst volgt' $P
grep -q '<strong>Concept</strong>' $P && grep -q "Laatst bijgewerkt: 3 november 2026" $P
sed -i 's|^  url: ""|  url: "https://forms.gle/voorbeeld"|' src/_data/site.yaml
bouw
grep -q 'Afmelden kan altijd. <a href="/ClaudeCode/privacy/">Lees ons privacybeleid</a>' _site/index.html
git checkout -- src/_data/site.yaml
echo "016 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
