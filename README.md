Intro
  materializecss + reactjs + express + socket.io + mongodb

Server
  1.用webpack打包
  2.使用nodemon
  3.嘗試使用port:3000搞定一切

7/19
  1.已使用nodemon來watch server.js的更動。
  2.sever部分已經可以，但是缺少與client連結的部分。(解決方法如下3)
  2.一定要用webpack來打包react成static網頁，
    再由server.js render去導入畫面。