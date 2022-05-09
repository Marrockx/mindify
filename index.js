import "./public/css/prefixed/style.css"

var checkbox = document.querySelector('input[name=mode]');
checkbox.addEventListener('change', handleEvent);
var trans = function () {
    document.documentElement.classList.add('transition');
    window.setTimeout(function () {
        document.documentElement.classList.remove('transition');
    }, 1000);
};
function handleEvent() {
    if (checkbox.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
