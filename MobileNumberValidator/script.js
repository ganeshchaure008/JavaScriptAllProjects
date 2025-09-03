function validateMob(mob){
    const message = document.getElementById('message');
    const input = document.getElementById('inp');
    const submitBtn = document.getElementById('submitBtn');

    // Clean input: allow only numbers
    input.value = mob.replace(/\D/g, '');

    if(input.value.length === 0){
        message.textContent = '';
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
    }
    else if(input.value.length < 10){
        message.textContent = 'Number must be 10 digits';
        message.className = 'invalid';
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
    }
    else if(/^[6-9]\d{9}$/.test(input.value)){
        message.textContent = 'Valid number ✔';
        message.className = 'valid';
        submitBtn.disabled = false;
        submitBtn.classList.add('enabled');
    }
    else {
        message.textContent = 'Invalid number ❌';
        message.className = 'invalid';
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
    }
}

function submitNumber(){
    const input = document.getElementById('inp').value;
    alert(`Your number ${input} has been successfully submitted!`);
}
