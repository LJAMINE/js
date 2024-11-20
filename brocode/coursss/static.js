// class MathUtil {
//     static PI=3.14;

//     static getdiametre(raduis){
// return raduis*2
//     }
// }

// console.log(MathUtil.PI)
// console.log(MathUtil.getdiametre(2))


class User{
    static userCount=0

    constructor(username){
        this.username=username
        User.userCount++
    }

    sayHello(){
        console.log(`hello this is my name : ${this.username}`)
    }
}

const user1=new User("sponge")
const user2=new User("mamm")

console.log(user1.username)
console.log(User.userCount)
user1.sayHello()
