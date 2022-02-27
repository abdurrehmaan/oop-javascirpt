
class Student{
    constructor(name, age , rollnumber ,semeter){
        this.stdName = name;
        this.stdAge = age;
        this.stdRollno = rollnumber;
        this.stdClass = semeter;
    }
    studentInfo(){
    return `My name is ${this.stdName} and my age is ${this.stdAge} and my rollnumber is ${this.stdRollno} and i m in ${this.stdClass}`
    }
}
class player extends Student{
    constructor(name, age , rollnumber ,semeter, game ){
        super(name, age , rollnumber ,semeter);
        this.stdgame = game;
    }
    stdBioData(){
        return `${super.studentInfo()} i m a player of ${this.stdgame}`
    }
}
class car extends player{
    constructor(){
       super() 
    }
}

let obj2 = new car();
console.log(obj2)

let obj1 = new player('Abdur Rehman',26,122331, '8th', 'Cricket');

console.log(obj1.stdBioData())


// let std = new Student("Abdur Rehman", 26, 112233, "8th" );
// console.log(std)
// std.studentInfo();


// const api = fetch(url);

// api.then(res => console.log(res)).catch(err => console.log(err))

// Promise.all([api1,api2, api3])
// .then(res => console.log(res)).catch(err => err)


// class calculation{
//     constructor(a,b){
//         this.firstNumber = a;
//         this.secNumber = b;
//     }

//     addition(){
//         console.log(this.firstNumber+this.secNumber)
//     }

//     sub(){
//         console.log(this.firstNumber-this.secNumber)
//     }
// }

// let obj1 = new calculation(50,30);
// obj1.addition()
// obj1.sub()
