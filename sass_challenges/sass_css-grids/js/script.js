// This is the smooth scroll function that takes the user to the top of the page (home)
function takeMeHome() {
    let theHome = document.getElementById("home");
    window.scrollTo({ 
        top: 0,
        left: 0, 
        behavior: 'smooth'
    });
}

// This is the smooth scroll function that takes the user to the japan cars section of the page
function takeMeJapan() {
    let japan = document.getElementById("japan").offsetTop;
    window.scrollTo({ 
        top: japan,
        left: 0, 
        behavior: 'smooth'
    });
}

// This is the smooth scroll function that takes the user to the german cars section of the page
function takeMeGerman() {
    let german = document.getElementById("german").offsetTop;
    window.scrollTo({ 
        top: german,
        left: 0, 
        behavior: 'smooth'
    });
}

// This is the smooth scroll function that takes the user to the iconic cars section of the page
function takeMeIconic() {
    let iconic = document.getElementById("iconic").offsetTop;
    window.scrollTo({ 
        top: iconic,
        left: 0, 
        behavior: 'smooth'
    });
}

// This is the smooth scroll function that takes the user to the hire a car section of the page
function takeMeHire() {
    let hireMe = document.getElementById("hire").offsetTop;
    window.scrollTo({ 
        top: hireMe,
        left: 0, 
        behavior: 'smooth'
    });
}
