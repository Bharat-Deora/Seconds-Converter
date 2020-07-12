var parent = document.getElementById("parent");
var child = document.getElementById("answer");
		
function getValue(){
	var  sec = document.getElementById("sec").value;
	if (swidth <= 500) {
	  if(banner){ }
	  else{
     	addElement('whole' , 'a', 'banner');
     }
    }
	convert_Seconds(sec);
}

function convert_Seconds(s){

	var sec = s, min = 60, hour= 3600, day = 24*3600, year = 31536000, hyear = year *100;
	var remSecond = 0, remMin = s, remHour = 0, remDay=0, remYear=0 ;
	var countSecond, countMin, countHour, countDay, countYear;
	var answer = "", comma = ", ", flag =0;
 

    if(sec == ""){
    	answer = "Please enter Seconds to Convert it";
    }

    else if(sec<0){
		answer = "Time cannot be Reversed!";     
    }

    else if(sec<min && sec>=0){
    	sec = parseInt(sec);
    	if(sec == 1){  answer += sec + " second";   }
        else if(sec ==0){  answer+="Now";  }
        else{  answer += sec + " seconds";  }
    }
    

    else if(sec<hyear){
        remYear = parseInt(sec);
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


var swidth = screen.width;
var banner = document.getElementById("banner");
console.log(banner, (banner));
function hide(){
  if (swidth <= 500) {
  	if(banner){
       banner.remove();
  	}
   } 
}
function addElement(parentId, elementTag, elementId) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute("href", "https://bharat-deora.github.io/Seconds-Converter/" )
    newElement.innerHTML = "";
    p.appendChild(newElement);
}
