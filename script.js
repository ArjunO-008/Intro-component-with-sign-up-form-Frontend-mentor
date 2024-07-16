
const sbtBtn = document.getElementById('sbtBtn');

let inpts = document.getElementsByTagName('input');

const FNerr = document.getElementById('FNerr');
const LNerr = document.getElementById('LNerr');
const PassLabel = document.getElementById('PassLabel');
const emailLabel = document.getElementById('emailLabel');

const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const userEmail = document.getElementById('email');
const pasword = document.getElementById('pasword');







sbtBtn.addEventListener('click',(e)=>{
    e.preventDefault();  
    isEmpty();    
    checkPass(pasword.value.length)
    
    if(!isValid(userEmail.value)){    
        email.parentElement.style.border = "1px solid var(--Red)";
        email.parentElement.lastElementChild.style.display = "block";
        email.parentElement.parentElement.lastElementChild.innerText = `"Looks like this is not an email"`;
        return
    }else{
        email.parentElement.style.border = "1px solid var(--GrayishBlue)";      
    }
   

})



function isEmpty(){
    for(let i =0;i<4;i++){           
        if(inpts[i].value === ''){
           inpts[i].parentElement.lastElementChild.style.display = "block";
           inpts[i].parentElement.parentElement.lastElementChild.innerText = `" ${inpts[i].name} cannot be empty"`;
        }
    }
}


function checkPass(val){
    if(val<8){
        PassLabel.innerText = `Minimum 8 characters required`;
        pasword.parentElement.lastElementChild.style.display = "block";
    }
}
function detectChange(event){
    let elm = event.target;
   elm.parentElement.lastElementChild.style.display = 'none';
   elm.parentElement.parentElement.lastElementChild.innerText = '';
}

function isValid(email){
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}