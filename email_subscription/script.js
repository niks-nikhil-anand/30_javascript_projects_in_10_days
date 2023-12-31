const scriptURL = 'https://script.google.com/macros/s/AKfycbxNiSAPM2QEZeV1Ra5XHIGLAXm7yJ1LEhjOPlI6aV4ElfPKsJJkAKkVT6jV285tBA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>{
            msg.innerHTML = " Thank You for subscribing!";
            setTimeout(function(){
                msg.innerHTML = "";
            } , 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})