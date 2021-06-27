
function menuAbout() {
  document.getElementById('about').style.display="block";
  document.getElementById('gabout').style.display="none";
  document.getElementById('gwork').style.display="none";
  document.getElementById('gcontact').style.display="none";
  document.getElementById('photo').style.display="none";
  document.getElementById('return').style.display="block";
} 

function menuWork() {
  document.getElementById('work').style.display="block";
  document.getElementById('gabout').style.display="none";
  document.getElementById('gwork').style.display="none";
  document.getElementById('gcontact').style.display="none";
  document.getElementById('photo').style.display="none";
  document.getElementById('return').style.display="block";
} 

function menuContact() {
  document.getElementById('contact').style.display="block";
  document.getElementById('gabout').style.display="none";
  document.getElementById('gwork').style.display="none";
  document.getElementById('gcontact').style.display="none";
  document.getElementById('photo').style.display="none";
  document.getElementById('return').style.display="block";
} 

function menuReturn() {
  const w = window.innerWidth;
  if (w < 768) {
    document.getElementById('about').style.display="none";
    document.getElementById('work').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('gabout').style.display="block";
    document.getElementById('gwork').style.display="block";
    document.getElementById('gcontact').style.display="block";
    document.getElementById('return').style.display="none";
    document.getElementById('photo').style.display="none";
} else {
    document.getElementById('about').style.display="none";
    document.getElementById('work').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('gabout').style.display="block";
    document.getElementById('gwork').style.display="block";
    document.getElementById('gcontact').style.display="block";
    document.getElementById('return').style.display="none";
    document.getElementById('photo').style.display="block";
}
} 


function copyMail(){
let nameMail = "krzysiekmazurek91@gmail.com";
navigator.clipboard.writeText(nameMail).then(function(){alert("Copying email to clipboard was successful!")});
}