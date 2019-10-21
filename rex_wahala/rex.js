var i = 0;
let txt = 'Rex is a very Naughty Boy'; 
let speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("flash").innerHTML += txt.charAt(i);
    i++;
    
    
    setTimeout(typeWriter, speed);
   

    
  }

  if(i == txt.length){
    var text =  txt.substring(0,i-1);
    document.getElementById("flash").innerHTML = text
    i--;

    setTimeout(typeWriter, speed);

  }
  
}

function fish(){

   

}