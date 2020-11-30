const { setInterval } = require("timers");

let html = document.querySelector('#html')
        //通过CSS选择器找到这个元素
let style = document.querySelector('#style')
let string = `
/* 你好，我叫燕凯
 * 接下来我演示一下我的前端工底
 * 首先我要准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
    border:none;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius :50%
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
/* 太极完成
 * 接下来让它转起来*/
#div1 {
    animation: 1s infinite reverse linear running xxx;
  }
  /* 旋转完成*/
`;
let string2 = "";
let n = 0;

let step = () => { 
    setTimeout(() => {
        if (string[n] === "\n") {
            //如果是回车 就不照搬
            string2 += "<br>"
        }
        else if (string[n] === " ") { 
            string2 += "&nbsp;"
        }
        else { 
             //不是回车就照搬
            string2 += string[n]
        } 
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        //demo.innerHTML = n;   //让我们可以网demo里面写字
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    },0)

}
  step();

