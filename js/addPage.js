window.onload = function() {
	//price
	$("#price").keyup(function(){
		this.value = this.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
	    this.value = this.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的  
	    this.value = this.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
	    this.value = this.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数  
	    if(this.value.indexOf(".")< 0 && this.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
	        this.value= parseFloat(this.value); 
	    } 
	});
	
	//project
	var pros = $(".pro");
	for(var i = 0; i < pros.length; i++) {
		(function(index) {
			pros[index].onclick = function() {
				document.getElementById("project").value = pros[index].innerHTML;
//				$("#project").val() = pros[index].innerHTML;
			}
		})(i)
	}
	
	//date
  	//执行一个laydate实例
	laydate.render({
		elem: '#date' //指定元素
		 ,value: new Date()  //获取系统当前时间
	});
	
	
	
	//member
	var memPicArr = ["img/mem1.jpg" , "img/mem2.jpg" , "img/mem3.jpg" , "img/mem4.jpg"];
	var memArr = ["y" , "h" , "m" , "c"];
	var memSelected = [];
	
	var $outMems = $(".select-mem>.mem");
	var $inMems = $("#member>.mem");
	
	for (var i=0 ; i<$outMems.length ; i++) {
		(function(index){
			$outMems[index].onclick = function(){
				if (hasMem("member" , memArr[index])) {
					//$("#" + memArr[index]).remove();
					removeMem("member" , memArr[index])
				} else{
					$("#member").append("<li class='mem' id="+ memArr[index] +" ><img src=" + memPicArr[index] + "/></li>")
//					memSelected.push(memArr[index]);
				}
			}
		})(i)
	}
	
//	for (var i=0 ; i<$inMems.length ; i++) {
//
//		$inMems[i].onclick = function(){
//			console.log(ok);
//		}
//	}
	
	//hasMem
	function hasMem(obj , id){
		var result = $("#"+obj).find("#"+id).length;
		return result;
//		var result = obj.getElementById(id)
//		if (document.getElementById(id)) {
//			return 1;
//		} else{
//			return 0;
//		}
//		console.log(result);
	}
	
	//addMem
	function addMem(obj , id){
//		$("#" + obj).append("<li class='mem' id="+ id +" ><img src=" + memPicArr[index] + "/></li>");
	}
	
	//removeMem
	function removeMem(obj , id){
		$("#" + id).remove();
	}
	
	//cancle
	$("#cancle").click(function() {
		//		console.log("cancle");
		window.history.back(-1);
	})

	//finish
	$("#finish").click(function() {
		var proText = $("#project").val();//$.trim(string)输入框内容去掉首尾空格后
		
		var priceText = $("#price").val();
		
		$("#member>.mem").each(function(){
   			memSelected.push($(this).attr("id")); 
		})
		if ($.trim(priceText).length == 0){
			alert("$.trim(priceText).length == 0");//金额不能为空
		} else if ($.trim(proText).length == 0) {
			alert("$.trim(proText).length == 0");//项目不能为空
		} else if (memSelected.length == 0){
			alert("memSelected.length == 0");//人员不能为空
		} else{
			window.location.href = "index.html";
		}		
	})
	
}
