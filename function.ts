// 1. write a function to check the length of user input as their name

function checkLength(parameter:string) : number{
  return (parameter.length)
}

console.log(checkLength('Ismat'))

// 2. write a function to compare the number user insert to the number 3 then display the suitable message
function checkNumber (digit:number) : string{
  if(digit>3){
    return (`${digit} is greater that 3`)
  }else {
    return (`${digit} is smaller that 3`)
  }
}

console.log(checkNumber(2))

// 3. write a function that take an array as a parameter then check if user has age greater than 3
type UserType = {
  name : string,
  age : number
}
const users: UserType[] = [
  { name: "andrea", age: 4 },
  { name: "hanna", age: 9 },
];
function checkAge(arr:UserType[]):string{
  const result = arr.find((user) => user.age > 3)
  if(result){
    return "Age is greater than 3"
  }
  else{
    return "Age is less than 3"
  }
}
console.log(checkAge(users))


// 4. write a function takes 2 parameters : an array and userInput to check if the userInput is matched with the user name
type UserInfo={
  name:string,
      age:number
}
const user = [
  {name:'Andrea',age:4},
];



function searchName(array:UserInfo[],input:string):string {
  const result = array.find((user)=>user.name===input);
  if(result){
    return (`${input} is in the users array`)
  } else {
    return (`${input} is not in the users array`)
  }
}

console.log(searchName(user, 'Andrea'))
console.log(searchName(user, 'Alex'))
// At least 2 ways

// searchName(users, "alex"); => alex is not in the users array
// searchName(users, "andrea"); => andrea is in the users array
