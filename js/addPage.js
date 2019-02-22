window.onload = function() {
	//cancle
	$("#cancle").click(function() {
		//		console.log("cancle");
		window.history.back(-1);
	})

	//finish
	$("#finish").click(function() {
		window.location.href = "index.html";
	})

	//price

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
	
	//member
	var memArr = ["img/mem1.jpg" , "img/mem2.jpg" , "img/mem3.jpg" , "img/mem4.jpg"]
	
	var $outMems = $(".select-mem>.mem");
	var $inMems = $("#member>.mem");
	
	for (var i=0 ; i<$outMems.length ; i++) {
		(function(index){
			$outMems[index].onclick = function(){
				console.log(index);
				$("#member").append("<li class='mem'><img src=" + memArr[index] + "/></li>")
				
			}
		})(i)
	}
	
	for (var i=0 ; i<$inMems.length ; i++) {
		$inMems[i].click(function(){
			
		})
	}
	
//	var $mems = $("#member");
//	$mems.append("<li class='mem'><img src='img/mem1.jpg'/></li>") ;
//	$memLi.append("<img src='img/mem1.jpg'/>");
}
