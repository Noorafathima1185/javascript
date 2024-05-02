sentance = 'good morning all'
vowels = ['a','e','i','o','u','A','E','I','O','U']

Array.from(sentance).filter(char=>vowels.includes(char)).forEach(item=>console.log(item))


console.log('-------------------------------------');

str = 'noora fathima'
console.log(str[6]);

console.log('-------------------------------------');


// w.a.p to check whether the given string is palindrom or not?

str = 'malayalam'

start = 0
end = str.length-1
isPalindrom = true

while(start<end){
    if(str[start]!=str[end]){
        isPalindrom = false
    }
    start++
    end--
}
console.log(isPalindrom?'palindrom':'not palindrom');

console.log('--------------------------------------------');

pal = ' '
for(i=str.length-1;i>=0;i--){
    pal +=str[i]
}
console.log(str==pal?'palindrome':'not palindrome');