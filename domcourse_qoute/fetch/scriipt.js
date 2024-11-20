// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data=>console.log(data.id))
//     .catch(error => error(error))
fetchData()

async function fetchData() {
    
    try {


         const poekemonName=document.getElementById("poekemonName").value.toLowerCase()
        const response=await fetch (`https://pokeapi.co/api/v2/pokemon/${poekemonName}`)

        if(!response.ok){
            throw new Error("can not fetch")
        }
        const data =await response.json()
        // console.log(data)
        const poekesprite=data.sprites.front_default
        const imageElement=document.getElementById("pokemoneSprite")

        imageElement.src=poekesprite
        imageElement.style.display="block"

        //bulbasaur

    } catch (error) {
        console.log(error)
        
    }
}