var width = window.innerWidth;

document.getElementById('topBar').style.width = `${width - 235}px`

var clickedMenu = true;

document.getElementById('menu').addEventListener('click', function() {
    if (clickedMenu) {
        document.getElementById('sidenav').style.transform = 'translate(-235px,0px)'
        addClass(document.getElementById('topBar'), 'topBarGrow')
        clickedMenu = false
    } else {
        document.getElementById('sidenav').style.transform = 'translate(0px,0px)'
        removeClass(document.getElementById('topBar'), 'topBarGrow')
        clickedMenu = true
    }
})

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className=el.className.replace(reg, ' ')
    }
}
