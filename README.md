# Code-scroll 代码滚动
 ## [预览链接](https://kailoveq.github.io/Code-scroll/dist/index.html)
 
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac87a2773e9049e0986575e781f33498~tplv-k3u1fbpfcp-watermark.image)

# JS实现代码滚动
> ### 目录
> #### 阶段一：让字符实现自动滚动
> #### 阶段二：字符可以应用到CSS
> #### 阶段三：完成太极的制作
> #### 阶段四：手机用户访问
> #### 阶段五：部署到GitHub
## 最好的学习方法，不是看书也不是问人，而是定一个目标然后去实现它。
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f23723f538f3459b943d77d54410689f~tplv-k3u1fbpfcp-watermark.image)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb931ae75d0a46b8a8b13d35718bf24c~tplv-k3u1fbpfcp-watermark.image)

## 阶段一：让字符实现自动滚动
1. 在桌面建一个文件夹，暂命名为 Code scroll，是代码滚动的意思，文件夹中建一个子文件夹命名为 src，用vscode打开 Code scroll文件夹，在src目录下建3个文件，index.html 、style.css 、main.js 。index.html里面要关联 style.css 和 mian.js.

2. 安装parcel,最好使用楼主相似的版本，1.12.3，
* 初始化文件夹
```
npm init -y
```
* 安装parcel的命令
```
yarn global add parcel 或者 npm i -g parcel
``` 
* 运行预览

```
parcel src/index.html
``` 
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e664335d7ccd489fbbe0cf5acc82f12a~tplv-k3u1fbpfcp-watermark.image)

实现字符的滚动

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40df2745ed984f29aa37e3c49e180cae~tplv-k3u1fbpfcp-watermark.image)
## 阶段二：字符可以应用到CSS

回车变成html里面的空格

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2fb26b028284710b43445a9a4bbf040~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fda8cc6384542c4945f61414cfdd225~tplv-k3u1fbpfcp-watermark.image)

## 阶段三: 完成太极的制作
### 太极的制作，本次采用的不是多个div的方法，而是使用了[背景渐变(css gradient background)](https://cssgradient.io/)
**让一个div 左边黑，右边白**

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69f937d573d54229a3da366af7e1a3c5~tplv-k3u1fbpfcp-watermark.image)

**伪元素**：CSS在div的第一个子元素加1，第二个加2，,然后让1和2都变成两个球，记得**做定位**。
```
#div1::before {
  content: "";
  display: block;
  position: relative;
}

#div1::after {
  content: "";
  display: block;
  position: relative;
}
```
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/514fd1f7a301440db00593a0eadc36de~tplv-k3u1fbpfcp-watermark.image)

接下来怎么让两个伪元素里面有扣除一个洞呢。还是[背景渐变(css gradient background)](https://cssgradient.io/)实现镜像渐变。


![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5598f575f27b4177b1ff7a37e04ee2cf~tplv-k3u1fbpfcp-watermark.image)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87278c552ca044058646d93d51da916f~tplv-k3u1fbpfcp-watermark.image)
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d233817f31c4c63a153070e108459e9~tplv-k3u1fbpfcp-watermark.image)
## 阶段四：手机用户访问
媒体查询：
```
@media (max-width: 500px) {
  #bb {
    background: blanchedalmond;             //媒体查询，将背景设置为浅白色
  }

  #html {									// 代码滚动区域
    height: 55vh;                          //手机上的布局，分为上下结构，上半部分滚动代码，下半部分展示太极
    overflow: auto;
    word-break: break-all;					//手机屏幕窄，要设置换行
    border: 2px solid black;
    background: rgba(7, 49, 60, 0.9);
    color: white;
    font-family: Fira Code;
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 1%;
  }

  #div1Wrapper {							// 太极展示区域	
    border: 1px solid black;
    background: rgba(7, 49, 60, 0.1);
    border-radius: 1%;
    height: 35vh;
  }

  #div1 {
    position: relative;
    top: 20px;
    right: 0;
    margin: 0 auto;
  }
}
```
## 阶段五：部署到GitHub
上传到[GitHub](https://github.com),让更多的人看到你！
## 程序分享
 [程序预览链接](https://kailoveq.github.io/Code-scroll/dist/index.html)、[程序下载链接](https://github.com/KailoveQ/Code-scroll.git)
 
由于本人水平有限，如有描述不准确的地方请给我留言，欢迎交流~

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c76706fdfb648c9a5dfe025d6fd0250~tplv-k3u1fbpfcp-watermark.image)
