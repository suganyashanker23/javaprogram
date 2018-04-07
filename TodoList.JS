<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>My Todolist</title>
</head>
<body>
<h5>Welcome To My ToDoList</h5>
<input id="item">
<button onclick="add()">Add</button>
<br>
<br>
<div id="todo" style="width:250px;   border: 5px solid red;">
<h5>Todo</h5>
<ol id=mylist>
<li class="list">
	<input type="checkbox" id="cbox"> 
	<label>sample Note</label>
	<button class="del" id="abc" onclick="deleteBtn()">Delete</button>
</li>
</ol>
</div>
<br>
<style>
.del{
   float:right;
  
}
.list{
background-color:#CAC2C1;
margin:5px;
}
</style>
<script>function add() {
var note=document.getElementById("item").value; //getting value
    document.getElementById("item").value="";   //empty the field
    var node = document.createElement("LI");    //creating the list node
    node.setAttribute("class","list");
    var cbox=document.createElement("input");    //creating the checkbox
    cbox.setAttribute("type","checkbox");          //setting the attribute for checkbox
    cbox.setAttribute("name","cb");
    cbox.setAttribute("id","cbox");
    node.appendChild(cbox);                            //adding checkbox into the list node
    var textnode = document.createTextNode(note);   //creating text node
     node.appendChild(textnode);                    //adding text node to the list node
     var del=document.createElement("button");      //creating button
     var delnote=document.createTextNode("Delete");     //creating textnode for the delete button
         del.setAttribute("class","del");
         del.onclick=deleteBtn;
     del.append(delnote);                               //adding text to the button
     node.append(del);                            //  adding delete button to the list   
    var list=document.getElementById("mylist");        //finding the list element in the html page
    list.appendChild(node);                      //adding the newly created list to the already                                                        existing list in html page.
}
 function deleteBtn(){
  var liEl = this.parentElement;
  if(!liEl){
  	liEl = document.getElementById("abc").parentElement;
   }
 liEl.remove();
 }

</script>
</body>
</html>
