//var

let btn=document.querySelector('#new-quotes')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')



const quotes=[

    {
        quote: "Be yourself; everyone else is already taken.",
        person: "agatha."
    },{
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",        person: "marty."

    },{
        quote: "So many books, so little time"      ,  person: "boby."

    },{
        quote: "A room without books is like a body without a soul"   ,     person: "dani."

    },

]

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;

})



