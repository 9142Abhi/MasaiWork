
  let arr;
if(localStorage.getItem("tasklocal")==null){
  arr=[];
}else{
  arr=JSON.parse(localStorage.getItem("tasklocal"))
}
displayTable(arr);
document.querySelector("form").addEventListener("submit",submitFunc);
function submitFunc(event){
  event.preventDefault();
  let name=document.querySelector("#task").value;
  let prio=document.querySelector("#priority").value;
  
  let obj={
    taskName:name,
    taskPrio:prio
  }
  arr.push(obj);
  localStorage.setItem("tasklocal",JSON.stringify(arr));
  displayTable(arr)
}
function displayTable(arr){
  document.querySelector("tbody").innerHTML="";
  arr.forEach(function(elem,index){
    
    let row=document.createElement("tr");

    let col1=document.createElement("td");
    col1.innerText=elem.taskName;
    let col2=document.createElement("td");
    col2.innerText=elem.taskPrio;
    if(elem.taskPrio=="High"){
      col2.style.backgroundColor="Red";
    }else{
      col2.style.backgroundColor="Green";
    }
    let col3=document.createElement("td");
    col3.innerText="Delete";
    col3.style.Color="red";
    col3.addEventListener("click",delFun);
    function delFun(){
      deleteRow(elem,index);
    }
    row.append(col1,col2,col3);
    document.querySelector("tbody").append(row);
  })
}
function deleteRow(elem,index){
  
  arr.splice(index,1);
  localStorage.setItem("tasklocal",JSON.stringify(arr));
  displayTable(arr);
}




