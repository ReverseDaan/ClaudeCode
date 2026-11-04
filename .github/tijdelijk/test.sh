set -euo pipefail
npm ci 2>&1 | tail -1
bouw() { npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | grep -v Benchmark | tail -1; }
bouw
node lib/controle.js _site /ClaudeCode/
echo "== 027"
grep -q "script-src 'self' 'inline-speculation-rules'" _site/index.html
grep -q '"href_matches": "/ClaudeCode/\*"' _site/index.html
grep -q "@view-transition" _site/css/style.css
python3 - <<'PY'
import json,re
h=open("_site/index.html").read()
b=re.search(r'<script type="speculationrules">(.*?)</script>',h,re.S).group(1); print(json.loads(b))
PY
echo "027 OK"
bouw
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
