set -euo pipefail
npm install --save-dev --save-exact=false @fontsource/cormorant-garamond @fontsource/source-sans-3 @fontsource/fraunces @fontsource/nunito 2>&1 | tail -3
cat package.json
ls node_modules/@fontsource/cormorant-garamond/files | grep "latin-[0-9]*-" | grep -v ext | grep woff2
ls node_modules/@fontsource/source-sans-3/files | grep "^source-sans-3-latin-[0-9]" | grep woff2
ls node_modules/@fontsource/fraunces/files | grep "^fraunces-latin-[0-9]" | grep woff2
ls node_modules/@fontsource/nunito/files | grep "^nunito-latin-[0-9]" | grep woff2
du -sh node_modules/@fontsource/*/files/*latin-500-normal.woff2
echo "LOCK-BEGIN"; base64 -w0 package-lock.json; echo; echo "LOCK-EINDE"
npm audit 2>&1 | tail -12 || true
