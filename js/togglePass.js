function togglePass(s) {
    const passInput = document.querySelector('#pass');
    if (s.textContent === 'View'){
        passInput.setAttribute('type', 'text');
        s.textContent = 'Hide';
    }
    else if (s.textContent === 'Hide') {
        passInput.setAttribute('type', 'password');
        s.textContent = 'View';
    }
}