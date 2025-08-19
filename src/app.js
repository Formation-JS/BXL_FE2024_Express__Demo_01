//! Importer express
import express from "express";

//! Constantes
const PORT = 8080;

//! Initialiser le web server via express
const app = express();

//! Ajouter une route "hello"
//? - Route à atteindre (en gros -> l'url)
//? - Le comportement (Callback avec la requete et la réponse)
app.get('/coucou', (req, res) => {

    //? Solution basique
    // res.write('Bonjour');
    // res.end();

    //? Solution
    res.send('Bonjour');
});

//! Démarrer le serveur
app.listen(PORT, (error) => {
    if(error) {
        console.log('Erreur lors du démarage du serveur !');
        console.log(error);
        return;
    }

    console.log(`Le serveur Web tourne sur le port ${PORT}`);
})