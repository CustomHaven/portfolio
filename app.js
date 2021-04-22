const grid = document.querySelector(".grid-container");
const mainContent = document.querySelector(".main-content");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
// mainContent.innerHTML = '<p>MAD CHANGE!</p>'
const inputToggle = document.querySelector("input");

inputToggle.onclick = function() {

    const body = document.body;
// body.style.backgroundColor = "black";
    // while (body.style.backgroundColor == "white" || body.style.backgroundColor == "black") {
        if (body.style.backgroundColor === "black") {
            return body.style.backgroundColor = "white";
        } else {
            return body.style.backgroundColor = "black";
        }
    // }
       
}



const appearOptions = {
    // root: null,
    rootMargin: "0px 0px -250px 0px",
    threshold: 0
}



const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.toggle("appear");
            appearOnScroll.unobserve(entry.target);
        }
        // console.log(entry.target);
        
        
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});


sliders.forEach(slider => {
    appearOnScroll.observe(slider)
});