const musiqueRecuperer = document.querySelectorAll("#musiques > ul> li > button")


musiqueRecuperer.forEach((button , i) => {     

    button.addEventListener('click', () => {    
        const nouvelLi = document.createElement('li');
        const texte = document.createTextNode(button.getAttribute('data-song'));
        nouvelLi.append(texte);
        lesSons.append(nouvelLi);
    })
})

//console.log(playlist[1])

// const boutonAfficher = document.getElementById("playlist");

// boutonAfficher.addEventListener('click',() => {

//     playlist.forEach((element , i)=>{
//         console.log(playlist[i])

        
//         const pText = document.createElement('li');
//         pText.innerHTML = playlist[i].textContent
//         lesSons.append(pText)
       

//     })
     
// })