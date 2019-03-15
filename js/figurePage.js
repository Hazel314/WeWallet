window.onload = function(){
	var items = document.getElementsByName("item");
	
	//选择所有的name属性等于'item'的input元素 
	var $itemsCheckBox = $("input[name='item']");
	
	$checkAll = $("#checkAll");
	//全选
	$checkAll.click(function(){
		for (var i=0 ; i<items.length ; i++) {
			items[i].checked = $checkAll.is(':checked');
		}
		
		//计算figureSum
		$itemsCheckBox.each(function(){
			priceUpdate($(this));
		});
		
	});
	
	
	for (var i=0 ; i<items.length ; i++) {
		items[i].onclick = function(){
			
			//检查，判断各个选框状态与全选框是否一致，有一个未选择则不是全选
			$checkAll.prop("checked",true);//使用$checkAll.attr("checked",true)不生效
			for (var j=0;j<items.length ; j++) {
				if(!items[j].checked){
					$checkAll.prop("checked",false);
				}
			}
		}
	}
	
	//dailySum
	var $dailyBox = $(".daily-wrap");

	var dailySumBox , prices;

	for (var i=0 ; i<$dailyBox.length ; i++) {
		var dailySum = 0;
		dailySumBox = $dailyBox[i].querySelector(".daily-sum");
	
		prices = $dailyBox[i].querySelectorAll(".price");
		
		for (var j=0 ; j<prices.length ; j++) {
			dailySum += Number(prices[j].innerHTML)
		}
		dailySumBox.innerHTML = dailySum;
	}

	//figureSum
	var $figureSumBox = $("#figure-sum");
	var figureSum = 0;
	
	//计算figureSum
	$itemsCheckBox.each(function(){
		$(this).click(function(){
			priceUpdate($(this));
		});
	});
	
	function priceUpdate($obj){
		var price = $obj.parent().find(".price").html();
		if ($obj.is(":checked")) {
			figureSum += Number(price);
		} else{
			figureSum -= Number(price);
		}
		//console.log($(this).is(":checked"));
		//figureSum = figureSum.toFixed(2);
		$figureSumBox.text(figureSum.toFixed(2));//保留两位小数
	}
	
	//统计选择情况，n为选择的个数
	function checkNums(){
		var n = $(".checkBox:checked").length;
//		var n = 0;
//		for (var j=0 ; j<items.length ; j++) {
//			if(items[j].checked){
//				n += 1;
//			}
//		}
		return n;
	}
	
	//home
	$("#home").click(function() {
		//console.log("home");
		window.history.back(-1);
	})
	
	//finish
	$("#finish").click(function() {
//		console.log(checkNums());
		if (!checkNums()){
			console.log("请至少选择一条账目！");//至少选择一项
		} else{
			//window.location.href = "index.html";
			console.log("结算金额:"+figureSum.toFixed(2) , "账单数目:"+checkNums());
		}
	});
	
}
