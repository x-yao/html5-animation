window.onload = function(){
	$("#loading,.loadingPart").css("opacity","0");
setTimeout(function (){
   $("#loading,.loadingPart").addClass("displayN");
},1000);
$(document).ready(function() {
	var width=Math.round($(window).width());
	var height=Math.round($(window).height());
	var width1=width/2-500+"px";
	var height1=height-500+"px";
	var width2=width/2-750+"px";
	var height2=height-190+"px";
	var heightor=height+560+"px";
	var heightor1=500+560+"px";
	$(".body").css("width",width+"px");
	$(".body").css("height",height+"px");
	//动画延迟
	setTimeout(function (){
	$("#shu3").css("opacity","1");
},2800);
	setTimeout(function (){
	$("#shu2").css("opacity","1");
},3400);
	setTimeout(function (){
	$("#shu1").css("opacity","1");
},3000);
	setTimeout(function (){
	$("#shu4").css("opacity","1");
},3200);
	setTimeout(function (){
	$("#shan").css("opacity","1");
},800);
	setTimeout(function (){
	$("#shan1").css("opacity","1");
},1000);
	setTimeout(function (){
	$("#shan2").css("opacity","1");
},1200);
	setTimeout(function (){
	$("#he").css("opacity","1");
},2800);
	setTimeout(function (){
	$(".yuan").css("opacity","1");
},1000);
	setTimeout(function (){
	$("#FPW1").css("opacity","1");
	$("#FPW1").addClass("wordAnimate");
},4000);
	setTimeout(function (){
	$("#FPW2").css("opacity","1");
	$("#FPW2").addClass("wordAnimate");
},5000);
	setTimeout(function (){
	$("#FPW3").css("opacity","1");
	$("#FPW3").addClass("wordAnimate");
},6000);
	setTimeout(function (){
	$("#FPW4").css("opacity","1");
	$("#FPW4").addClass("wordAnimate");
},7000);
	setTimeout(function (){
	$("#FPW5").css("opacity","1");
	$("#FPW5").addClass("wordAnimate");
},8000);
	setTimeout(function (){
	$("#FPW6").css("opacity","1");
	$("#FPW6").addClass("wordAnimate");
},9000);
	setTimeout(function (){
	$("#FPW7").css("opacity","1");
	$("#FPW7").addClass("wordAnimate");
},10000);
	setTimeout(function (){
	$("#FPW8").css("opacity","1");
	$("#FPW8").addClass("wordAnimate");
},11000);
	setTimeout(function (){
	$("#FPW9").css("opacity","1");
	$("#FPW9").addClass("wordAnimate");
},12000);
	setTimeout(function (){
	$("#FPW10").css("opacity","1");
	$("#FPW10").addClass("wordAnimate");
},13000);
	setTimeout(function (){
	$("#FPW11").css("opacity","1");
	$("#FPW11").addClass("wordAnimate");
},14000);
	setTimeout(function (){
	$("#FPW12").css("opacity","1");
	$("#FPW12").addClass("wordAnimate");
},15000);
	setTimeout(function (){
	$("#FPW13").css("opacity","1");
	$("#FPW13").addClass("wordAnimate");
},16000)
	setTimeout(function (){
	$("#FPW14,#arrR1").css("opacity","1");
	$("#FPW14").addClass("wordAnimate");
	$("#arrR1").removeClass("displayN");
},17000);

//文字lift设置
    var FWordTitle=width/2+350;
	var FWordLeft=FWordTitle-80;
	$("#FPW1").css("left",FWordTitle+"px");
	var a=FWordLeft;
	for(var i=2;i<15;i++){
		$("#FPW"+i).css("left",a+"px");
		a=a-50;
	}
/*	setTimeout(function (){
	$("#FPW1,#FPW2,#FPW3,#FPW4,#FPW5,#FPW6,#FPW7,#FPW8,#FPW9,#FPW10,#FPW11").removeClass("wordAnimate");
	$("#FPW1,#FPW2,#FPW3,#FPW4,#FPW5,#FPW6,#FPW7,#FPW8,#FPW9,#FPW10,#FPW11").addClass("wordAnimateL");
	$("#FPW1,#FPW2,#FPW3,#FPW4,#FPW5,#FPW6,#FPW7,#FPW8,#FPW9,#FPW10,#FPW11").css("opacity","0");
},15000);*/
    //浏览器参数

	$(".background").css("left",width1);
	$(".background").css("top",height1);
	$("#Xbackground").css("left",width1);
	$("#Xbackground").css("top",height1);
	$("#Qbackground").css("left",width1);
	$("#Qbackground").css("top",height1);
	$("#Dbackground").css("left",width1);
	$("#Dbackground").css("top",height1);
	$(".FirstPart").css("width",width+"px");
	$(".FirstPart").css("height",height+"px");
	$(".SecondPart").css("width",width+"px");
	$(".SecondPart").css("height",height+"px");
	$(".ThirdPart").css("width",width+"px");
	$(".ThirdPart").css("height",height+"px");
	$(".FourthPart").css("width",width+"px");
	$(".FourthPart").css("height",height+"px");
	$(".FirstPart").css("-webkit-transform-origin","50%"+" "+heightor);
	$("#Xbackground").css("-webkit-transform-origin","50%"+" "+heightor1);
	$("#Qbackground").css("-webkit-transform-origin","50%"+" "+heightor1);
	$("#Dbackground").css("-webkit-transform-origin","50%"+" "+heightor1);
	$(".yuan").css("left",width2);
	$(".yuan").css("top",height2);

//翻页箭头
$("#CarrR").addClass("displayN");
$("#XarrR2").addClass("displayN");
$("#QarrR2").addClass("displayN");
$(".arrR").hover(
function(){
	$(this).addClass("arrR1");
},
function(){
	$(this).removeClass("arrR1");
});
$(".arrL").hover(
function(){
	$(this).addClass("arrL1");
},
function(){
	$(this).removeClass("arrL1");
});
$("#arrR1").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-90deg)");
  $(".yuan").css("-webkit-transform","rotate(-90deg)");
  $("body").css("background","#E8EC9D");
  $("#Xbackground").removeClass("displayN");
  $(this).addClass("displayN");
  $("#CarrR").removeClass("displayN");
	setTimeout(function (){
	$("#Xjinzita").css("opacity","1");
},2800);
	setTimeout(function (){
	$("#Xxrz1").css("opacity","1");
},3000);
	setTimeout(function (){
	$("#Xxrz2").css("opacity","1");
},3200);
	setTimeout(function (){
	$("#Xshan1").css("opacity","1");
},1000);
	setTimeout(function (){
	$("#Xshan2").css("opacity","1");
},1200);
	setTimeout(function (){
	$("#Xhu").css("opacity","1");
},3800);
	setTimeout(function (){
	$("#XarrL,#XarrR").removeClass("displayN");
	$("#XarrL,#XarrR").css("opacity","1");
},4000);
	setTimeout(function (){
	$("#Xlt").css("opacity","1");
},3400);
});
$("#CarrR").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-90deg)");
  $(".yuan").css("-webkit-transform","rotate(-90deg)");
  $("body").css("background","#E8EC9D");
  $("#Xbackground").css("-webkit-transform","rotate(0deg)");
  $("#Qbackground").css("-webkit-transform","rotate(90deg)");
  $("#Dbackground").css("-webkit-transform","rotate(180deg)");
});

