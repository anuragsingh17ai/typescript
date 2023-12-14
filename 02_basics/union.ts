let score: number | string = 33;

score = 44;
score = "44";
// score = true;  wrong

type User = {
    name : string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let anurag: User | Admin = {name: "Anurag", id: 334}

anurag = {username: "anu", id: 334};

function getDbId(id: number | string){
    console.log(`Db id is: ${id}`);
    if(typeof(id) === "string"){
        id.toLowerCase();
    }
}

getDbId(3)
getDbId("3");


const data: number[] = [1,2,3,4];

const data2: string[] = ["1", "2", "3"];

const data3: (string | number)[] = [1, 2, 3, "4"]

let pi: 3.14 = 3.14;

// pi = 3.15 // error

let seatAllotment : "aisle" | "middle" | "window" ;

seatAllotment = "aisle";
