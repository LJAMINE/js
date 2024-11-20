



function walkDog() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked=false;

            if(dogwalked){
                resolve("walk the dog")

            }else{
                reject("you didn't")
            }
        }, 1500)
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("clean the kitchen")
        }, 2500)
    })

}

function takeTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("take the trash")
        }, 500)
    })

}

walkDog().then(value=>{console.log(value);return cleanKitchen ()})
          .then(value=>{console.log(value);return takeTrash ()})
          .then(value=>{console.log(value);console.log("finished")})
          .catch(error=>{console.error(error)})