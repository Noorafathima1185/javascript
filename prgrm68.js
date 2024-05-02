sentance = 'good morning all'

// w.a.p to print all vowels in the given sentance.

s = sentance.split('').filter(letter=>letter=='a' || letter=='e' ||letter=='i' ||letter=='o' ||letter=='u')
console.log(s);


console.log('---------------------------------');
// another method
vowels = ['a','e','i','o','u','A','E','I','O','U']
character = sentance.split('') 
console.log(character);

for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}


console.log('---------------------------------');
character.filter(char=>vowels.includes(char)).forEach(item=>console.log(item))

console.log('---------------------------------');

Array.from(sentance).filter(char=>vowels.includes(char)).forEach(item=>console.log(item))