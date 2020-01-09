

window.onload = scriptmain;
var mainchoices = ["Color", "Size", "Shape"];
var choiceopts = {
  color: ["Red","Green","Blue"," Purple","Pink","Orange","Yellow","Teal","Turquoise"],
  size : ["XSmall", "Small", "Medium", "Large", "XLarge", "XXLarge"],
};
 choiceopts.shape = ["Circle", "Square", "Smiley", "Heart", "Star", "Triangle"];

var userselections = {};
var currentcategory;

/***********************************************
*                                              *
*                SCRIPT MAIN                   *
*                                              *
*                                              *
***********************************************/
function scriptmain() {

initPage();
}// end scriptmain



/***********************************************
*                                              *
*                  INIT PAGE                   *
*                                              *
*                                              *
***********************************************/
function initPage() {
 //mainchoices
 // create div for choices
var x = 0;
var tmp = document.createElement("div");
var tmp2;
document.body.appendChild(tmp);

// add choices
while(x < mainchoices.length ){

  tmp2 = document.createElement("input");
  tmp2.type = "radio";
  tmp2.name = "chcebttns";
  tmp2.value = mainchoices[x].toLowerCase();
  tmp2.onclick = dsplyDropDown;
  tmp.appendChild(tmp2);
  
    tmp2 = document.createElement("span");
    tmp2.textContent = mainchoices[x];
    tmp.appendChild(tmp2);
    
  br= document.createElement("br");
  tmp.appendChild(br);
  x = x + 1;
}// end while loop
   
  
  tmp.style.position = "absolute";
  tmp.style.top = "40%";
  tmp.style.left = "50%";
  tmp.style.border ="7px purple inset";
  tmp.style.padding = "20px";
  
  
}// end initPage


/***********************************************
*                                              *
*             Display Drop Down                *
*                                              *
*                                              *
***********************************************/
function dsplyDropDown(event){  //
var tmp;
var choicetxt = event.target.nextSibling;
 choicetxt = choicetxt.textContent;
 currentcategory = choicetxt;
  

var i = 0;
var slct = document.body.querySelector("select");

if(!slct){
  
 slct = document.createElement("select");
 slct.onchange = processUserSelections;
document.body.appendChild(slct);
  
}// if statment about select (slct)


tmp =slct.firstElementChild;

while(tmp){
  tmp.parentNode.removeChild(tmp);
  tmp =slct.firstElementChild;
  
}// while loop for removing the extra selects stuff

 var opt = document.createElement("option");
opt.text = "Choose a " + choicetxt;
slct.appendChild(opt);


while (i < choiceopts[event.target.value].length){
opt = document.createElement("option");
opt.text = choiceopts[event.target.value][i];
opt.value = choiceopts[event.target.value][i];
if(opt.value == userselections[currentcategory]){
  opt.defaultSelected = true;
  
}// end if statement
slct.appendChild(opt);
 i++;
}// end colors while loop
 
 
 
 
 
}// end dsplyDropDown

/***********************************************
*                                              *
*          Process User Selections             *
*                                              *
*                                              *
***********************************************/

function processUserSelections(event) {
//userselections
var userchoices = {};
var slct = event.target;
var optval = slct.options[slct.selectedIndex].text;
 userselections[currentcategory] =  optval;
userchoices[currentcategory] = optval;
 dspyUserSelections(userchoices);
  
}// end processUserSelections

