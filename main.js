let pizzas=["Fajita", "TIKKA", "Afghani"]
pizzas.forEach(pizza =>{
    console.log(`i love ${pizza} pizza`)
})
console.log("i like all the flavs of pizza")


let petAnimals=["Cat", "Husky", "Rabit"]
petAnimals.forEach(pet =>{
    console.log(`i love ${pet} `)
})
console.log("All of these can be good pets!")


function customizeTshirt(size, color, design, message) {
    console.log("Make a ".concat(size, " t-shirt with a message \"").concat(message, "\" on it!"));
}
customizeTshirt("M", "Hazel", "stripes", "IT APPEARS I AM SOME ABOMINATION");
