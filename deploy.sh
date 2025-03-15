#!/bin/bash

# 配置 Git 用戶信息
git config --global user.name "chubbyrabi"
git config --global user.email "chubbyrabi@gmail.com"

# 生成應用的 build 文件
npm run build

# 切換到 gh-pages 分支（如果需要的話）
git checkout gh-pages

# 拷貝 build 生成的文件
cp -r dist/* .

# 添加所有更動
git add -A

# 提交更動
git commit -m "Deploy to GitHub Pages"

# 強制推送到 gh-pages 分支
git push --force origin gh-pages