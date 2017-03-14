 var text1 = document.getElementById('textbx1');
 var text2 = document.getElementById('textbx2');
  var ahead=document.getElementById('button1');
 var pause1=document.getElementById('button2');
var back=document.getElementById('button3');
  var interval_var;
  
  
  
  function shift_right()  {
    //alert('hi');
    window.clearInterval(interval_var);
    
	   interval_var=setInterval(function(){
	   var textbox1= text1.value;
		   if(textbox1!=''){
		    //alert(textbox1);
		    text2.value+=textbox1[0];
		      console.log(text2.value);
		       var textbox2=textbox1.slice(1);
		      // alert(textbox2);
		      text1.value=textbox2;
		       }
	  },1000);
	   
     
  }
  
function shift_left() {

	window.clearInterval(interval_var);
	 
	  interval_var=setInterval(function(){
	  var txt1 = text2.value;
	  //alert(txt1);
		  if(txt1!=''){
		  text1.value=txt1[txt1.length-1]+text1.value;
		  var txt2=txt1.slice(0,-1);
		  text2.value=txt2;
		}
	},1000);

	 
  
}

function pause() {
	
	
	window.clearInterval(interval_var);
	//window.clearInterval(interval_var2);
  
}
