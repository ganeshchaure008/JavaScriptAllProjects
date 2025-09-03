function validateMob(mob){
    if(mob.length>10){
        alert("Mobile number cannot exceed 10 digits")
        document.getElementById('inp').value = mob.slice(0,10)
    }

    let size = mob.length

    if(mob.charCodeAt(size-1) <48 || mob.charCodeAt(size-1)>57){
        alert("Mobile number can only have digit [0-9]")
        document.getElementById('inp').value = mob.slice(0, size-1)
    }
}