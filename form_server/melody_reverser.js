function melodyReverser(str)
{
const splittedStr = str.split(' ');
console.log(splittedStr);
const reversedStr = splittedStr.reverse();
return reversedStr.join(' ');
}
let reversed = melodyReverser('C4 D4 F4');
console.log(reversed);