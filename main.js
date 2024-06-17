//     //221 //3.3.5
// let $=console.log;

let countEL=document.getElementById("count-el")//pass in arguments
let saveEl=document.getElementById("save-el")
let count=0;
function increment(){
    count+=1;
    countEL.textContent=count;
}

function save(){
    let countstr=count+" -  ";
     saveEl.textContent+=countstr;
    countEL.textContent=0; 
    count=0;
    
}





























// let text="Na na na na na na na na Batman!";
// let wordset= new Set(text.split(""));
// let unique=[];
// for(let word of wordset)
//     {
//         unique.push(word);
//     }
//  console.log(unique);
 /////////////////////////////////////
// let text = "Na na na na na na na na Batman!";
// let wordSet = new Set(text.split(" "));
// let unique = [];
// for(let word of wordSet) {
// unique.push(word);
// }
// console.log(unique) 