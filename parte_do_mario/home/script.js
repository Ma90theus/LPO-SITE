//Lógica do Hamburguer         
$( document ).ready(function() {                                                                                                              

$( ".cross" ).hide();
$( ".menu" ).hide();           
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
// -------------------------------
//Lógica do carrousel
let carousel = document.getElementsByClassName('carrousel');
let skip = document.getElementsByClassName('skip');
let slider = document.getElementsByClassName('sliders');
let option = document.getElementsByClassName('options');

let slidersIMGS = ["url(../../images/greg-bulla-CQKJRK7jwFE-unsplash.jpg)",
                   "url(../../images/kellen-riggin-oA5Il37kCzc-unsplash.jpg)",
                   "url(../../images/microsoft-365-hC_796Wu-VY-unsplash.jpg)"]

for(let skiper = 0; skiper < slider.length; skiper++){
    slider[skiper].style.backgroundImage = slidersIMGS[skiper];
}

function skipImage(){

}