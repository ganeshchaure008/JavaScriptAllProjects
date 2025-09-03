let last=null;

function restart() {
    document.getElementById('inp').value = "";
}

function clearCalc() { 
    document.getElementById('inp').value = "";
}

function addDigitOrOperator(d,type) {
    let prev=document.getElementById('inp').value;
    let lastChar=prev.charAt(prev.length - 1);

    if(prev ===""&&(d==='+'||d==='-'||d==='*'||d==='/'||d==='.'||d==='%'||d==='**')) {
        alert("Invalid Expression");
        return;
    }

    if((lastChar==='+'||lastChar==='-'||lastChar==='*'||lastChar==='/'||lastChar==='.'||lastChar==='%')&&(d==='+'||d==='-'||d==='*'||d==='/'||d==='.'||d==='%')){
        alert("Invalid Expression");
        return;
    }
    document.getElementById('inp').value = prev + d;
    last = type;
}

function calculate() {
    let str = document.getElementById('inp').value;
    try{
        let result = eval(str);  
        document.getElementById('inp').value = result;
    } catch{
        alert("Invalid Expression");
        document.getElementById('inp').value = "";
    }
}

function deleteLast() {
    let prev = document.getElementById('inp').value;
    document.getElementById('inp').value = prev.slice(0, prev.length - 1);
}
