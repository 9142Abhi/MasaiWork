
document.querySelector("form").addEventListener("submit",myfunction);
let arr=[];
function myfunction(event){
    event.preventDefault()
    let name=document.querySelector("#task").value;
    let prio=document.querySelector("#priority").value;
    let obj={
        task:name,
        priority:prio
    };
    arr.push(obj);
    displayTable(arr);
}
function displayTable(arr){
   document.querySelector("tbody").innerHTML="";
   arr.forEach(function(elem){
    
        let row=document.createElement("tr")  ;
        
        let col1=document.createElement("td");
        col1.innerText=elem.task;
        let col2=document.createElement("td");
        col2.innerText=elem.priority;
        if(elem.priority=="High"){
            col2.style.backgroundColor="green";
        }
        else{
            col2.style.backgroundColor="blue";
        }
        let col3=document.createElement("td");
        col3.innerText="Delete";
        
        col3.addEventListener("click",function(){
            event.target.parentNode.remove();
        })
        col3.style.backgroundColor="red";
        row.append(col1,col2,col3);
        document.querySelector("tbody").append(row);
   })
   
    
    }



