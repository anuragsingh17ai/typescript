const User = {
    name: "Anurag",
    email: "anurag@gmail.com",
    isActive: true,
};

function createUser({name: string, isPaid: boolean}){}

createUser({name: "Anurag", isPaid: false})

function createCourse():{name: string, price: number}{
    return {name: "typescript", price: 399}
}

export {}