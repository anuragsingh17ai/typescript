interface User {
    readonly dbid: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail():string,
    getCoupon(coupnname: string): number

}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta"
}

const hitesh: Admin = {dbid: 1, email: "anu@.com", userId: 2211,
startTrail: ()=>{
    return "hi "
},
getCoupon: (name: "anurag",)=>{
    return 10
},
role: "admin",
githubToken: "12kj"
}