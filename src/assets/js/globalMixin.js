export const globalMixin = {
    methods:{
        addClassEN(){
            if(this.text){
                for(let i=0; i<this.text.length; i++){
                    let item = this.text[i];
                    let keys = Object.keys(item);
                    for(let j=0; j < keys.length; j++){
                        let key = keys[j];
                        // 判斷是否為 link 屬性，是的話不修改
                        if(key !== 'link' && key !== 'link2' && typeof item[key] === 'string'){
                            // 正則表達式，同時篩選大小寫英文與數字
                            let ENRegex = /[A-Za-z0-9]/g;
                            // let ENRegex = /[A-Za-z]/g;
                            item[key] = item[key].replace(ENRegex, function(match){
                                return `<span class="EN" style="letter-spacing: 0; font-family: 'NeverMind';">${match}</span>`;
                            });
                        }
                    }
                }

                // this.text.forEach(item => {
                //     Object.keys(item).forEach(property => {
                //         if(typeof item[property] === "string"){
                //             let ENRegex = /[A-Za-z]/g;
                //             let newText = item[property].replace(ENRegex, function(match) {
                //                 return `<span class="EN" style="letter-spacing: 0; font-family: 'NeverMind';">${match}</span>`;
                //             });
                //             item[property] = newText;
                //         }
                //     });
                // });

                // this.text.forEach(item => {
                //     let ENRegex = /[A-Za-z]/g;
                //     let newText = item.txt.replace(ENRegex, function(match){
                //         return `<span class="EN" style="letter-spacing: 0; font-family: 'NeverMind';">${match}</span>`;
                //     });
                //     item.txt = newText;
                // });

                // text 為字串時
                // let text = this.text;
                // let ENRegex = /[A-Za-z]/g;
                // let newText = text.replace(ENRegex, function(match) {
                //     return `<span class="EN" style="letter-spacing: 0; font-family: 'NeverMind';">${match}</span>`;
                // });
                // this.text = newText;
            }
        }
        // addClassEN() {
        //     if (this.text) {
        //         let ENRegex = /[A-Za-z]/g;
        //         this.text.forEach(item => {
        //             for (let key in item) {
        //                 if (typeof item[key] === 'string') {
        //                     item[key] = item[key].replace(ENRegex, function(match) {
        //                         return `<span class="EN" style="letter-spacing: 0; font-family: 'NeverMind';">${match}</span>`;
        //                     });
        //                 } else if (Array.isArray(item[key])) {
        //                     item[key].forEach(subitem => {
        //                         for (let subkey in subitem) {
        //                             if (typeof subitem[subkey] === 'string') {
        //                                 subitem[subkey] = subitem[subkey].replace(ENRegex, function(match) {
        //                                     return `<span class="EN" style="letter-spacing: 0; font-family: 'NeverMind';">${match}</span>`;
        //                                 });
        //                             }
        //                         }
        //                     });
        //                 }
        //             }
        //         });
        //     }
        // }
    }
}

// 這幾行程式碼是用來替換文本中的英文字母。
// 首先，它定義了一個名為ENRegex的變量，
// 其中包含一個正則表達式 /[A-Za-z]/g。
// 這個正則表達式匹配所有大寫和小寫的英文字母。 
// g 修飾符是用來指定此模式是全局匹配，
// 因此不僅會替換第一個匹配項，而且會替換所有匹配項。
// 接下來，它使用 replace() 方法將text中所有匹配 ENRegex 的文本替換為一個新字符串。
// replace 第一個參數是一個正規表達式，表示要替換的字符串
// replace 第二個參數是一個回調函數，用來替換匹配的字符串。