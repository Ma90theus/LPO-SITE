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
let slider = document.querySelectorAll('.selection');
let option = document.getElementsByClassName('options');

console.log(slider);
console.log(option);

option.forEach( (opt,s)=> {
    
});

const callForAction = function() {
    for(let i = 0; i< 3 ; i++){
        if(option[i] === slider[i]){
            slider[i].style.display= 'inline';
            slider[i].style.position = 'relative';
            slider[i].style.right = `${(i+1)*100}%`;
            slider.forEach((img,s) => {
                if(s !== slider[i]){
                    img.style.display='none';
                }    
            });
        }
    
}


/*let slidersIMGS = ["url(../../images/greg-bulla-CQKJRK7jwFE-unsplash.jpg)",
                   "url(../../images/kellen-riggin-oA5Il37kCzc-unsplash.jpg)",
                   "url(../../images/microsoft-365-hC_796Wu-VY-unsplash.jpg)"]

for(let skiper = 0; skiper < slider.length; skiper++){
    slider[skiper].style.backgroundImage = slidersIMGS[skiper];
}

function skipImage(){

}*/