$("#XarrL").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(0deg)");
  $(".yuan").css("-webkit-transform","rotate(0deg)");
  $("#Xbackground").css("-webkit-transform","rotate(90deg)");
  $("#Qbackground").css("-webkit-transform","rotate(180deg)");
    $("#Dbackground").css("-webkit-transform","rotate(270deg)");
  $("body").css("background","#d0efe7");
});
  
$("#XarrR").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-180deg)");
  $(".yuan").css("-webkit-transform","rotate(-180deg)");
  $("#Xbackground").css("-webkit-transform","rotate(-90deg)");
  $("#Qbackground").css("-webkit-transform","rotate(0deg)");
    $("#Dbackground").css("-webkit-transform","rotate(90deg)");
  $("#Qbackground").removeClass("displayN");
  $("body").css("background","#d2e5af");
  $(this).addClass("displayN");
  $("#XarrR2").removeClass("displayN");
	setTimeout(function (){
	$("#Qshu1").css("opacity","1");
},2000);
	setTimeout(function (){
	$("#Qshu2").css("opacity","1");
},2400);
	setTimeout(function (){
	$("#Qshu3").css("opacity","1");
},2800);
	setTimeout(function (){
	$(".xm").css("opacity","1");
},1200);
	setTimeout(function (){
	$("#Qdcr").css("opacity","1");
},1800);
	setTimeout(function (){
	$("#Qhu").css("opacity","1");
},3800);
	setTimeout(function (){
	$("#QarrL,#QarrR").removeClass("displayN");
	$("#QarrL,#QarrR").css("opacity","1");
},4000);
	setTimeout(function (){
	$("#Qf1").css("opacity","1");
},6000);
	setTimeout(function (){
	$("#Qf2").css("opacity","1");
},8000);
	setTimeout(function (){
	$("#Qf3").css("opacity","1");
},9400);
	setTimeout(function (){
	$("#Qf4").css("opacity","1");
},10000);
	setTimeout(function (){
	$(".xm").removeClass("xmgrow");
	$(".xm").addClass("xmblowL");
},6000);
	setTimeout(function (){
	$("#Qf1").addClass("feng1");
},6000);
	setTimeout(function (){
	$("#Qf2").addClass("feng2");
},7000);
	setTimeout(function (){
	$("#Qf3").addClass("feng3");
},7000);
	setTimeout(function (){
	$("#Qf4").addClass("feng4");
},7800);
});
$("#XarrR2").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-180deg)");
  $(".yuan").css("-webkit-transform","rotate(-180deg)");
  $("body").css("background","#d2e5af");
  $("#Xbackground").css("-webkit-transform","rotate(-90deg)");
  $("#Qbackground").css("-webkit-transform","rotate(0deg)");
  $("#Dbackground").css("-webkit-transform","rotate(90deg)");
});

