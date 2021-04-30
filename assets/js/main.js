function toggleMobileMenu() {
    const body = document.getElementById('body')
    const mobileMenu = document.getElementById('mobileNavMenu')
    const mobileNavCollapses = document.getElementsByClassName('mobile-nav-collapse')

    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show')
        body.style.overflow = 'visible'
    } else {
        mobileMenu.classList.add('show')
        body.style.overflow = 'hidden'
    }

    for (const collapse of mobileNavCollapses) {
        if (collapse.classList.contains('show')) {
            collapse.classList.remove('show')
        }
    }
}

window.addEventListener("resize", (event) => {
    const mobileMenu = document.getElementById('mobileNavMenu')
    if (screen.width > 991) {
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show')
            body.style.overflow = 'visible'
        }
    }
})

var footerWidgetContents = [].slice.call(document.querySelectorAll('.footer-widget-content'))
footerWidgetContents.forEach(footerWidgetContent => {
    footerWidgetContent.addEventListener('show.bs.collapse', () => {
        const expandIconId = footerWidgetContent.getAttribute('data-dvkt-expandIcon')
        const expandIcon = document.getElementById(expandIconId.replace('#', ''))
        expandIcon.style.transition = "all .3s"
        expandIcon.style.transform = "rotate(180deg)"
        expandIcon.innerHTML = 'remove'
    })
    footerWidgetContent.addEventListener('hide.bs.collapse', () => {
        const expandIconId = footerWidgetContent.getAttribute('data-dvkt-expandIcon')
        const expandIcon = document.getElementById(expandIconId.replace('#', ''))
        expandIcon.style.transition = "all .3s"
        expandIcon.style.transform = "rotate(-180deg)"
        expandIcon.innerHTML = 'add'
    })
});