// var Wilddog = require("wilddog");
var ref = new Wilddog("https://liumin.wilddogio.com/");
var usersRef = ref.child("liumin");
// usersRef.set({
//   "Number":0
// });
ref.child("liumin/Number").once("value", function(data) {
  var nnn = data.val();
  ref.child("liumin").update({
    "Number":nnn+1
  })
    var na = navigator;
    ref.child("users").push({
        "ip":ip,
        "appVersion":na.appVersion,
        "platform":na.platform
    })

});
ref.child("liumin").on("value", function(data) {
  $(".Znum").text(data.val().Number);
});

window.onload = function(){
    console.log("%c你好! O(∩_∩)O~~", "margin:100px 0;color:#393550;text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
    console.log("%cQQ:970568830,TEL:18629974148,欢迎交流", "background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:1.5em;");
    console.log("%c如果你能看到这行字,说明你也是个苦逼的程序员ヾ(^▽^*)))大家一起加油吧!","color:#666;font-size:20px")
    console.log("%c如果你是高贵的HR,请留意我这个好学又机灵的好孩子~(@^_^@)~我叫刘敏,正在找合适的工作,你可能会需要我的,祝您身体健康阖家欢乐,么么哒~~~","color:#666;font-size:20px")

}


// ref.child("liumin").on("value", function(data) {
//     var num = data.val().Number;
//   console.log(num);   // 结果会在 console 中打印出 "beijing"
// });

// ref.child("liumin").update({
//     "Number":nnn+1
// })
// console.log(ref.child("liumin/Number"));
