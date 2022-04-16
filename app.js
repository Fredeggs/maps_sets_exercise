//Quick Question #1
new Set([1,1,2,2,3,4]); // {1,2,3,4}

//Quick Question #2 
[...new Set("referee")].join("") // "ref"

//Quick Question #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

const hasDuplicate = (arr) => arr.length !== [...new Set(arr)].length;

const vowelCount = (string) => {
    const stringMap = [...string];
    const vowelMap = new Map();
    const vowels = 'aeiou';
    stringMap.forEach((char) => {
        if(vowels.indexOf(char) !== -1){
            console.log('vowel!');
            if(vowelMap.get(char) === undefined){
                vowelMap.set(char, 1);
            } 
            else{
                let vowelCount = (vowelMap.get(char)+1);
                vowelMap.set(char, vowelCount);
            }
        }
    })
    return vowelMap;
}
