set -euo pipefail
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
main() { sed -n '/<main/,/<\/main>/p' "$1"; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
echo "== 019 Verblijf en tijden"
E=_site/retraites/2027-04-voorjaar/index.html; I=_site/retraites/2027-04-voorjaar.ics
main $E | sed -n '/retraite-pagina__feiten/,/<\/dl>/p' | sed 's/^ *//' | grep -v '^$' | tail -8
grep -q '<dt>Aankomst en vertrek</dt>' $E && main $E | grep -A2 'Aankomst en vertrek' | grep -q 'class="volgt">volgt'
grep -q '<summary>Slapen</summary>' $E && grep -q "meerpersoonskamer" $E
grep -q '<summary>Digitale rust</summary>' $E && grep -q "telefoon bij aankomst in te leveren" $E
grep -q "Plan als het kan wat rust in de dagen na de retraite" $E
test "$(grep -c '<summary>' $E)" = "5"
! grep -q "Aankomst:" $I
# met tijden, zonder verblijf en digitale rust
sed -i -e 's|^# aankomst: "zondag 25 april vanaf 16:00"|aankomst: "zondag 25 april vanaf 16:00"|' -e 's|^# vertrek: "donderdag 29 april rond 16:00"|vertrek: "donderdag 29 april rond 16:00"|' -e 's|^verblijf: .*||' -e 's|^digitale_rust: true|digitale_rust: false|' src/retraites/2027-04-voorjaar.md
bouw
main $E | grep -q 'Aankomst zondag 25 april vanaf 16:00<br>Vertrek donderdag 29 april rond 16:00'
! grep -q '<summary>Slapen</summary>\|<summary>Digitale rust</summary>' $E
python3 - "$I" <<'PY'
import sys, icalendar
ev = icalendar.Calendar.from_ical(open(sys.argv[1],'rb').read()).walk('VEVENT')[0]
d = str(ev['DESCRIPTION']); print(d)
assert "Aankomst: zondag 25 april vanaf 16:00\nVertrek: donderdag 29 april rond 16:00" in d
assert str(ev['DTSTART'].to_ical()) == "b'20270425'"
PY
# fout type
sed -i 's|^digitale_rust: false|digitale_rust: "ja"|' src/retraites/2027-04-voorjaar.md
if npx @11ty/eleventy > fout.txt 2>&1; then echo "had moeten falen"; exit 1; fi
grep -m1 "digitale_rust" fout.txt
git checkout -- src/
echo "019 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
