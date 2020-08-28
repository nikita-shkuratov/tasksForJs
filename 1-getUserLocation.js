/* Please provide several ways that a website or web application
can determine the end-user location? Given that you can inject
a JavaScript code how can this information be modified on the
client-side to make the website detect a different location? 
are there any technical limitations? */

function success(pos) {
    let crd = pos.coords

    const falseLocation = {
        ...crd,
        latitude: (Number(crd.latitude) + 2).toString(),
        longitude: (Number(crd.longitude) + 4).toString()
    }

    console.log('Ваше текущее метоположение:')
    console.log(`Широта: ${crd.latitude}`)
    console.log(`Долгота: ${crd.longitude}`)
    console.log('---------------------------')
    console.log('Ваше ложное метоположение:')
    console.log(`Широта: ${falseLocation.latitude}`)
    console.log(`Долгота: ${falseLocation.longitude}`)
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

navigator.permissions.query({ name: 'geolocation' }).then((result) => {
    console.log('Permission: ', result.state);
    navigator.geolocation.getCurrentPosition(success, error, options)
    result.onchange = () => {
        console.log(result.state);
    }
})
