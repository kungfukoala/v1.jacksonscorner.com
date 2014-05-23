$(function(){window.addEventListener("load",function(){setTimeout(function(){window.scrollTo(0,1)},0)});$(".input-select-wrap select").not(".cell-select select").each(function(){title=$("option:selected",this).text();$(this).css({"z-index":10,opacity:0,appearance:"none","-khtml-appearance":"none","-webkit-appearance":"none"}).after('<span class="select value-'+title+'">'+title+"</span>").change(function(){var e=$("option:selected",this).text();$(this).next().removeClass(function(e,t){return(t.match(/\bvalue-\S+/g)||[]).join(" ")}).addClass("value-"+e).text(e)})});if($("#date-submit").length){$("#date-submit").find("input[type=submit]").remove();$("#date-submit").on("change","select",function(){$(this).closest("form").submit()})}$.tablesorter.addParser({id:"hidden-date",is:function(e){return!1},format:function(e,t,n){return parseInt($(n).data("fulldate"),10)},type:"numeric"});$(".log-sortable").tablesorter({headers:{1:{sorter:"hidden-date"}}});$(".entries-sortable").tablesorter({headers:{2:{sorter:"hidden-date"}}});$(".sortable").tablesorter();$(".tip").tooltip();markitupSettings={previewParserPath:"",onShiftEnter:{keepDefault:!1,openWith:"\n\n"},markupSet:[{name:"Heading 1",openWith:"# ",placeHolder:"Your title here..."},{name:"Heading 2",openWith:"## ",placeHolder:"Your title here..."},{name:"Heading 3",openWith:"### ",placeHolder:"Your title here..."},{name:"Heading 4",openWith:"#### ",placeHolder:"Your title here..."},{name:"Heading 5",openWith:"##### ",placeHolder:"Your title here..."},{name:"Heading 6",openWith:"###### ",placeHolder:"Your title here..."},{name:"Bold",key:"B",openWith:"**",closeWith:"**"},{name:"Italic",key:"I",openWith:"_",closeWith:"_"},{name:"Bulleted List",openWith:"- "},{name:"Numeric List",openWith:function(e){return e.line+". "}},{name:"Picture",key:"P",replaceWith:"![[![Alternative text]!]]([![Url:!:http://]!])"},{name:"Link",key:"L",openWith:"[",closeWith:"]([![Url:!:http://]!])",placeHolder:"Your text to link here..."},{name:"Quotes",openWith:"> "},{name:"Code Block / Code",openWith:"(!(	|!|`)!)",closeWith:"(!(`)!)"}]};$(".markitup").markItUp(markitupSettings);$("body").on("addRow",".grid",function(){$(".grid .markitup").not(".markItUpEditor").markItUp(markitupSettings)});var e={format:"yyyy-mm-dd"};$(".datepicker").datepicker(e).on("changeDate",function(){$(this).datepicker("hide")});$("body").on("addRow",".grid",function(){$(".grid .datepicker").datepicker(e).on("changeDate",function(){$(this).datepicker("hide")})});var t={defaultTime:"value"};$(".timepicker").timepicker(t);$("body").on("addRow",".grid",function(){$(".grid .timepicker").timepicker(t)});$("#publish-title").makeSlug({slug:$(".auto-slug")});$(document).ready(function(){$("#publish-title").length&&$("#publish-title").val().length>0&&$("#publish-title").keyup()});$(".selectize").selectize({delimiter:",",persist:!1,create:function(e){return{value:e,text:e}}});var n=function(e){var t,n=parseInt(e.data("maxRows"),10)||Infinity,r=e.find("tbody tr").length;t=r>=n?.2:1;e.next("a.grid-add-row").css("opacity",t)},r=function(e){e.children("tbody").children("tr").each(function(e){var t=e+1;$(this).children("th").html("<div class='count'>"+t+"</div><a href='#' class='grid-delete-row confirm'><span class='ss-icon'>delete</span></a>")})},i=function(e){e.find("input[name], textarea[name], select[name]").each(function(){var e=[];$(this).parents("tr").each(function(){e.push($(this).parent().children("tr").index($(this)))});e.reverse();var t=$(this).attr("name").replace(/page\[[\w\d\-_]+\]\[[\w\d\-_]+](?:\[\d+\]\[[\w\d_\-]+\])+/ig,function(t){var n=0;return t.replace(/(\[\d+\]\[[\w\d\-_]+\])/ig,function(t){var r=t.replace(/\[\d+\]/i,"["+e[n]+"]");n++;return r})});$(this).attr("name",t)})},s=function(e,t){var n=t.children(),r=t.clone();r.css("width","100%").children().each(function(e){$(this).width(n.eq(e).width())});return r},o={helper:s,handle:"th.drag-indicator",placeholder:"drag-placeholder",forcePlaceholderSize:!0,axis:"y",start:function(e,t){var n=$(this).find("tr")[0].cells.length;t.placeholder.html("<td colspan="+n+">&nbsp;</td>")},update:function(e,t){$(e.target).find("> tr").each(function(){var e=$(this).index()+1,t=$(this).closest(".grid");$(this).children("th:first-child").html("<div class='count'>"+e+"</div><a href='#' class='grid-delete-row confirm'><span class='ss-icon'>delete</span></a>");i(t)})}};$("a.grid-add-row").on("click",function(){var e=$(this).parent().children(".grid:first"),t=e.children("tbody").children("tr").length,s=e.data("maxRows")||Infinity,u=e.data("emptyRow");if(t>=s)return!1;e.append(u).find("table.grid tbody").sortable(o);i(e);n(e);r(e);e.trigger("addRow");return!1});$(document).on("click","a.grid-delete-row",function(){var e,t,s=$(this).closest(".grid"),u=s.data("minRows")||0;if($(this).is(".confirm")){var a=$(this).attr("data-confirm-message")||"Are you sure?";response=confirm(a);if(s.children("tbody").children("tr").length<=u){if(u>0){e="This grid requires at least "+u+" row";e+=u===1?".":"s.";alert(e)}$(this).addClass("confirm").html('<span class="icon">u</span>');n(s);r(s);return!1}response===!0&&$(this).closest("tr").remove();if(s.children("tbody").children("tr").length==0){s.append(s.data("emptyRow")).find("table.grid tbody").sortable(o);s.trigger("addRow")}i(s);n(s);r(s);return!1}});$(".grid tbody").sortable(o);$(".confirm").click(function(){var e=$(this).attr("data-confirm-message")||"Are you sure?";return confirm(e)});$(".faux-submit").click(function(e){e.preventDefault();$(".primary-form").submit()});$(".go-back").click(function(e){e.preventDefault();window.history.back()});$(".btn-remove-file").on("click",function(e){e.preventDefault();var t=$(this).next("input").attr("name");$(this).parent().parent().append($("<p />").append($("<input/>").attr("type","file").attr("name",t)));$(this).parent().remove()})});