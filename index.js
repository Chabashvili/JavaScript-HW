let str = 'I am new Developer';
document.getElementById("str-len").innerHTML = str.length;
console.log(str.length);

let str1 = 'I am new Developer';
document.getElementById("str-rep").innerHTML = str1.replace('Junior', 'Senior');
console.log(str.replace('Junior','Senior'));

let str2 = 'I am new Developer';
document.getElementById("str-slc").innerHTML = str2.slice(8,15);
console.log(str2.slice(3,19));

let str3 = 'I am new Developer';
document.getElementById("incl").innerHTML = str3.includes('Developer');
console.log(str3.includes('Developer'))

let str4 = 'I am new Developer';
document.getElementById("trim").innerHTML = str4.trim(' ')
console.log(str4.trim(' '));

let str5 = 'I am new Developer';
document.getElementById("endsw").innerHTML = str5.endsWith('Developer')
console.log(str5.endsWith('Developer'));

let str6 = 'I am new Developer';
document.getElementById("upprcs").innerHTML = str6.toUpperCase();
console.log(str6.toUpperCase());

let str7 = 'I am new Developer';
document.getElementById("lwrcs").innerHTML = str7.toLowerCase();
console.log(str7.toLowerCase());