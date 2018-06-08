
// 侧边栏申请服务商点击跳转
function shenqing() {
    window.open('申请服务商.html','_self');
}

// 侧边栏办公采购点击跳转
function caigou() {
    window.open('http://bd.dabangong.com/m/city.php','_self');
}

// 首页下方列表
$(".info").click(function () {
    window.open('g个人介绍_2.html','_self');
})


// 主页左上角图标点击打开侧边栏
$("#OpenLeftMenu1").click(function () {
    $(".menu").css("width","10.65rem");
    $(".index").css("margin-left","10.65rem");
    $(".onMain").css("display","block");
});

// 发单页左上角图标点击打开侧边栏
$("#OpenLeftMenu2").click(function () {
    $(".menu").css("width","10.65rem");
    $(".fadanMain").css("margin-left","10.65rem");
    $(".onMain").css("display","block");
});

// 消息页左上角图标点击打开侧边栏
$("#OpenLeftMenu3").click(function () {
    $(".menu").css("width","10.65rem");
    $(".xiaoxiMain").css("margin-left","10.65rem");
    $(".onMain").css("display","block");
});


// 侧边栏打开后生成遮罩层关闭侧边栏
$(".onMain").click(function () {
    $(".menu").css("width","0rem");
    $(".index,.fadanMain,.xiaoxiMain").css("margin-left","0rem");
    $(".onMain").css("display","none");
});



// 主页顶部当前地点点击打开搜索栏
$("#there").click(function () {
    $(".writePlace").css("display","block");
});

// 主页顶部当前地点左侧图标点击打开搜索栏
$("#thereImg").click(function () {
    $(".writePlace").css("display","block");
});

// 搜索栏取消按钮点击关闭
$("#writeFalse").click(function () {
    $(".writePlace").css("display","none");
});

// 改变当前位置信息
// 无效 无效 无效
// function alterPlace() {
//     var close=document.getElementsByClassName("writePlace");
//     var inputValue=document.getElementById("placeValue");
//     var placeInner=document.getElementsByClassName("there");
//     placeInner.innerHTML==inputValue.value;
//     close.style.display="none";
// }



// 侧边栏点击主页切换页面
$("#indexBox").click(function () {
    $(".index,#indexClickImg,#indexAfterClick").css("display","block");
    $(".fadanMain,.xiaoxiMain,#indexAfter,#fadanClickImg,#fadanAfterClick,#xiaoxiClickImg,#xiaoxiAfterClick").css("display","none");
    $("#indexP").css("color","#cfff53");
    $("#fadanP,#xiaoxiP").css("color","white");

    $(".menu").css("width","0rem");
    $(".index,.fadanMain,.xiaoxiMain").css("margin-left","0rem");
    $(".onMain").css("display","none");
});

// 侧边栏点击发单切换页面
$("#fadanBox").click(function () {
    $(".fadanMain,#fadanClickImg,#fadanAfterClick,#indexAfter").css("display","block");
    $(".index,.xiaoxiMain,#indexAfterClick,#indexClickImg,#indexAfterClick,#xiaoxiClickImg,#xiaoxiAfterClick").css("display","none");
    $("#fadanP").css("color","#cfff53");
    $("#indexP,#xiaoxiP").css("color","white");

    $(".menu").css("width","0rem");
    $(".index,.fadanMain,.xiaoxiMain").css("margin-left","0rem");
    $(".onMain").css("display","none");
});

// 侧边栏点击消息切换页面
$("#xiaoxiBox").click(function () {
    $(".xiaoxiMain,#xiaoxiClickImg,#xiaoxiAfterClick,#indexAfter").css("display","block");
    $(".fadanMain,.index,#indexAfterClick,#fadanClickImg,#fadanAfterClick,#indexClickImg,#indexAfterClick").css("display","none");
    $("#xiaoxiP").css("color","#cfff53");
    $("#fadanP,#indexP").css("color","white");

    $(".menu").css("width","0rem");
    $(".index,.fadanMain,.xiaoxiMain").css("margin-left","0rem");
    $(".onMain").css("display","none");
});


// 发单页未完成订单选项点击切换页面
$("#fadanTitle1").click(function () {
    $("#fadanTitle1").css({"background-color":"#de1d1d","color":"#fff"});
    $("#fadanTitle2").css({"background-color":"#fff","color":"#ff0000"});
    $("#fadanCon1").css("display","block");
    $("#fadanCon2").css("display","none");
});

// 发单页已完成订单选项点击切换页面
$("#fadanTitle2").click(function () {
    $("#fadanTitle2").css({"background-color":"#de1d1d","color":"#fff"});
    $("#fadanTitle1").css({"background-color":"#fff","color":"#ff0000"});
    $("#fadanCon2").css("display","block");
    $("#fadanCon1").css("display","none");
});

// 消息页消息通知选项点击切换页面
$("#xiaoxiTitle1").click(function () {
    $("#xiaoxiTitle1").css({"background-color":"#de1d1d","color":"#fff"});
    $("#xiaoxiTitle2").css({"background-color":"#fff","color":"#ff0000"});
    $("#xiaoxiCon1").css("display","block");
    $("#xiaoxiCon2").css("display","none");
});

// 消息页系统消息选项点击切换页面
$("#xiaoxiTitle2").click(function () {
    $("#xiaoxiTitle2").css({"background-color":"#de1d1d","color":"#fff"});
    $("#xiaoxiTitle1").css({"background-color":"#fff","color":"#ff0000"});
    $("#xiaoxiCon2").css("display","block");
    $("#xiaoxiCon1").css("display","none");
});



// $(".index").on("swipeleft",function(){
//     $(".menu").css("width","10.65rem");
//     $(".index").css("margin-left","10.65rem");
//     $(".onMain").css("display","block");
// });
//
// $(".index").on("swiperight",function(){
//     $(".menu").css("width","0rem");
//     $(".index").css("margin-left","0rem");
//     $(".onMain").css("display","none");
// });
//
// $(".menu").on("swiperight",function(){
//     $(".menu").css("width","0rem");
//     $(".index").css("margin-left","0rem");
//     $(".onMain").css("display","none");
// });



$(function(){
		
	var bannerSwiper = new Swiper('.swiper-container', {
		autoplay: true,//可选选项，自动滑动
	  	pagination: {
	  		el: '.swiper-pagination',
	  	},
	  	uniqueNavElements: false,
	})	

	
})
