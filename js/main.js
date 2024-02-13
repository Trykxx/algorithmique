/*---------------------- Les commentaires --------------------------*/

// Un commentaire en Javascript

/*
    Un commentaire multiligne
    en Javascript
*/

/*---------------------- Affichage --------------------------*/

// Afficher des informations dans la console de debbugage du navigateur 
console.log('Hello world')

/*---------------------- Les variables --------------------------*/

// Declaration d'une variable
let uneVariable;

// Affectation d'une variable 
uneVariable = 'Je suis une variable!'

// Les 2 se font généralement en meme temps
// Les variables sont sensibles à la casse 
let helloworld = 'Hello, world';

uneVariable ='Je suis une nouvelle variable'

// Les différents types de variables
let messages ='un message'
let number = 20
let decimal = 20.5
let boolean = true
let boolean2 = false

// Les opérations arithmétiques (+, -, *, /)
// Declarer 3 variables sum, number1, number2
// Affecter le nombre 10 à number1
// Affecter le nombre 20 à number2
// Affecter à sum l'opération de multiplication de multiplication des 2 variables précédentes

let sum 
let number1 = 10
let number2 = 20
sum = number1 * number2
console.log(sum)





/*---------------------- La Concatenation --------------------------*/

let firstName ='Amit Nicolas' 
let lastName ='Roig Menda'

//Je m'appelle first name + lastname
console.log("Je m'appelle " + firstName + ' ' + lastName)

// Déclarer une variable city, afficher le message j'adore vivre a city 

let city ='Tremblay'
city =`Tremblay`
city ="Tremblay"

console.log("J'adore vivre à " + city)
console.log('J\'adore vivre à ' + city)

// Modifier le message pour afficher j'adore vivre à <city> et je m'appelle <firstname> <lastname>
 
console.log(`J'adore vivre à ${city} et je m'appelle ${firstName} ${lastName}`)





