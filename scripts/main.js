fetch("/assets/2020-projects.json").then((res) => {
    if (!res.ok) {
        // throw an error
    }
    return res.json()
})
alert("hi")