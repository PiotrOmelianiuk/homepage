alert('siema');
const name='Piotrek';
const age= 25 ;
const myNumber= 5

console.log(`Siemanko. Miło, że tu zajrzałeś. Nazywam się ${name} i mam ${age} lat.`);
console.log(name);
console.log(age);

const heading = document.querySelector('.main__heading--js');
heading.innerHTML=`Siemanko. Miło, że tu zajrzałeś. Nazywam się ${name} i mam ${age} lat.`;

console.log(`moje imię to ${name}`);
console.log(`mam ${age} lat`);



constCalculate=(myNumber)=>{
   myNumber=myNumber*3;
    console.log(myNumber);
    return myNumber;
}
console.log(myNumber*3)