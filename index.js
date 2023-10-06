
let bulb = document.querySelector(".bulb")
let buttton = document.querySelector("#button")
 flag = 0
buttton.addEventListener("click",()=>{
    if (flag == 0) {
     bulb.style.backgroundColor="yellow"
     buttton.innerHTML="bulb on"
     buttton.style.backgroundColor = "yellow"
     console.log("clicked")  
     flag =1      
    }else{
        bulb.style.backgroundColor="transparent"
        buttton.innerHTML= "Bulb off"
        buttton.style.backgroundColor ="#fff"
        console.log("clicked")  
        flag =0  
    }
})