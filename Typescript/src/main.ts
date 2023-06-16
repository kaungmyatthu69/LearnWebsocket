// let myName:string ="Kaung" ;
// let age :number=22;
// let isLoading:boolean = false;
// let album: string | number;


// myName="Kaung";
// age=21;
// isLoading=true;
// album='this is ablum';
// const sum= (a:number,b:number)=>{
//     return a+b;
// }

// let postId:string | number;
// let isActive:number | boolean;
// let re:RegExp=/\w+/g;

let stringArray=['one','two','three','four','five']
let Array2= ['status','created',9988]
let mixedData=['EVH',1989,true]

stringArray[0]='Kaung'
stringArray.push("Myatthu")

let test =[]
let bands:string[] =[];
bands.push("Band1")
//tuple
let myTuple:[string,number,boolean]=['Dave',44,true]
let mixed=['josn',1,false]
mixed=[false,7 ,'kskfj']

//object
let myObj:object;
myObj=[]
console.log(typeof myObj)
myObj=bands;
myObj={ }
const exampleObj={
    props1:"Dave",
    props2:true
}
exampleObj.props1='kaung'
exampleObj.props2=false
myObj=['kaung','myat',33,32424,false]


interface Guritarist{
    name?:string, 
    age?:number,
    gender:string,
    family?:(string|number)[]
}
 let env :Guritarist={
    name:"Kaung",
    age:22,
    gender:"male"
 }
 let jp:Guritarist={
   
    age:33, 
    gender:"male"
 }



 const greetGuitarist=(guitarist:Guritarist)=>{
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return "HEllo "
 }
 console.log(greetGuitarist(jp))
