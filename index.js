
const hamburger = document.querySelector('.hamburger')
const links = document.querySelector(".links")
const overlay = document.querySelector(".overlay")


const togglemenu = () => {
    hamburger.classList.toggle("active")
    links.classList.toggle("active")
    overlay.classList.toggle("active")
}

hamburger.addEventListener("click",togglemenu)
links.addEventListener("click",togglemenu)


// --------------------------------------------------------------------------------------------------------

const hero = document.querySelector(".hero");
const servis = document.querySelector(".servis")
const navbar = document.querySelector(".navbar");
const navlink = document.querySelector(".links")



const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        if (!intersecting ) {
            navbar.classList.add("navbar-scrolled")
            navlink.classList.add("navlink-scrolled")
        } else {
            navbar.classList.remove("navbar-scrolled")
            navlink.classList.remove("navlink-scrolled")
        }
        // intersecting ? navlink.classList.add("navbar-scrolled") : navlink.classList.remove("navbar-scrolled")
    })
}, {rootMargin:" -35% 0px 0px"})




scrollObserver.observe(hero)
