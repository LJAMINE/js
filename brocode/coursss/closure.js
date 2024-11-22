//funct defined inside another function

function outer(){
    let message="hello" 

    function innerFunc(){
        console.log(message)
    }
    innerFunc()
}
outer()
