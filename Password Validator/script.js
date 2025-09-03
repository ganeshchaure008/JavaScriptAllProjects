let size = document.getElementById('length')
let upper = document.getElementById('uppercase')
let lower = document.getElementById('lowercase')
let symbol = document.getElementById('special')

function validatePassword(pass){

    if(pass.charCodeAt(pass.length-1)==32){
        alert("White spaces in password are not allowed")
        document.getElementById('inp').value = pass.slice(0,pass.length-1)
    }


    if(pass.length<8){
        size.innerHTML = "❌ Your password must have 8 characters"
        size.style.color = "red"
    }
    else{
        size.innerHTML = "✅ Your password has atleast 8 characters"
        size.style.color = "green"
    }

    for(let i=0; i<pass.length; i++){
        if(pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90){
            upper.innerHTML = "✅ Your password has atleast one uppercase letter"
            upper.style.color ="green"
            break;
        }
        else{
            upper.innerHTML = "❌ Your password must have atleast one uppercase letter"
            upper.style.color ="red"
        }
    }

    for(let i=0; i<pass.length; i++){
        if(pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122){
            lower.innerHTML = "✅ Your password has atleast one lowercase letter"
            lower.style.color ="green"
            break;
        }
        else{
            lower.innerHTML = "❌ Your password must have atleast one lowercase letter"
            lower.style.color ="red"
        }
    }

    for(let i=0; i<pass.length; i++){
        if(pass.charCodeAt(i)==64 || pass.charCodeAt(i)==95){
            symbol.innerHTML = "✅ Your password has atleast one special character (@ or _)"
            symbol.style.color ="green"
            break;
        }
        else{
            symbol.innerHTML = "❌ Your password must have atleast one specail character (@ or _)"
            symbol.style.color ="red"
        }
    }
}