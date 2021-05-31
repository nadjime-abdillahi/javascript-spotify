console.log("sa marche");

const musiqueRecuperer = document.querySelectorAll("#musiques > ul> li")

musiqueRecuperer.forEach((element , i) => {     

    element.addEventListener('click', () => {
    
        console.log("sa marche");
    })
})


