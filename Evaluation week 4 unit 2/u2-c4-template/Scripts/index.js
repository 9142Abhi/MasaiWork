// Write code related to Home page here 
document.querySelector("form").addEventListener("submit",submitFun);
let arr=[];
function submitFun(event){
    event.preventDefault();
    let inputName=document.getElementById("name").value;
    let inputDesc=document.getElementById("desc").value;
    let inputStartDate=document.getElementById("start").value;
    let inputEndDate=document.getElementById("end").value;
    let inputPrio=document.getElementById("priority").value;
    let obj={
        name:inputName,
        desc:inputDesc,
        startDate:inputStartDate,
        endDate:inputEndDate,
        prio:inputPrio
    }
    arr.push(obj);
    displayTable(arr);
}
function displayTable(arr){
    
    for(i=0;i<arr.length;i++){
        let elem=arr[i];
        
    let row=document.createElement("tr");
    let col1=document.createElement("td");
    col1.innerText=elem.name;
    let col2=document.createElement("td");
    col2.innerText=elem.desc;
    let col3=document.createElement("td");
    col3.innerText=elem.startDate;
    let col4=document.createElement("td");
    col4.innerText=elem.endDate;
    let col5=document.createElement("td");
    col5.innerText=elem.prio;
    let col6=document.createElement("td");
    col6.innerText="Add";
   
    row.append(col1,col2,col3,col4,col5,col6);
    console.log(row);
    document.querySelector("table").append(row);
    
    }
}
