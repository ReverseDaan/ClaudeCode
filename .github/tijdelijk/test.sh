set -euo pipefail
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
main() { sed -n '/<main/,/<\/main>/p' "$1"; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
echo "== 018 Aanmeldformulier"
A=_site/aanmelden/index.html; E=_site/retraites/2027-04-voorjaar/index.html
# 1. zonder formulier: maillink en melding
grep -q 'href="mailto:stillnessandstrokes@gmail.com?subject=' $A && grep -q 'class="aanmeld-melding"' $A
grep -q 'class="knop" href="/ClaudeCode/aanmelden/#2027-04-voorjaar">Aanmelden' $E
# 2. met formulier en retraiteVeld
sed -i -e 's|^  url: ""\n  retraiteVeld|X|' src/_data/site.yaml
python3 - <<'PY'
import re
p="src/_data/site.yaml"; t=open(p).read()
t=t.replace('aanmeldformulier:\n  url: ""\n  retraiteVeld: ""','aanmeldformulier:\n  url: "https://docs.google.com/forms/d/e/TEST/viewform"\n  retraiteVeld: "entry.111"')
open(p,"w").write(t)
PY
grep -A2 "^aanmeldformulier:" src/_data/site.yaml
bouw
VERWACHT='https://docs.google.com/forms/d/e/TEST/viewform?usp=pp_url&amp;entry.111=Voorjaarsretraite%2C%2025%20%E2%80%93%2029%20april%202027'
grep -o 'href="https://docs.google.com[^"]*"[^<]*' $A $E
grep -q "href=\"$VERWACHT\">Vraag een plek aan via het formulier" $A
test "$(grep -c "href=\"$VERWACHT\">Vraag een plek aan via het formulier" $E)" = "2"
! grep -q 'class="aanmeld-melding"' $A
! grep -q 'target="_blank"' <(grep 'docs.google' $A $E)
# 3. eigen aanmeldlink gaat voor
sed -i 's|^# aanmeldlink: "https://forms.gle/..."|aanmeldlink: "https://forms.gle/eigen"|' src/retraites/2027-04-voorjaar.md
bouw
grep -q 'href="https://forms.gle/eigen">Vraag een plek aan via het formulier' $A $E
# 4. vol → wachtlijst
sed -i 's/^status: vrij/status: vol/' src/retraites/2027-04-voorjaar.md
bouw
grep -q 'href="https://forms.gle/eigen">Zet me op de wachtlijst via het formulier' $E
# foute aanmeldlink → nette fout
sed -i 's|^aanmeldlink: "https://forms.gle/eigen"|aanmeldlink: "forms.gle/zonder-https"|' src/retraites/2027-04-voorjaar.md
if npx @11ty/eleventy > fout.txt 2>&1; then echo "had moeten falen"; exit 1; fi
grep "aanmeldlink" fout.txt | head -2
git checkout -- src/
echo "018 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
