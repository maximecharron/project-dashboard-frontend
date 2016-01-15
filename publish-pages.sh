git checkout gh-pages
cp dist/*
rm -rf dist
git add *
git commit -am "Deploy pages"
git push origin gh-pages
