// const heading=document.getElementById("heading");
// console.log(heading);

 
// const list=document.getElementById("list");

// list.textContent="hi there "

// list.innerHTML= "<h1>aminoooo</h1>";
// console.log(list.innerHTML);

// const list=document.querySelector("#list");
// console.log(list);

// const heading =document.getElementById('heading');
// heading.style.color="red";
//  heading.style.backgroundColor="blue";

//  const list=document.querySelectorAll('li');
//  console.log(list);


 
// for(let i=0;i<list.length;i++){
//     list[i].style.backgroundColor="orange"
// }

// list[0].style.cssText="background-color:green;color:white;font-size:25px";



const heading=document.querySelector("#heading");
const btn =document.querySelector(".btn");
// btn.onclick=()=>{
//     console.log("Cliaaacked")
// }

// heading.onmouseover=()=>{
//     heading.style.cssText="background-color:brown;color:white";
// };

// heading.onmouseout=()=>{
//     heading.style.cssText= "background-color:transparent;color:black";
// };



// btn.addEventListener('click',()=>{
//     heading.style.cssText='background-color:grey;color:white'
// })



//attributes

// const paragraph=document.querySelector('.paragraph');
// console.log(paragraph.getAttribute("id"));
// console.log(paragraph.getAttribute("class"));
// console.log(paragraph.getAttribute("title"));

// paragraph.setAttribute("style","background-color:coral");

// paragraph.removeAttribute("style");

// console.log(paragraph.hasAttribute('style'))




//navigation

// const listItem=document.getElementById("list-item");
// console.log(listItem.parentNode);

 






// function addclick(){
//     var taskInput=document.getElementById(`task`);
//     var priorityInput=document.getElementById(`priority`);
//     var dueDateInput=document.getElementById(`dueDate`);
//     var taskText=taskInput.value.trim();
//     var priority=priorityInput.value;
//     var dueDate=dueDateInput.value;

//     if(taskText !== ``){
//         var  taskList = document.getElementById(`taskList`);
//         var newTask = document.createElement(`li`);

//         newTask.innerHTML=`
//         ${taskText} (Priority: ${priority}, Due: ${dueDate})
//          <button onclick="removeTask(this)"> Delete </button>
//         `;

//         taskList.appendChild(newTask); 

//           taskInput.value= ``;      
//           priorityInput.value= `start`;
//           dueDateInput.value= ``;

//     }
// }

// function removeTask(button){
//     var taskItem=button.parentElement;
//     taskItem.remove();
// }