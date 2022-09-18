// Sign-Up popUp
const signUpButton = document.getElementById("signUpbtn");
const popUpsignUp = document.getElementById("pop");

const popUp = () => {
    popUpsignUp.style.display = 'flex';
    popUpsignUp.style.position = 'absolute';

}

signUpButton.addEventListener("click", popUp);



const signInButton = document.getElementById("signin");
const popUpsignIn = document.getElementById("popin");

const popin = () => {
    popUpsignIn.style.display = 'flex';
    popUpsignIn.style.position = 'absolute';

}

signInButton.addEventListener("click", popin);
