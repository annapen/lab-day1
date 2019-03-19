let yourpetsName = prompt('what is your pets name?')
let favoritepetFood = prompt ('what is your pets favorite food?')
let favoritepetActivity = prompt ('what is your pets favorite activity?')

//confirm(`${yourpetsName} ${favoritepetFood} is on sale for 5% off!`)//

let para = document.getElementById('para')
console.log(para)
para.innerText=`${yourpetsName} would appreciate some ${favoritepetFood} to keep ${favoritepetActivity}ing`
//confirm(${yourpetsName} would appreciate some good food ${favoriteFood}to keep up with her ${favoritepetActicity})
//console.log (${yourpetsName} would appreciate some good food ${favoriteFood}to keep up with her ${favoritepetActicity})

