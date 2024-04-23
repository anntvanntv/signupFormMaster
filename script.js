let form = document.getElementById('form');

let nom = document.getElementById('name');

let lastName = document.getElementById('lastName');

let email = document.getElementById('email');


let password = document.getElementById('passw');

let errorMgs = document.getElementsByClassName('errorMg');
       
let errorMessages = Array.from(errorMgs);

let iconError = document.getElementsByClassName('error');

let icon = Array.from(iconError);



let i = 0;
let padre = errorMessages[i].parentElement;

let arrPadres = Array.from(padre);









form.addEventListener("submit", (e) =>{
    e.preventDefault();

        



        




       for(var i = 0; i < 5; i++){
            if(arrPadres[i].value == ''){
                errorMessages[i].style.display = 'block';
                icon[i].style.display = 'block';
                arrPadres[i].style.border = '2px solid #ff2851';
            }
        } 


       
        let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
        

            if (!arrPadres[2].value.match(mailRegex) ) {
                
                email.placeholder = 'email@example.com';
                errorMessages[2].style.display = 'block';
                arrPadres[2].style.display = 'block';
                arrPadres[2].style.border = '2px solid #ff2851';
                
                }
            
            }
        
);    


