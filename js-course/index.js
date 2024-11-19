// let i=0;
// function increment(){

//   let elementss=document.getElementById("valeur")

// i=i+1;

// elementss.innerHTML=i
// }

// function dincrement(){

//   let elementss=document.getElementById("valeur")
  
//   if (i>0)
//   i=i-1;



// elementss.innerHTML=i
// }

// function personn(){
//    let  PValue=document.getElementById("person");
//    let  stocValue= parseInt(PValue.value, 10);


//   i += stocValue;
//   document.getElementById("valeur").innerHTML = i;


// // PValue.innerHTML=count

// }

// function addF(){
//   let inputTxt=document.getElementById("inputText").value

//   let stoc=document.getElementById("stock")

//   if(inputTxt){
//     let myList=document.createElement("li")

//     myList.innerHTML=inputTxt;

//     stoc.appendChild(myList)
// document.getElementById("inputText").value=""
//   }
// }

// function deleteR(){
//   let myNew=document.getElementById("stock");

//    myNew.removeChild(myNew.lastElementChild)


// }

// const wrapper=document.querySelector("#lastPosts")
// const loader=document.createElement("p")

// loader.innerText="chargement..."

// wrapper.append(loader)


class User{
    static userCount=0;

    constructor(username){

         this.username=username;
         User.userCount++
         
    }
}

const user1=new User("spongebob")
const user2=new User("Patrick")
const user3=new User("sima")

console.log(user1.username)
console.log(user2.username)
console.log(User.userCount)