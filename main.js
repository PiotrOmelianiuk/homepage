alert('siema');
const name='Piotrek';
const age= 25 ;

console.log(`Siemanko. Miło, że tu zajrzałeś. Nazywam się ${name} i mam ${age} lat.`);
console.log(name);
console.log(age);

const heading = document.querySelector('.header1--js');
heading.innerHTML=`Siemanko. Miło, że tu zajrzałeś. Nazywam się ${name} i mam ${age} lat.`;