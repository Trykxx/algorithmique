/*---------------------- Les commentaires --------------------------*/

// Un commentaire en Javascript

/*
    Un commentaire multiligne
    en Javascript
*/

/*---------------------- Affichage --------------------------*/

// Afficher des informations dans la console de debbugage du navigateur 
console.log('Hello world')

// Afficher une boite de dialogue avec champs a remplir 
// let response = prompt('Quel est votre age ?')
// console.log(response)

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


/*---------------------- Instructions Conditionnelles --------------------------*/

// Demander a l'utilisateur si il accepte les cgv

//let agree= prompt ('Accepter vous les cgv ?')
//console.log(agree)

/*if(agree == 'ok'){
    console.log('Vous avez accepté')
} else { 
    console.log('Vous n\'avez pas accepté')
}

// Si, Si non Si, Sinon (if, else if, else)
// Si la condition est vraie le premier bloc d'instruction est éxécuté
// Sinon il test la deuxième condition
// Sinon aucune condition n'est vraie, il éxécute le bloc final


// si il repond yes
// vous etes redirigé vers le site en anglais
// Si il repond oui
// vous etes redirigé vers le site en français
// Si il repond da
// vous etes redirigé vers le site en russe
// Sinon
// vous ne pouvez accéder au site
if(agree == 'yes'){
    console.log("vous etes redirigé vers le site en anglais")
    
}else if(agree== "oui"){
    console.log("vous etes redirigé vers le site en français")
    
}else if(agree == "da"){
    console.log("vous etes redirigé vers le site en russe")
}else {
    console.log("vous ne pouvez accéder au site")
}



console.log('La suite...')

/*---------------------- Les opérateurs de comparaison --------------------------*/

// ==, >, >=, <, <=, !=, ===
// Déclarer une variable qui s'appelle variable, lui assigner la valeur 16
// Si la variable est égale à 16 afficher félicitations

let variable= 16;

if (variable = 16) {
    console.log("droit de conduire")
    
}

/* Ecrire un algorithme qui demande a l'utilisateur son age. Il 
indique ensuite a l'utilisateur quel film il peut aller voir
*/
//"Action man" si moins de 13 ans
//"Matrix" si il a entre 13 et 18 ans 
//"Evil dead" si il a plus de 18 ans 

//let age= prompt ('Quel age avez-vous ?')

/*if (age < 13) {
    console.log("Action man")
}else if (age >= 13 && age <= 18) {
    console.log("Matrix")
}else if (age > 18) {
    console.log("Evil dead")
}

// Demander a l'utilisateur son age 
// Demander sa nationalité

// Si il est français et qu'il a plus de 18 ans alors OU s'il est étranger et qu'il a moins de 18ans
// Assistance juridique gratuite 
*/

//     let age= prompt ('Quel age avez-vous ?')
//     let nat= prompt ("Quelle est votre nationalité ?")


//    if (
    //     (nat == "français" && age >= 18) || 
    //     (nat != "français" && age < 18 )
    //     ) {
        //        console.log("Assistance juridique gratuite")
        //    }
        
        // Demande sa nationalite
        // Si il est français
        //demandez a l'utilisateur son age 
        //si il a plus de 18 ans 
        //droit aux APL
        
        //sinon
        //vous n'avez aucun droit 
        
        // let nat = prompt ("Quelle est votre nationalite ?");
        
        
    //     if (nat =="français") {
    //         let age= prompt("Quel est votre age ?")
    //         if (age >= 18){
    //             console.log("Vous avez droit aux APL")
                
    //         }else{
    //             console.log("Vous n'avez aucun droit")
    //         }
            
    //     }else {
    //     console.log("Vous avez aucun droit")
    // }
    
    /*---------------------- Les opérateurs de comparaison --------------------------*/
    
    // Les boucles sont des structures permettant d'éxécuter plusieurs fois des instructions

    // Boucle a itération non définie (while)
    let i = 0;
    while( i < 9 ) {
        i = i + 1;
        console.log(i);
    }
        

    // Afficher la table de multiplication de 7
    
    let y = 0;
    while( y <= 10){
        let res = y * 7; 
        console.log(`${y} x 7 = ${res}`);
        y = y + 1
        
    }
    
    // Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et B
    
    let a = 12;
    let b = 14;
    console.log(a, b)
    let temp = a;
    a = b;
    b = temp
    console.log(a, b)
    
    





        


    
    
    
    
    
    
    
    
    