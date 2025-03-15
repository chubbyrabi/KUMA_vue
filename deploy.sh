name: Deploy Vue app to GitHub Pages

on:
  push:
    branches:
      - master  # 确保这是你要触发部署的分支

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Configure Git
        run: |
          git config --global user.name "chubbyrabi"
          git config --global user.email "chubbyrabi@gmail.com"

      - name: Show git configuration
        run: |
          git config --list

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build the app
        run: npm run build

      - name: List files in dist
        run: |
          ls -al dist  # 查看 dist 目录中的文件

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.3
        with:
          branch: gh-pages
          folder: dist