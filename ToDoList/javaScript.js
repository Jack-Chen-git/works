// Add "Close" button to every Item
var newli = document.getElementsByTagName('li');
var i;
for(i = 0; i < newli.length; i++){
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newli[i].appendChild(span);
}

// Click on a 'close' button to delete a item
var close = document.getElementsByClassName('close');
var j;
for(j = 0; j < close.length; j++){
  close[j].onclick = function(){
    var div = this.parentElement;
    div.style.display = 'none';
  }
}

// Add a "Checked" symbol to each item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false);

// Click "Add" button to add a new item
function newItem(){
  var li = document.createElement("li");
  var tempTxt = document.getElementById("input").value;
  var temp = document.createTextNode(tempTxt);
  li.appendChild(temp);
  if(tempTxt === ""){
    alert("未輸入代辦事項!");
  }else{
    document.getElementById("List").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for(j = 0; j < close.length; j++){
    close[j].onclick = function(){
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}
