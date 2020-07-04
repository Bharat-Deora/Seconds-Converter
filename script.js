function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
};

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
};


var el = document.getElementById('acti');

var fun = true;

function act(){
   
  if (!hasClass(el, 'loading')) {
         addClass(el, 'loading');
         setTimeout(function(){
                 addClass(el , 'done');
                     getValue();
                     setTimeout(function(){   
                        removeClass(el , 'loading done');
                       }, 1000);
                  }, 2000);                   
    }
  
};






var parent = document.getElementById("parent");
var child = document.getElementById("answer");
		
function getValue(){
	var  sec = document.getElementById("sec").value;
	convert_Seconds(sec);
}

function convert_Seconds(s){
	var sec = parseInt(s), min = 60, hour= 3600, day = 24*3600, year = 31536000, hyear = year *100;
	var remSecond = 0, remMin = s, remHour = 0, remDay=0, remYear=0 ;
	var countSecond, countMin, countHour, countDay, countYear;
	var answer = "", comma = ", ", flag =0;
           
     
    if(sec<min && sec>=0){
    	if(sec == 1){  answer += sec + " second";   }
        else if(sec ==0){  answer+="Now";  }
        else{  answer += sec + " seconds";  }
    }
    
    else if(sec<0){
	answer = "Time cannot be Reversed!";     
    }

    else if(sec<hyear){
        remYear = sec;
		countYear = parseInt(remYear/year);
        remDay = remYear%year;

          	if(countYear == 1){     answer += countYear + " year "; }
          	else if(countYear == 0){  flag++;   }
          	else{  answer += countYear + " years ";  }	

		    countDay = parseInt(remDay/day); 
            remHour = remDay%day;

          if(remDay<year){
          	if(flag == 1){comma = ""; }else{comma = ", ";}
          	if(countDay == 1){     answer += comma + countDay + " day "; }
          	else if(countDay == 0){  flag++;  }
          	else{  answer += comma + countDay + " days ";  }	

		    countHour = parseInt(remHour/hour); 
            remMin = remHour%hour;

            if(remHour<day){
            	if(flag == 2){comma = ""; } else{comma = ", ";}
          		if(countHour == 1){     answer += comma + countHour + " hour "; }
          		else if(countHour == 0){  flag++;   }
          		else{  answer += comma + countHour + " hours ";  }	
               
                countMin = parseInt(remMin/min);
           	 	remSecond = remMin%min;
                
                if(remMin<hour){
                	if(flag == 3){comma = ""; } else{comma = ", ";}
          			if(countMin == 1){   answer += comma + countMin + " minute ";  }
          			else if(countMin == 0){   flag++;   }
          			else{  answer += comma + countMin + " mintues ";    }                

          			if(remSecond<min){
          				countSecond = remSecond;
          				if(flag == 4){comma = "";} else{comma = ", ";}
          				if(countSecond == 1){  answer += comma + remSecond + " second";   }
          				else if(countSecond ==0){  }
          				else{  answer += comma + remSecond + " seconds";  }
          			}
            	}
        	}
		  }
	    }	

     else{
     	answer = "More than 100 years";
    }

    child.innerHTML = answer;
};

		 
 
