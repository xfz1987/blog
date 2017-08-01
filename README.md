# 我的博客练习
## 通过marked的方式实现博客

准备工作:
   1.githup上下载marked.js、typo.css
   2. 一级标题    # 一级标题
      二级标题    ## 二级标题
>     引言 >      我家门前有两俩自行车，一个是ofo，另一个，还是ofo —— 鲁迅
      图片        ```![](图片地址)```
      显示代码    code两边分别三个反顿号
      小圆点      -
      粗体字      **fuck**
      斜体字      *fuck*
      删除线      ~~fuck~~
      链接       [链接名称](链接地址) 
      水平线     ***
      表格      
              表头  | 表头
      ------------- | -------------
         单元格内容 | 单元格内容
       单元格内容l  | 单元格内容
***
名字 | 性别
------------- | -------------
xfz  | male
czy  | unkonw

   3. ```<div id="content"></div>
      var markdown = `markdown内容`;
      document.getElementById('content').innerHTML = marked(markdown);```
   4. 上传githup，设置githup -> setting -> Source为master branch -> save
   5. 实现动态编写博客，安装nodejs，
`<hello world>`