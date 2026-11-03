set -euo pipefail
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
main() { sed -n '/<main/,/<\/main>/p' "$1"; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
echo "== 017 Aanmeldstappen"
A=_site/aanmelden/index.html; E=_site/retraites/2027-04-voorjaar/index.html
main $A | sed -n '/aanmeld-uitleg/,/<\/section>/p' | sed 's/^ *//' | grep -v '^$'
test "$(main $A | grep -c 'class="aanmeldstap"')" = "3"
main $A | grep -o 'aanmeldstap__kop">[^<]*' | sed 's/.*">//' > k.txt
diff k.txt <(printf '%s\n' "Je vraagt een plek aan" "We maken kort kennis" "Je plek is vast")
main $A | grep -q '<ol class="aanmeldstappen">'
main $A | grep -q 'Via het formulier of per mail. Het is nog geen boeking.'
main $A | grep -q 'gereserveerd. <a href="/ClaudeCode/voorwaarden/">Lees onze voorwaarden</a>.'
test "$(main $A | grep -c 'aanmeldstap__cijfer" aria-hidden="true"')" = "3"
main $E | grep -q '<ol class="aanmeldstappen aanmeldstappen--kort">'
test "$(main $E | grep -c 'class="aanmeldstap"')" = "3"
! main $E | grep -q "Het is nog geen boeking"
echo "017 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
