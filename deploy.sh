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
          git remote set-url origin https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository }}.git

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'  # 使用你的 Node.js 版本

      - name: Install dependencies
        run: npm install

      - name: Build the app
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.3
        with:
          branch: gh-pages  # 部署的目標分支
          folder: dist      # 部署的文件夾，應該是構建結果的文件夾

      - name: Force push to gh-pages
        run: |
          git add -A
          git commit -m "Deploy to gh-pages"
          git push --force origin gh-pages