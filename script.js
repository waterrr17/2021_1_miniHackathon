var count = 0;

var countList=[];
var stopwatch=0;

var time=[];
var confTime=0;


function Set() {
	clearInterval(confTime);
 	count=60*Number(document.getElementById("settingMinutes").value)+Number(document.getElementById("settingSeconds").value);
 	stopwatch=0;
 	var lists=document.getElementsByClassName("countdown");
	var peopleNum=Number(document.getElementById('people').value); 
	var showPeople=document.getElementsByClassName("person");

	for(var i=0; i<12;i++)
		showPeople[i].style.visibility="hidden";

 	for (var i=0; i<peopleNum; i++){
 		countList[i]=count;
		clearInterval(time[i]);
 		if (count%60<10)
			lists[i].innerHTML= parseInt(count/60)+" : 0"+(count%60);
		else
			lists[i].innerHTML= parseInt(count/60)+" : "+(count%60);
		showPeople[i].style.visibility="visible";
		lists[i].style.color="black";
	}
	document.getElementById("start").value="RESTART";
	confTime= setInterval("CountUp()",1000);
	document.getElementById("confTime").style.color="black";
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
	}
}

function CountUp() {
	stopwatch=stopwatch+1;
	var show=document.getElementById("confTime");
	if (stopwatch%60<10){
		show.innerHTML=parseInt(stopwatch/60)+" : 0"+(stopwatch%60);
	}
	else{
		show.innerHTML=parseInt(stopwatch/60)+" : "+(stopwatch%60);
	}
	if (stopwatch>=300)
		show.style.color="red";
}