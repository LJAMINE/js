let container = document.getElementById('container');

container.addEventListener('click', (e) => {
    console.log("e.target:", e.target);         
    console.log("e.currentTarget:", e.currentTarget); 
});
