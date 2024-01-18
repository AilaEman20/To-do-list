const inputbox = document.getElementById("input-box");
 const listbox = document.getElementById("list-box");

function addtask(){
if(inputbox.value === '')
  alert("You Must Write Something!");
 else{
     let li = document.createElement("li");
     li.innerHTML = inputbox.value;
     listbox.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);
}

inputbox.value = "";
saveData();
}

listbox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listbox.innerHTML);
}

function showtask() {
    listbox.innerHTML = localStorage.getItem("data");
}
showtask();

window.addEventListener("data" , saveData);











