export const globalMixin = {
    methods:{
        addClassEN(){
            if(this.text){
                let text = this.text;
                let ENRegex = /[A-Za-z]/g;
                let newText = text.replace(ENRegex, function(match) {
                    return `<span class="EN" style="letter-spacing: 0; font-family: 'NeverMind';">${match}</span>`;
                });
                this.text = newText;
            }
        }
    }
}

// 這幾行程式碼是用來替換文本中的英文字母。
// 首先，它定義了一個名為ENRegex的變量，
// 其中包含一個正則表達式 /[A-Za-z]/g。
// 這個正則表達式匹配所有大寫和小寫的英文字母。 
// g 修飾符是用來指定此模式是全局匹配，
// 因此不僅會替換第一個匹配項，而且會替換所有匹配項。
// 接下來，它使用 replace() 方法將text中所有匹配 ENRegex 的文本替換為一個新字符串。
// replace 第一個參數是一個正規表達式，表示要替換的字符串ㄋ
// replace 第二個參數是一個回調函數，用來替換匹配的字符串。