window.onload = function(){
	var items = document.getElementsByName("item");
	
	//选择所有的name属性等于'keleyicom'的input元素 
	var $items = $("input[name='item']");
	
	$checkAll = $("#checkAll");
	//全选
	$checkAll.click(function(){
		for (var i=0 ; i<items.length ; i++) {
			items[i].checked = $checkAll.is(':checked');
		}
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
	
	for (var i=0 ; i<items.length ; i++) {
		(function(index){
			items[index].onclick = priceUpdate();
		})(i)
	}
	
	function priceUpdate(){
		var price = this.parentNode.querySelector(".price").innerHTML;
		if (this.checked) {
			figureSum += Number(price);
		} else{
			figureSum -= Number(price);
		}
		$figureSumBox.text(figureSum.toFixed(2));//保留两位小数
	}


//	console.log($items.siblings(".price").text());
	//$event.siblings("#price").text()
	
}
