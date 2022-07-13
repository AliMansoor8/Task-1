let str = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const list = str.replaceAll(/[^a-zA-Z ]/g, "").split(" ");
const vowels = /[aeiou]/gi;
let variable = "";
list.map((item)=>{
    if(item.length > variable.length || (item.length === variable.length && item.match(vowels).length > variable.match(vowels).length))
        variable = item;
});
console.log(variable);
