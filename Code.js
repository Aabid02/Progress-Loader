const numb = document.querySelector(".key");
let counter = 0;

setInterval(() => {
  if(counter==100){
    clearInterval();
  }
  else{
    counter += 1;
    numb.textContent = counter+"%";
  }
}, 80);
