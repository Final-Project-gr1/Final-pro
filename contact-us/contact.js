var fixer = document.querySelector('.fixer')
window.addEventListener('scroll',()=>{
  var x = window.scrollY
   if(x > 50){
      fixer.style = 'position: fixed; width:100%; top:0;'
      
   }
   else{ 
      fixer.style = ''
  }
});