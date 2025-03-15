#!/usr/bin/env sh

# 發生錯誤時終止腳本
set -e

# 建立 Vue 專案的 build 產物
npm run build

# 進入 build 輸出的目錄
cd dist

# 部署到 GitHub Pages
git init
git add -A
git commit -m "deploy"

# 推送到 gh-pages 分支
git branch -M master
git remote add origin https://github.com/chubbyrabi/KUMA_vue.git
git push -f origin master:gh-pages

cd -