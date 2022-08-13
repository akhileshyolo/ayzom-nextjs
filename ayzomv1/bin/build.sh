#!/bin/bash

npm run build-prod
mv out/index.html ./
mv out dist

zip -r build.zip dist index.html
rm -rf dist index.html