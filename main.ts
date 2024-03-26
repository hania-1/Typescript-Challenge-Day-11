//DAY 12 Of CODING CHALLENGE
// Q no1; Pizzas: Share your favorite pizzas and express your love for them.

let pizzas: string[]=["Fajita", "TIKKA", "Afghani"]
pizzas.forEach(pizza =>{
    console.log(`i love ${pizza} pizza`)
})
console.log("i like all the flavs of pizza")

//Q no 2:Animals: Highlight animals with a common trait.

let petAnimals: string[]=["Cat", "Husky", "Rabit"]
petAnimals.forEach(pet =>{
    console.log(`i love ${pet} `)
})
console.log("All of these can be good pets!")

//Q No 3:T-Shirt: Create a function for customizing t-shirts.

function customizeTshirt(size: string, color: string, design: string, message: string): void {
    console.log(`Make a ${size} t-shirt with a message "${message}" on it!`);
}
customizeTshirt("M", "Hazel", "stripes", "IT APPEARS I AM SOME ABOMINATION");