const mainNav = document.getElementById('mainNav')
const mainNavbarBrand = document.getElementById('mainNavbarBrand')
const mainNavbarLinks = document.getElementById('mainNav').getElementsByClassName('main-nav-link')

window.onscroll = () => {
    let scrollPosition = window.scrollY
    if (scrollPosition > 1) {
        mainNav.classList.remove('bg-transparent')
        mainNav.classList.add('bg-light')
        mainNav.classList.add('shadow-sm')

        mainNavbarBrand.classList.remove('navbar-brand-light')
        mainNavbarBrand.classList.add('navbar-brand-dark')

        for (const link of mainNavbarLinks) {
            link.classList.remove('dvkt-nav-link-light')
            link.classList.add('dvkt-nav-link-dark')
        }
    } else {
        mainNav.classList.add('bg-transparent')
        mainNav.classList.remove('bg-light')
        mainNav.classList.remove('shadow-sm')

        mainNavbarBrand.classList.add('navbar-brand-light')
        mainNavbarBrand.classList.remove('navbar-brand-dark')

        for (const link of mainNavbarLinks) {
            link.classList.add('dvkt-nav-link-light')
            link.classList.remove('dvkt-nav-link-dark')
        }
    }
}