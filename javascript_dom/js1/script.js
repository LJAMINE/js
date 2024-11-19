// const table=[2,3,3.3, 1,-5,-9] ;

// const squaer=(arr)=>{
//     const squareIntergre=arr.filter(num=>Number.isInteger(num)&& num>0).map(x=>x*x);
//     return squareIntergre;
// };

// const squareIntergre=squaer(table);
// console.log(squareIntergre);

// const createPerson=(age,name,gender)=>({age,name,gender})

// console.log(createPerson(12,"amine","male"))

// function makeClass(){
//     class Themostat{
//         constructor (temp){
//             this._temp = 5/9*(temp-32);
//         }
//         get temperature(){
//             return this._temp;
//         }

//         set temperature(updatedTemp){
//             this._temp=updatedTemp;
//         }
//     }
//     return Themostat;
// }

// const Themostat =makeClass();
// const thermos=new Themostat(76);
// let temp=thermos.temperature;
// thermos.temperature=26;
// temp=thermos.temperature;
// console.log(temp)


// playground.appendChild("😀 Wizzard");

// const magicLorb=document.createElement("dev");
// magicLorb.textContent="😀😀";
// playground.append(magicLorb);

// const playground = document.getElementById("playground");


// const scrollWisdol=document.createElement("p");
// playground.append(scrollWisdol);

// scrollWisdol.innerText="ancian wisdom amine"; 
// console.log(scrollWisdol.innerText);
// console.log(scrollWisdol.textContent);




// add and modify
// const playground=document.getElementById("playground");

// const spellbook=document.createElement("div");
// spellbook.innerHTML=`<p>spells include 
// <strong>levitation</strong>and <em>invisiblity</em>!</p>`

// playground.append(spellbook);



//remove

// const playground =document.getElementById("playground");

// const fruitBas=document.createElement("div");
// fruitBas.innerHTML=`
// <p>apple</p>
// <p>banana</p>
// <p>cherry</p>
// `;

// playground.append(fruitBas);

// while(fruitBas.firstChild){
//     fruitBas.removeChild(fruitBas.firstChild);
// }

  


// temporaryElement.textContent="now you see me ..."
// playground.append(temporaryElement);

// temporaryElement.remove();




//working with attribute

//   const playground =document.getElementById("playground");


//   const magicWand=document.createElement("div");
//   magicWand.setAttribute('id','wand1');
//   magicWand.setAttribute('class','magical-item wand');
//   magicWand.textContent="magic wandaaa";
//   playground.append(magicWand);

//   console.log(magicWand.getAttribute('id'));




  //working with  data attribute

    const playground =document.getElementById("playground");

    const secretScroll=document.createElement('div');

    secretScroll.id="secretScroll";
    secretScroll.dataset.spell="invisibility";
    secretScroll.dataset.components='moonlight,shadow essence';
    secretScroll.textContent="anciant spell scroll";

    playground.append(secretScroll);

    console.log("spell type",secretScroll.dataset.spell);
    
