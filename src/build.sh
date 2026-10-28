set -e
cd "$(dirname "$0")"
python3 splice2.py && python3 splice3.py && python3 build-site.py
V=$(date +%Y%m%d%H%M%S)
sed -i "s/const BUILD='__BUILD__';/const BUILD='$V';/" site/index.html
printf '%s\n' "$V" > site/version.txt
echo "build $V"
python3 digits.py
python3 chkbuild.py || { echo "BUILD HAS A SYNTAX ERROR"; exit 1; }
