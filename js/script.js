        //Variables 
        const clienId = '413bb48cf42d45d8918c7f444cf9052f'
        const redirectURI = 'http://localhost:5500/javascript-spotify/'
        let accessToken = null
        const inputSearch = document.getElementById('search')
        
        
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

// Connexion à spotify
bouttonSpotify.addEventListener('click', () => {
	window.location = `https://accounts.spotify.com/authorize?client_id=${clienId}&response_type=token&redirect_uri=${redirectURI}&scope=playlist-modify-public`;
})

// Création de la fonction qui me permet de récupérer l'accesToken
bouttonRecherche = document.getElementById('recherche')  

const getAccessToken = () => {
	const accessTokenMatch = window.location.hash.match(/(?<=access_token=)([^&]*)/)
	console.log(accessTokenMatch[0])
	accessToken = accessTokenMatch[0]
}

getAccessToken()

const searchSong = () => {
	const options = {
		method: "GET",
		headers: {
        		Accept: "application/json",
		"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	}
	console.log(accessToken)
        fetch(`https://api.spotify.com/v1/search?q=${inputSearch.value}&type=track`, options)
		.then(response => response.json())
		.then(data => {
			console.log(data);
                        const li = document.createElement('li');
                        const button = document.createElement('button');
                        button.textContent="Ajouter";
                         const liText = document.createTextNode(`${data.tracks.items[0].name} - ${data.tracks.items[0].artists[0].name}`)
                          const addbuttons = document.createElement('Ajouter');
                          const btnText = document.createElement('Add')
                          li.append(button)
                          li.append(liText)
                          musiques.append(li)

                          addbuttons.append(btnText)
                         
                          button.addEventListener('click', () => {    
                                // Creation balise li
                                const nouvelLi = document.createElement('li');
                                // Creattion de texte avec en paramettre un get de l'attribut data-song
                                const nomMusique = document.createTextNode(`${data.tracks.items[0].name} - ${data.tracks.items[0].artists[0].name}`);
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
}
bouttonRecherche.addEventListener('click', searchSong)
