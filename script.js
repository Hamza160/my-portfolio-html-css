let themeDots = document.querySelectorAll('.theme-dot');

let theme = localStorage.getItem('mode');

if(theme){
  setTheme(theme);
}

for(var i = 0; i < themeDots.length ; i++){
   themeDots[i].addEventListener('click', function(){
     let mode = this.dataset.mode
     setTheme(mode);
   });
}


function setTheme(mode){
  document.querySelector('#theme-style').href = `${mode}.css`;
  localStorage.setItem('mode', mode);
}