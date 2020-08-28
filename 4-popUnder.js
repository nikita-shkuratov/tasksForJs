const $link = document.getElementById('link')
$link.addEventListener('click', openNewWindow)

function openNewWindow(event) {
    event.preventDefault()
    const url = event.target.getAttribute('href')

    window.open(url, "s",
        `width= 640, height= 480, left=0, top=0,
        resizable=yes, toolbar=no, location=no,
        directories=no, status=no, menubar=no,
        scrollbars=yes, resizable=no, copyhistory=no`).blur();
    window.focus();
}
