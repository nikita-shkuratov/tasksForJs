/*  As a web page developer, you want to perform some actions
that will be initiated from JavaScript code, like pasting 
data into the local clipboard, but this action is failing
although copy & paste usually works with many sites, can 
you explain why? */

navigator.permissions.query({ name: 'clipboard-read' })
    .then(result => {
        console.log(result);
        result.onchange = () => {
            console.log(result.state)
        }
    })

navigator.permissions.query({ name: 'clipboard-write' })
    .then(result => {
        console.log(result);
        result.onchange = () => {
            console.log(result.state)
        }
    })

async function copyPageUrl() {
    try {
        await navigator.clipboard.writeText(location.href)
        console.log('Page URL copied to clipboard')
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}

copyPageUrl()

async function getClipboardContents() {
    try {
        const text = await navigator.clipboard.readText()
        console.log('Pasted content: ', text)
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err)
    }
}

getClipboardContents() 