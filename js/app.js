let boy  = document.getElementById("boy");
boy.style.position = "relative";
let left = 0;
let jumpleft = 0;

document.addEventListener("keydown", function(e) {

    // up  = 38; down = 40; left: 37; right: 39
    if(e.keyCode  === 38 || e.keyCode === 87 || e.keyCode === 32) {
       if(boy.style.animationName === "") {
           boy.style.animationName = "jump";
           boy.style.left = `${jumpleft}px`;
           boy.style.transition = "0.1s all";
           jumpleft+=100;
           left = jumpleft;
           
           
        }
        else if(boy.style.animationName) {
            boy.style.animationName = "";
        }
    }
    if(e.keyCode === 68) {
        boy.style.left = `${left}px`;
        boy.style.transition = "0.1s all";
        jumpleft = left;
        left+=100;
    }
    if(e.keyCode === 65) {
        boy.style.left = `${left}px`;
        jumpleft = left;
      
        left-=100;
    }
    // 'R' Button
    if(e.keyCode === 82) {
        if(boy.style.animationName === "") {
            boy.style.left = `${jumpleft}px`;
            boy.style.top = "-200%";
        
            boy.style.animationName = "forwardroll"; 
               
            
            boy.style.transition = "0.5s all";

            jumpleft+=100;
            left = jumpleft;
            
            
         }
         else if(boy.style.animationName) {
             boy.style.animationName = "";
         }
    }
})  