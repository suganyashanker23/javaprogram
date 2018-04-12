<!DOCTYPE html>
<html>
<head>
<title>test</title>
</head>
<body>
<body>
<h3>Customer page</h3>
<div style="width:500px" hight="1000px">
<div id="list" style="width:300p">
<ul id="li">
</ul>
</div>
<div id="profile" style="width:300px">
<label>Name</label> <input id="name" type="text"><br><br>
<label>Email address</label><input id="email" type="text"><br><br>
<label>Phone number</label><input type="number" id="phno"><br><br><br>
<button type="submit" onclick="save()" id="submitbutton" style="display:block">submit</button>
<button id="update" onclick=updatelist() style="display:none">Update</button>
<button id="new" onclick=newlist() style="display:none">New</button>
</div>
</div>
<style>
label{
float:left;
}
input{
float:right;
width:"50px";
}
#profile{
float:right;
}
#list{
float:left;
}
.del{
float:right;
}
</style>
<script>
var lname;
function save(){
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var phno=document.getElementById("phno").value;
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("phno").value="";
localStorage.setItem(name, name);
localStorage.setItem((name+"email"),email);
localStorage.setItem((name+"phno"),phno);
var node=document.createElement("LI");
node.className="listitem";
var nodetext=document.createTextNode(name);
node.appendChild(nodetext);
  var delButton = document.createElement("button");
  var deltxt = document.createTextNode("x");
  delButton.setAttribute("class", "del");
  delButton.onclick=delist;
  delButton.appendChild(deltxt);
  node.appendChild(delButton);
  node.onclick=viewlist;
  document.getElementById("li").appendChild(node);
var br=document.createElement("BR");
document.getElementById("li").appendChild(br);
}
function delist(){
  var list = this.parentElement;
list.remove();
}
function viewlist(){
var viewname=this.textContent;
var newname=viewname.slice(0,viewname.length-1);
var email=localStorage.getItem(newname+"email");
var phno=localStorage.getItem(newname+"phno");
document.getElementById("name").value = newname;
document.getElementById("email").value=email;
document.getElementById("phno").value=phno;
document.getElementById("submitbutton").style.display="none";
document.getElementById("new").style.display="inline";
document.getElementById("update").style.display="inline";
lname=newname;
}
function newlist(){
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("phno").value="";
document.getElementById("submitbutton").style.display="block";
document.getElementById("new").style.display="none";
document.getElementById("update").style.display="none";
}
function updatelist(){
var namelist=document.getElementsByClassName("listitem");
for(var i=0;i<namelist.length;i++){
var str=namelist[i].innerHTML;
var strlen=str.slice(0,(str.length-30));
if(strlen==lname){
namelist[i].remove();
}
}
save();
}
</script>
</body>
</html>


