function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string): string {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean): void {
    console.log('hi');
}

let loginUser = function(name: string, email: string, isLogin: boolean = false) {
    console.log('hi');
}

const getHello = (s: string):string=>{
    return ""
}

const heroes = ["thor", "spiderman", "ironman"]

heroes.map((hero): string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

//never is specially for error

function consolError(errmsg: string): never {
    throw new Error (errmsg)
}
