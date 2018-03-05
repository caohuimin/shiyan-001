function cDET(){
	var parent=$("#display-fruitful");
	parent.empty();
	var imgsrcArry=["./img/bg.jpg","./img/bgcontent1.jpg","./img/bgcontent2.jpg","./img/bgcontent3.jpg","./img/bgcontent.jpg","./img/carouser1.jpg","./img/carouser2.jpg","./img/carouser3.jpg","./img/carouser0.jpg"]
	var lenth=imgsrcArry.length;
	for (var i = 0; i <=20; i++) {
		var index=parseInt(Math.random()*lenth);
	    var str='<div class="row"><div class="col-lg-4"><a href="#1"><img src='+imgsrcArry[index]+' class="img-responsive img-thumbnail"></a></div><div class="col-lg-8"><h3><a href="#1">刘彬老师研究航天飞行器</a></h3><h5><div class="title">具体描述：</div><div class="decription">刘彬老师研究航天飞行器在攀枝花学院成功登上火星</div></h5><h5><div class="title">所属类别：</div><div class="decription">教师科研</div></h5></div></div>';
		parent.append(str);
	}
}
function cDE(){
	var parent=$("#display-fruitful");
	parent.empty();
	var imgsrcArry=["./img/bg.jpg","./img/bgcontent1.jpg","./img/bgcontent2.jpg","./img/bgcontent3.jpg","./img/bgcontent.jpg","./img/carouser1.jpg","./img/carouser2.jpg","./img/carouser3.jpg","./img/carouser0.jpg"]
	var lenth=imgsrcArry.length;
	for (var i = 0; i <=20; i++) {
		var index=parseInt(Math.random()*lenth);
	    var str='<div class="row"><div class="col-lg-4"><a href="#1"><img src='+imgsrcArry[index]+' class="img-responsive img-thumbnail"></a></div><div class="col-lg-8"><h3><a href="#1">刘彬老师研究航天飞行器</a></h3><h5><div class="title">具体描述：</div><div class="decription">刘彬老师研究航天飞行器在攀枝花学院成功登上火星</div></h5><h5><div class="title">所属类别：</div><div class="decription">教师科研</div></h5></div></div>';
		parent.append(str);
	}
}
function changeColor(){
	var colorArry=["#006699","#0099CC","#00CC66","#330000","#330033","#336666","#336699","#660033","#663300"];
	var length=colorArry.length;
	var boxArry=$(".img-show-content");
	$(".img-show-content").each(function(){
		var index=parseInt(Math.random()*length);
		$(this).css("backgroundColor",colorArry[index]);
	});
	$(".img-responsive").each(function(){
		var radom=parseInt(Math.random()*5);
		$(this).attr("src","./img/carouser"+radom+".jpg");
	});
}
(function(){
	$("#display-fruitful").ready=cDE();
	$("#display-fruitful-team").ready=cDET();
	$("#tab-content-show").ready=changeColor();
	var NodeObject=function(){
			NodeObject.prototype={
				//创建节点 
				createNode:function(){
					alert(1);
				},
				//为节点添加类名
				addClaName:function(){}
			}
		}
	function createNode(){
		alert(1);
	}
	var Tt = new NodeObject();
	//NodeObject.prototype.createNode();
})();