window.addEventListener('load', function() {
    let findBtn = document.getElementById('btn');

    findBtn.addEventListener('click', function(element) {
        element.preventDefault();

        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                let quote = document.querySelector('#quote');
                alert(`Superheroes list \n ${data}`);
            })
            .catch(error => console.log('There was an error: ' + error));
    });
});