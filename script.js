const input=document.getElementById("input");
let table=document.getElementById("table")

function addList(){
    if(input.value===""){
        alert("You must enter task");
    }else{
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        td.innerHTML=input.value;
        tr.appendChild(td);
        let span=document.createElement("span"); 
        span.innerHTML='&#10006;';
        td.appendChild(span); 
        table.appendChild(tr);
    }
    input.value="";
    saveData();
}

table.addEventListener("click", function(e){
    if(e.target.tagName==="TD"){
        e.target.classList.toggle("checked");
        console.log("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// storing data in local storage
function saveData(){
    localStorage.setItem("data",table.innerHTML);
}

function showData(){
  table.innerHTML= localStorage.getItem("data");
}

showData();