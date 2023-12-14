type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number
}

let myUser: User = { 
    _id: "12345",
    name: "A",
    email: "A@",
    isActive: false
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

myUser.email = "anurag@gmail.com"
// myUser._id = "asa"     // due to readonly u can't change it

export {}