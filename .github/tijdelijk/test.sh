set -euo pipefail
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
main() { sed -n '/<main/,/<\/main>/p' "$1"; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
echo "== 022"
E=_site/retraites/2027-04-voorjaar/index.html; V=_site/vragen/index.html
grep -q "<li>Alle maaltijden, plantaardig</li>" $E && ! grep -q "Maaltijden: volgt" $E
! grep -rqi "oprichter" _site --include=*.html
grep -q "Begeleider" _site/wat-en-waarom/index.html && grep -q "Begeleider" _site/stichting/index.html
! grep -q "stilte spannend" _site/wat-en-waarom/index.html
main $V | grep -o '<h2[^>]*>[^<]*' | sed 's/<h2[^>]*>//' > k.txt; cat k.txt
diff k.txt <(printf '%s\n' "Meedoen" "Verblijf" "Aanmelden en betalen")
main $V | grep -o '<summary>[^<]*' | sed 's/<summary>//' > v.txt; cat v.txt
diff v.txt <(printf '%s\n' "Heb ik ervaring nodig met schilderen of mediteren?" "In welke taal wordt de retraite gegeven?" "Wat neem ik mee?" "Waar slaap ik?" "Mag ik mijn telefoon gebruiken?" "Is aanmelden een boeking?" "Wanneer betaal ik?" "Kan ik annuleren?")
grep -q "telefoon bij aankomst in te leveren" $V && grep -q "meerpersoonskamer" $V && grep -q "aanbetaling van € 100" $V
grep -q 'href="/ClaudeCode/voorwaarden/">Lees de voorwaarden' $V
grep -o '<nav id="hoofdmenu".*' -A30 $V | grep -o 'href="[^"]*"[^>]*>[^<]*' | head -8
test "$(sed -n '/id="hoofdmenu"/,/<\/nav>/p' $V | grep -c '<li')" = "8"
sed -n '/id="hoofdmenu"/,/<\/nav>/p' $V | grep -q 'href="/ClaudeCode/vragen/" aria-current="page">Veelgestelde vragen'
echo "022 OK"
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
