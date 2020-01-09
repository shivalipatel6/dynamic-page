/*************************************************************************************
 *                                  GLOBAL VARIABLES                                 *
 *                              NON_FUNCTION STATEMENTS                              *
 * **********************************************************************************/
 
 window.onload = scriptMain;
 var c; // canvas context;
 var newcx = -30;
 var key = false;
 
 /************************************************************************************
 *                                     SCRIPT MAIN                                   *
 *                   Execute when the document is completely loaded                  *
 * **********************************************************************************/
 
 function scriptMain()
 {
    alert("this works");
 //drawLines();
 moveDrawing();
 //astroid();
 
 }// end scriptMain
 
 
 /************************************************************************************
 *                                     Move Drawing                                  *
 *                USE SET INTERVAL METHOD TO SIMULATE DRAWING MOVEMENT               *
 * **********************************************************************************/
 
 function moveDrawing(){
  setInterval(drawLines,150);
  //setInterval(travelingCircle,100);
  
   
 }// end moveDrawing
 
 /************************************************************************************
 *                                     DRAW LINES                                    *
 *                            USE CONTEXT TO DRAW SOME LINES                         *
 * **********************************************************************************/
 
 function drawLines()
 {
 
 c = document.getElementById("canvas01").getContext("2d");
   c.clearRect(0,0,1000,1000);
 c.fillStyle = "rgba(60%,60%,60%,0.6)";
 c.beginPath();
 c.lineWidth = 2;
 c.strokeStyle = "rgb(0%,0%,0%)";
 c.font = '20px serif';
 c.strokeText('Shivali Patel',newcx, 90);
 //c.arc(50,100,45,0,300*Math.PI/100);
 //c.stroke();
 //c.fillText();
 
 //alert("cx= " + newcx);
 if( key === false){
   newcx = newcx + 2;
   if(newcx >= 198){
    key = true;
   }// end if statement
   
}// end if satement

if(key === true){
   newcx = newcx - 2;
  if(newcx <= 2){
    key = false;
  } // end if statement
    
}//end if statement
 
 
 
   
 }// end drawLines
 
 
 /************************************************************************************
 *                                  Moving Circle                                    *
 *                USE SET INTERVAL METHOD TO SIMULATE DRAWING MOVEMENT               *
 * **********************************************************************************/
 
   function movingCircle(){
  var xUpr = 400;
  var xLwr = 50;
  var yLwr = 50;
  var yUpr = 400;
  var radiusLwr = 5;
  var radiusUpr = 45;
  var colorupr = 100;
  var colorlwr = 0;
  
  var cx = Math.floor(Math.random()*(xUpr-xLwr + 1) + xLwr);
  var cy = Math.floor(Math.random()*(yUpr-yLwr + 1) + yLwr);
  var radius = Math.floor(Math.random()*(radiusUpr-radiusLwr + 1) + radiusLwr);
  var color1 = Math.floor(Math.random()*(colorupr-colorlwr + 1) + colorlwr);
  var color2 = Math.floor(Math.random()*(colorupr-colorlwr + 1) + colorlwr);
  var color3 = Math.floor(Math.random()*(colorupr-colorlwr + 1) + colorlwr);


  c = document.getElementById("canvas01").getContext("2d");
      
 c.fillStyle = "rgba(" + color1 + "%," + color2 + "%," + color3 +"%,0.6)";
 c.beginPath();
 c.lineWidth = 4;
 c.strokeStyle = "rgb(0%,0%,0%)";
 c.arc(cx,cy,radius,0,360*Math.PI/100);
 c.stroke();
 c.fill();

  

     
   }// end moving circle
   
 /************************************************************************************
 *                               traveling Circle                                    *
 *                USE SET INTERVAL METHOD TO SIMULATE DRAWING MOVEMENT               *
 * **********************************************************************************/
 //. use clear rect to cover the whole page in the beginning
  function travelingCircle(){
var linewdth =4;





  var cy = 75;
  var radius = 15;
  var colorupr = 100;
  var colorlwr = 0;
  var n = 0;
  var circleSpace = radius * 2 + 15;
  var xcoordinate = [0,0,0,0,0];
  var color1 = Math.floor(Math.random()*(colorupr-colorlwr + 1) + colorlwr);
  var color2 = Math.floor(Math.random()*(colorupr-colorlwr + 1) + colorlwr);
  var color3 = Math.floor(Math.random()*(colorupr-colorlwr + 1) + colorlwr);
  //"rgba(" + color1 + "%," + color2 + "%," + color3 +"%,0.6)";
   c = document.getElementById("canvas01").getContext("2d");
    c.clearRect(0,0,1000,1000);
    
  while(n < 5) {
      xcoordinate[n] = newcx -(n *circleSpace);
  

 
 c.fillStyle = "rgb(44%,56%,98%)";
 c.beginPath();
 c.lineWidth = linewdth;
 c.strokeStyle = "rgb(0%,0%,0%)";
 c.arc(xcoordinate[n],cy,radius,0,360*Math.PI/100);
 c.stroke();
 c.fill();
 n = n + 1;
  }// end while loop
  
if( key === false){
   newcx = newcx + 2;
  // alert("n = " + n + " xcoordinate[n] = " + xcoordinate[n]);
   if(xcoordinate[0] >= 288-linewdth){
    key = true;
   }// end if statement
   
}// end if satement

if(key === true){
   newcx = newcx - 2;
  if(xcoordinate[0] <= 10 + linewdth){
    key = false;
  } // end if statement
    
}//end if statement
 

  }// end function travelingCircle();


/************************************************************************************
 *                                 Moving name                                       *
 *                USE SET INTERVAL METHOD TO SIMULATE DRAWING MOVEMENT               *
 * **********************************************************************************/








    
// /************************************************************************************
// *                                     Astriod                                       *
// *                USE SET INTERVAL METHOD TO SIMULATE DRAWING MOVEMENT               *
// * **********************************************************************************/
// function astroid(){
//   var numberOfSides = Math.floor(Math.random()*(13-5 + 1) + 5);
//   var Upr = 300;
//   var Lwr = 0;
//   var startx = Math.floor(Math.random()*(Upr-Lwr + 1) + Lwr);
//   var starty = Math.floor(Math.random()*(Upr-Lwr + 1) + Lwr);
//   c = document.getElementById("canvas01").getContext("2d");
//   c.fillStyle = "rgb(0%,0%,0%)";
// c.beginPath();
// c.lineWidth = 2;
// c.strokeStyle = "rgb(0%,0%,0%)";
// c.moveTo(startx,starty);
// var n;
// var angleUpr = 125;
// var angleLwr = 65;
// var angle = n * (Math.floor(Math.random()*(angleUpr-angleLwr + 1) + angleLwr));
// var xcoordinate;
// var ycoordinate;
// var radiusOfPolygon = Math.floor(Math.random()*(20-4 + 1) + 4);
 
// for(n = 1; n < numberOfSides; n++){
// angle = n * (Math.floor(Math.random()*(angleUpr-angleLwr + 1) + angleLwr));
// xcoordinate = 10 + (radiusOfPolygon * Math.cos(angle));
// ycoordinate = 10 + (radiusOfPolygon * Math.sin(angle));
// c.lineTo(xcoordinate,ycoordinate);
// }// end for loop
// c.closePath();
//   c.stroke();
// c.fill(); // use only if for one than one line2

// }// end drawLines



 
   
// }// end function astriod
 
 
 
   