/* You are injecting JavaScript into a page you got from the internet
and you want to change the behavior of Window.open, how can you do
it via the injected script ? */

// popup blocked
window.open('https://google.com')

// popup will be shown
button.onclick = () => {
    window.open('https://https://google.com')
}
// will open after 3 seconds
setTimeout(() => window.open('https://https://google.com'), 3000)

//pass additional parameters
const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`

window.open('https://google.com', test, params)

//generating the popup content from JavaScript:
let MyWindow = window.open("about:blank", "hello", "width=200,height=200")
MyWindow.document.write("Hello, world!")

//windows is modified after loading:
let newWindow = open('/', 'example', 'width=300,height=300')
newWindow.focus();

newWindow.onload = function() {
  let html = `<div style="font-size:30px">Добро пожаловать!</div>`;
  newWindow.document.body.insertAdjacentHTML('afterbegin', html);
};

/* You developed web pages that are on different domains and each of them is
opened in a separate browser tab, how can you share information between these tabs? */

const person = {firstName:'john', lastName:'smith', age: 25, gender: 'male'}
const data = JSON.stringify(person)
const targetOrigin = 'https://google.com'
//sending data
window.open('https://google.com').postMessage(data, targetOrigin)
//data reception
window.addEventListener("message", receiveMessage)
function receiveMessage(event){
  if (event.origin === "https://google.com"){
    return {data, origin, source} = event
  }
}

