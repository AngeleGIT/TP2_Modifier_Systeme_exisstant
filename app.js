// API à utiliser pour le travail: https://randomuser.me/api/?results=5

document.getElementById('bouton').addEventListener('click', getData);

function getData() {
    // console.log('test');

    // API
    fetch('https://randomuser.me/api/?results=5')
        .then(reponse => reponse.json())
        .then(data => {
            // console.log(data);

            let utilisateur = data.results;
            // console.log(utilisateur);

            //Get Data Value
            let DataOutput = "<h2><center>Listes des Utilisateurs</center></h2>";

            
            utilisateur.forEach(function (lists) {
                DataOutput += `
                 <div class="contenu">
                    <div class="image-utilisateurs">
                      <img src="${lists.picture.large}">
                    </div>
                    <div class="coordonnees">
                        <span class="list-group-item"><h3>Nom: ${lists.name.first} &nbsp ${lists.name.last}<h3></span>
                        <span class="list-group-item">Courriel: ${lists.email}</span>
                    </div>
                 </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('sortieDonnees').innerHTML = DataOutput;

        });
};

