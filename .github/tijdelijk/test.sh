set -euo pipefail
npm ci 2>&1 | tail -1
npx @11ty/eleventy --pathprefix=/ClaudeCode/ 2>&1 | grep -v Deprecation | tail -1
node lib/controle.js _site /ClaudeCode/
grep -o '<html[^>]*>' _site/index.html
grep -c "Daan opzet 1" _site/index.html
# ter vergelijking: main bouwen naar _site_main
git fetch -q origin main && git worktree add -q ../main origin/main
(cd ../main && npm ci >/dev/null 2>&1 && npx @11ty/eleventy --pathprefix=/ClaudeCode/ --output=_site 2>&1 | tail -1) && mv ../main/_site _site/_main
echo "037 OK"
echo "SITE-BEGIN"; tar czf - _site | base64 -w0; echo; echo "SITE-EINDE"
