// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// MarkDown tags example
// http://en.wikipedia.org/wiki/Markdown
// http://daringfireball.net/projects/markdown/
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
mySettings={previewParserPath:"",onShiftEnter:{keepDefault:!1,openWith:"\n\n"},markupSet:[{name:"First Level Heading",placeHolder:"Your title here...",closeWith:function(e){return miu.markdownTitle(e,"=")}},{name:"Second Level Heading",placeHolder:"Your title here...",closeWith:function(e){return miu.markdownTitle(e,"-")}},{name:"Heading 3",openWith:"### ",placeHolder:"Your title here..."},{name:"Heading 4",openWith:"#### ",placeHolder:"Your title here..."},{name:"Heading 5",openWith:"##### ",placeHolder:"Your title here..."},{name:"Heading 6",openWith:"###### ",placeHolder:"Your title here..."},{name:"Bold",key:"B",openWith:"**",closeWith:"**"},{name:"Italic",key:"I",openWith:"_",closeWith:"_"},{name:"Bulleted List",openWith:"- "},{name:"Numeric List",openWith:function(e){return e.line+". "}},{name:"Picture",key:"P",replaceWith:"![[![Alternative text]!]]([![Url:!:http://]!])"},{name:"Link",key:"L",openWith:"[",closeWith:"]([![Url:!:http://]!])",placeHolder:"Your text to link here..."},{name:"Quotes",openWith:"> "},{name:"Code Block / Code",openWith:"(!(	|!|`)!)",closeWith:"(!(`)!)"}]};miu={markdownTitle:function(e,t){heading="";n=$.trim(e.selection||e.placeHolder).length;for(i=0;i<n;i++)heading+=t;return"\n"+heading}};