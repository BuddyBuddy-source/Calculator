
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

