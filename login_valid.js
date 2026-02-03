function show(){
    let x = document.getElementById('pass');
    if(x.type=='password'){
        x.type='text'
    }
    else{
        x.type='password'
    }
}

function passvalid(){
    let mob = document.getElementById('mobile').value
    let valid = document.getElementById('pass').value
    

 if(isNaN(mob)){
        alert('Enter valid mobile Number, Only digits !')
        return false
    }
        
if(mob.length == 10 && valid.length >= 6 ){
    alert('Signup success ! 😎😎')
    let song=document.createElement('audio')
    song.setAttribute('src','Netflix sound.mp3')  
    
   return true
   
}
else{
    if(mob.length!=10){
        alert('Enter valid Mobile number (10 characters) 😂😂 !'  )
        document.form1.mobile.focus()
            return false
    }
    
 

    else if (valid.length<6){
        alert('Password must have min. 6 characters ! 😂😂 ')
        document.form1.pass.focus()
        return false
    }
    
} 
}

let audio1 = ()=>{
    let song=document.createElement('audio')
    song.src='Netflix sound.mp3'
    song.controls=false
    song.autoplay=true
    document.body.append(song)

}



function msg(){
    alert('Signup form has implemented ! Try it 😉😉')
}
