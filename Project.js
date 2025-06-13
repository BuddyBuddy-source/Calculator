// let string = "";
// let buttons = document.querySelectorAll(`.button`);
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener("click" , (e) => {
//         console.log(e.target);
//         // string = string + e.target.innerText;
//         // document.querySelector("input").value=string;   
//     })
// })
// let result= document.querySelector(".input");

// // let calc=[];

// let string ="";
// let buttons=document.querySelectorAll(".button");
// buttons.forEach((button) => 
// button.addEventListener("click" , () => {
//     string= string+button.innerHTML;
//     console.log(string);
//     if(string=="m"){
//         string="";
//         result.innerText=string;
//     }
//     else{
//     string=result.innerHTML;
//     }
    
    
// })
// )

let input=document.querySelector(".IDbox");
let buttons=document.querySelectorAll(".button");
let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click" , (e) => {
        if(e.target.innerHTML=="="){
            string=eval(string);
            input.value=string
        }
        else if(e.target.innerHTML== "AC"){
            string="";
            input.value=string;
        }
        else{
        string=string+e.target.innerHTML;
        input.value=string;
        }
    })
})

