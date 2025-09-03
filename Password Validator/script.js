const size = document.getElementById('length');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const symbol = document.getElementById('special');

function validatePassword(pass) {
    if (pass.charCodeAt(pass.length - 1) === 32) {
        alert("White spaces are not allowed");
        document.getElementById('inp').value = pass.slice(0, pass.length - 1);
        return;
    }

    updateStatus(size, pass.length >= 8, "Your password has at least 8 characters", "Your password must have at least 8 characters");
    updateStatus(upper, /[A-Z]/.test(pass), "Your password has at least one uppercase letter", "Your password must have at least one uppercase letter");
    updateStatus(lower, /[a-z]/.test(pass), "Your password has at least one lowercase letter", "Your password must have at least one lowercase letter");
    updateStatus(symbol, /[@_]/.test(pass), "Your password has at least one special character (@ or _)", "Your password must have at least one special character (@ or _)");
}

function updateStatus(element, condition, validText, invalidText) {
    element.textContent = condition ? `✅ ${validText}` : `❌ ${invalidText}`;
    element.className = condition ? 'valid show' : 'invalid show';
}
