function rem() {
    var width = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = width / 6.4 + 'px';
}
rem();
window.addEventListener('orientationchange', rem);
window.addEventListener('resize', rem);