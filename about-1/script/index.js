var searchBtn = document.querySelector('.search')
var timesBtn = document.querySelector('.fa-times')
var popup = document.querySelector('.popup')
var navbar = document.querySelector('.navbar')


searchBtn.addEventListener('click',()=>{
    change()
});


timesBtn.addEventListener('click',()=>{
    change()
})


function change(){
    popup.classList.toggle('active')
    
}

window.addEventListener('scroll',()=>{
   var x = window.scrollY
    if(x > 50){
        navbar.style = 'position: fixed; width:100%; top:0;'
       
    }
    else{ 
        navbar.style = ''
    }
    console.log(x)
})



