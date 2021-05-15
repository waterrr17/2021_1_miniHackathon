var count = 0;
var time=[];
var countList=[];

function Set() {
	clearInterval(time);
 	count=60*Number(document.getElementById("settingMinutes").value)+Number(document.getElementById("settingSeconds").value);

 	var lists=document.getElementsByClassName("countdown");
	var peopleNum=Number(document.getElementById('people').value);
 	for (var i=0; i<peopleNum; i++){
 		if (count%60<10)
			lists[i].innerHTML= parseInt(count/60)+" : 0"+(count%60);
		else
			lists[i].innerHTML= parseInt(count/60)+" : "+(count%60);
		countList[i]=count;
	}
}

function Play(n){
	time[n] = setInterval(function(){Count(n);},1000);
}
function Stop(n){
	clearInterval(time[n]);
}

function Count(n) {
	countList[n]=countList[n]-1;
	inCount=countList[n];
	var lists=document.getElementsByClassName("countdown");
	if (inCount%60<10){
		lists[n].innerHTML= parseInt(inCount/60)+" : 0"+(inCount%60);
	}
	else{
		lists[n].innerHTML= parseInt(inCount/60)+" : "+(inCount%60);
	}
	if (inCount<60){
		lists[n].style.color="red";
	}
	if(inCount<= 0) { 
		clearInterval(time[n]);
		// 태양 넣기
	}
}