/***********************************************
*                                              *
*          Display User Selections             *
*                                              *
*                                              *
***********************************************/
function dspyUserSelections(s){
  // s contains the category and category choices
 // look for order box create if it does not exist
var dsplychoices = document.getElementById("dsplyorder");
var tmp2 = document.getElementById(currentcategory);
var tmp;

  if(!dsplychoices){
    dsplychoices = document.createElement("div");
  dsplychoices.style.position = "absolute";
  dsplychoices.style.top = "60%";
  dsplychoices.style.left = "40%";
  dsplychoices.style.height = "20%";
  dsplychoices.style.width = "30%";
  dsplychoices.style.border = "21px rgb(10%, 5%, 100%) inset";
  dsplychoices.id = "dsplyorder";
document.body.appendChild(dsplychoices);

  }// end if branch of if else statement
  
 if(!tmp2){
 tmp = document.createElement("p");
 tmp.id = currentcategory;
 tmp.textContent = currentcategory + ":" + s[currentcategory];
 dsplychoices.appendChild(tmp);
  
 }// end second if else statement
  
  else{
    tmp2.textContent = currentcategory + ":" + s[currentcategory];
  }// end else statement of if else
  
 //userselections holds the current values of the drop down    currentcategory
 
 /**********************************************
*                                              *
*                   Done Button                *
*                                              *
*                                              *
***********************************************/
 // begin check to add done button
 tmp = document.getElementById("donebutton");
  
  if (!tmp && dsplychoices.querySelectorAll("p").length == mainchoices.length )
  {
  tmp = document.createElement("button");
  tmp.textContent = "Done";
  tmp.style.position="absolute";
  tmp.style.bottom = "5%";
  tmp.style.left = "55%";
  tmp.style.display = "block";
  tmp.style.border = "4px rgb(20% 95% 15%) outset";
  tmp.id="donebutton";
  tmp.onclick=postData;
  tmp.style.fontSize="1.5em";
  document.body.appendChild(tmp);
  }//end inner if
 
 
 
 
  
}// end dspyUserSelections
/*******************************************************
*                                                      *
*                     POST ORDER                       *
*  Event handler for "Done" button. Sends data to      *
*  server for posting to database                      *
*                                                      *
********************************************************/
function postData()
{
  alert("POST ORDER TO DATABASE");
  var i = 0
  var orderinfo = {};
  for (keyname in userselections)
  {
  orderinfo[keyname.toLowerCase()] = userselections[keyname];
  }
  
  serverRequest(JSON.stringify(orderinfo));
  alert("ORDER DATA POSTED TO TABLES\n"+JSON.stringify(orderinfo));
    
}//end postData

/*******************************************************
*                                                      *
*                  SERVER REQUEST                      *
*  Utility function to send an XMLHTTPRequest to       *
*  server for posting to database                      *
*                                                      *
********************************************************/
function serverRequest(data)
{
srvrequest = new XMLHttpRequest();
srvrequest.open("POST","dynamicpage.php");
srvrequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
srvrequest.onreadystatechange = serverResponse;
srvrequest.send("databundle="+data);
  
}//serverRequest




/*******************************************************
*                                                      *
*                  SERVER RESPONSE                     *
*  Utility function to process an XMLHTTPRequest to    *
*                     response                         *
*                                                      *
********************************************************/
function serverResponse()
{

if (srvrequest.readyState == 4)
  if(srvrequest.status == 200)
  {
  alert("SUCCESS REQUEST FROM SERVER : " + srvrequest.statusText+"\n" +
  srvrequest.responseText);
  processpostorder(JSON.parse(srvrequest.responseText));
  }
  else
  alert("FAILED REQUEST FROM SERVER : " + srvrequest.statusText);

}//end serverResponse

/*******************************************************
*                                                      *
*                 Process Post Order                   *
*  Utility function to process an XMLHTTPRequest to    *
*                     response                         *
*                                                      *
********************************************************/
function processpostorder(data){
var msg1 = data.serverstatus;
var msg2 = data["confirmnbr"];
var thankyoubx = document.getElementById("dsplythankyou");
var mssgbx = document.getElementById("confirmorder");

 thankyoubx = document.createElement("div");
  thankyoubx.style.position = "absolute";
  thankyoubx.style.top = "20%";
  thankyoubx.style.left = "10%";
  thankyoubx.style.height = "70%";
  thankyoubx.style.width = "75%";
  thankyoubx.style.background = "grey";
  thankyoubx.style.opacity = "0.75";
  thankyoubx.id = "dsplythankyou";
document.body.appendChild(thankyoubx);

mssgbx = document.createElement("div");
mssgbx.style.position = "absolute";
mssgbx.style.top = "25%";
mssgbx.style.left = "12%";
mssgbx.style.height = "25%";
mssgbx.style.width = "25%";
mssgbx.style.background = "white";
mssgbx.style.border = "4px rgb(20% 95% 15%) outset";
mssgbx.id = "confirmorder";
document.body.appendChild(mssgbx);


var temp =document.createElement("p");
temp.textContent ="serverstatus is " + msg1 +"\n confirmation number is " + msg2;
mssgbx.appendChild(temp);
  

//tmp = document.createElement("p");
 //tmp.id = currentcategory;
 //tmp.textContent = currentcategory + ":" + s[currentcategory];
 //dsplychoices.appendChild(tmp);
  
}// end processpostorder




