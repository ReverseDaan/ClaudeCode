set -euo pipefail
npm ci 2>&1 | tail -1
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
bouw
for f in $(find _site -name "*.html"); do if grep -q "<pre>\|&lt;span\|&lt;li\|&lt;a \|{{\|{%" $f; then echo "RUWE CODE IN $f"; exit 1; fi; done
node lib/controle.js _site /ClaudeCode/
echo "== 025"
A=https://reversedaan.github.io/ClaudeCode
E=_site/retraites/2027-04-voorjaar/index.html
sed -n '/<head>/,/<\/head>/p' $E | grep -E "og:|twitter|canonical|icon|description|theme" 
for f in $(find _site -name "index.html") _site/404.html; do
  for tag in 'og:title' 'og:description' 'og:url' 'og:image" content="https' 'og:locale' 'twitter:card'; do grep -q "$tag" $f || { echo "MIST $tag in $f"; exit 1; }; done
  test "$(grep -c 'name="description"' $f)" = "1"
done
for f in $(find _site -name "index.html"); do test "$(grep -c 'rel="canonical"' $f)" = "1" || { echo "canonical $f"; exit 1; }; done
! grep -q 'rel="canonical"' _site/404.html && grep -q 'name="robots" content="noindex"' _site/404.html
grep -q "<link rel=\"canonical\" href=\"$A/retraites/2027-04-voorjaar/\">" $E
grep -q "og:image\" content=\"$A/images/deelkaart.jpg\"" $E
# alle beschrijvingen verschillend
grep -ho 'name="description" content="[^"]*"' $(find _site -name "index.html") | sort | uniq -d > dubbel.txt; cat dubbel.txt; test ! -s dubbel.txt
python3 - <<'PY'
import json,re
h=open("_site/retraites/2027-04-voorjaar/index.html").read()
b=re.findall(r'<script type="application/ld\+json">(.*?)</script>',h,re.S); assert len(b)==1
d=json.loads(b[0]); print(json.dumps(d,ensure_ascii=False)[:900])
assert d["@type"]=="Event" and d["startDate"]=="2027-04-25" and d["endDate"]=="2027-04-29"
assert d["offers"]["price"]==495 and d["offers"]["priceCurrency"]=="EUR" and d["offers"]["availability"].endswith("InStock")
assert d["offers"]["url"]=="https://reversedaan.github.io/ClaudeCode/aanmelden/#2027-04-voorjaar"
assert d["location"]["address"]["addressLocality"]=="Loenen"
h=open("_site/index.html").read(); o=json.loads(re.findall(r'<script type="application/ld\+json">(.*?)</script>',h,re.S)[0]); assert o["@type"]=="Organization"; print(o)
PY
cat _site/sitemap.xml; cat _site/robots.txt
! grep -q "404\|\.ics" _site/sitemap.xml
test "$(grep -c '<loc>' _site/sitemap.xml)" = "11"
python3 -c "import xml.dom.minidom;xml.dom.minidom.parse('_site/sitemap.xml')"
ls -la _site/favicon.svg _site/favicon.png _site/apple-touch-icon.png _site/images/deelkaart.jpg
python3 -c "import struct;d=open('_site/images/deelkaart.jpg','rb').read();print('jpg kB',len(d)//1024)"
# varianten: onder voorbehoud, voorbij
sed -i 's/^bevestigd: true/bevestigd: false/' src/retraites/2027-04-voorjaar.md
bouw; ! grep -q 'application/ld+json' $E; git checkout -- src/
sed -i -e 's/start: 2027-04-25/start: 2020-04-25/' -e 's/eind: 2027-04-29/eind: 2020-04-29/' src/retraites/2027-04-voorjaar.md
bouw; ! grep -q 'application/ld+json' $E; git checkout -- src/
# kapotte JSON-LD wordt opgemerkt
bouw; sed -i 's/"@type": "Event",/"@type": "Event", kapot/' $E
if node lib/controle.js _site /ClaudeCode/ > uit.txt 2>&1; then echo "had moeten falen"; exit 1; fi; grep -m1 "JSON-LD" uit.txt
echo "025 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