$("#QarrL").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-90deg)");
  $(".yuan").css("-webkit-transform","rotate(-90deg)");
  $("#Xbackground").css("-webkit-transform","rotate(0deg)");
  $("#Qbackground").css("-webkit-transform","rotate(90deg)");
  $("#Dbackground").css("-webkit-transform","rotate(180deg)");
  $("body").css("background","#E8EC9D");
});

$("#QarrR").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-270deg)");
  $(".yuan").css("-webkit-transform","rotate(-270deg)");
  $("#Xbackground").css("-webkit-transform","rotate(-180deg)");
  $("#Qbackground").css("-webkit-transform","rotate(-90deg)");
  $("#Dbackground").css("-webkit-transform","rotate(0deg)");
  $("#Dbackground").removeClass("displayN");
  $("body").css("background","#97cbf9");
  $(this).addClass("displayN");
  $("#QarrR2").removeClass("displayN");
	setTimeout(function (){		
	$("#Dwall").css("opacity","1");
},800);
	setTimeout(function (){		
	$("#Dshan").css("opacity","1");
},1400);
	setTimeout(function (){
	$("#Dshan1").css("opacity","1");
},1000);
	setTimeout(function (){
	$("#Dyi").css("opacity","1");
},1800);
	setTimeout(function (){
	$("#Dshu1").css("opacity","1");
},2500);
	setTimeout(function (){
	$("#Dshu2").css("opacity","1");
},3000);
	setTimeout(function (){
	$("#Dshu3").css("opacity","1");
},3500);
	setTimeout(function (){
	$("#Dshu4").css("opacity","1");
},4000);
	setTimeout(function (){
	$("#Dshu5").css("opacity","1");
},4500);
	setTimeout(function (){
	$("#Dshu6").css("opacity","1");
},5000);
	setTimeout(function (){
	$("#Dhe").css("opacity","1");
},2000);
	setTimeout(function (){
	$("#Dyun1").css("opacity","1");
},5500);
	setTimeout(function (){
	$("#Dxue1,#Dxue2,#Dxue3,#Dxue4").removeClass("displayN");
},5500);
	setTimeout(function (){
	$("#Dyun2").css("opacity","1");
},6000);
	setTimeout(function (){
	$("#Dyun2").removeClass("Dyun2chu");
	$("#Dyun2").addClass("Dyun2dong");
},6500);
	setTimeout(function (){
	$("#DarrL").removeClass("displayN");
	$("#DarrL").css("opacity","1");
},4000);
});
$("#QarrR2").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-270deg)");
  $(".yuan").css("-webkit-transform","rotate(-270deg)");
  $("body").css("background","#97cbf9");
  $("#Xbackground").css("-webkit-transform","rotate(-180deg)");
  $("#Qbackground").css("-webkit-transform","rotate(-90deg)");
    $("#Dbackground").css("-webkit-transform","rotate(0deg)");
});

$("#DarrL").click(function(){
  $(".FirstPart").css("-webkit-transform","rotate(-180deg)");
  $(".yuan").css("-webkit-transform","rotate(-180deg)");
  $("#Xbackground").css("-webkit-transform","rotate(-90deg)");
  $("#Qbackground").css("-webkit-transform","rotate(0deg)");
    $("#Dbackground").css("-webkit-transform","rotate(90deg)");
  $("body").css("background","#d2e5af");
});
});
}