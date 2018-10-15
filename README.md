# DesignPatterns
#  安裝 Javascript ES2015 編譯工具

## 安裝 node.js

開啟網站  https://nodejs.org/en/，下載安裝 node.js

## 設定 npm 的 proxy

如果要在公司編譯，請設定 npm 的 proxy。開啟 Command Prompt 輸入以下指令：

```
npm config set proxy http://proxyhq.senao.com.tw:80
npm config set https-proxy http://proxyhq.senao.com.tw:80
```

## 安裝 WebPack 與 node_modules

假設此 Git 被 Clone 到 C:\DesignPatterns，請在 Commad Prompt 輸入

```
cd C:\DesignPatterns
npm install -g webpack
npm install
npm install assert-js
```

# 編譯測試程式

測試程式都在 tests 目錄裡面，直接開啟 .html 便可以執行。如果要自行編譯，請在 Git 根目錄(ex: C:\DesignPatterns) 輸入

```
build01
```

