        // Recupere toutes les musiques stocké
const musiqueRecuperer = document.querySelectorAll("#musiques > ul> li > button")
        // parcours les musiques
musiqueRecuperer.forEach((button , i) => {     
        // creation de l'event du boutton d'ajout a la playliste
    button.addEventListener('click', () => {    
        // Creation balise li
        const nouvelLi = document.createElement('li');
        // Creattion de texte avec en paramettre un get de l'attribut data-song
        const nomMusique = document.createTextNode(button.getAttribute('data-song'));
        // Creation d'un bouton supprimer
        const buttonDelete = document.createElement('button')
        // Creation du text du boutton
        buttonDelete.textContent="supprimer";
        // Ajout de l'event click pour le boutton supprimer
        buttonDelete.addEventListener('click',()=>{
        // on supprimer le nom de la musique
        nouvelLi.remove(nomMusique)
        // on supprime egalement le boutton supprimer
        nouvelLi.remove(buttonDelete)
        })
        // Attribution a la balise ul le nouvelle Li
        lesSons.append(nouvelLi);
        // Attribution a la balise li nouveau button
        nouvelLi.append(buttonDelete)
        // Attribution a la balise li le nouveau text
        nouvelLi.append(nomMusique);
       
    })
})

// creation boutton de connexion id
bouttonSpotify = document.getElementById('spotify')
// creation de l'event du boutton spotify
bouttonSpotify.addEventListener('click',()=>{     
// creation du lien spotify

const spotify="https://accounts.spotify.com/authorize?client_id=413bb48cf42d45d8918c7f444cf9052f&response_type=token&scope=user-read-private%20user-read-email&redirect_uri=http://localhost:5500/javascript-spotify/"
//const spotify = "https://accounts.spotify.com/authorize?response_type=code&client_id=413bb48cf42d45d8918c7f444cf9052f&redirect_uri=http://localhost:5500/javascript-spotify/"; 
// redirection vers cette url
        document.location.href=spotify      
})
// creation boutton recherche
bouttonRecherche = document.getElementById('recherche')
// creation de l'event du boutton recherche

bouttonRecherche.addEventListener('click',()=>{        
       document.createDocumentFragment
const spotify = "https://api.spotify.com/v1/me?Authorization=Bearer="+ document.getAttribute('response_type');    
document.location.href=spotify        
})