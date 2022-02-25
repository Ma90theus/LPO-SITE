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
let slider = document.getElementsByClassName('selection');
let option = document.getElementsByClassName('options');

console.log(slider);
console.log(option);
/*(for(let s = 0; s < option.length; s++){
    option[s].addEventListener("click", () => callForAction());
}

let callForAction = function() {
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
}*/
for(let s = 0; s < option.length; s++){
    option[s].addEventListener("click", () => {
        for(let i = 0; i< slider.length ; i++){
            if(s === i){
                slider[i].style.display= "inline";
                slider[i].style.position = "relative";
                slider[i].style.right = `${(i+1)*100}%`;
                slider.forEach((img) => {
                    if(img !== slider[i]){
                        img.style.display='none';
                    }    
                });
            }
        }
    });
}