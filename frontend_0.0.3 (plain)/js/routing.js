function scrollUp () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function show_register() {
    var register = document.querySelector("#register-container");
    register.scrollIntoView({behavior: 'smooth', block: 'start'})
}

function show_about() {
    var about = document.querySelector("#about-container");
    about.scrollIntoView({behavior: 'smooth', block: 'start'})
}