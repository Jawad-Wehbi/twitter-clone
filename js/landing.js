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

const close = document.getElementById("close")
const closewindow = () => {
    popUpsignUp.style.display = "none";
    popUpsignIn.style.display = "none";
}

signInButton.addEventListener("click", close);
signUpButton.addEventListener("click", close);

