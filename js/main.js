$(document).ready(function(){
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
	
	//add
	$(".add-btn").click(function(){
		window.location.href = "addPage.html";
	});
	
	//统计count
	
	//结算figure
	$(".figure").click(function(){
		window.location.href = "figurePage.html";
	});
	
	
	
})
