# Demo 01 - Intro Express

## Installation d'express
Après avoir initialisé le projet avec node, installation d'express dans le terminal 
```
npm i express 
```

Ensuite, mise en place du serveur web, dans app.js
```
//TODO Importer express
//TODO Initialiser l'app
//TODO Ajouter une route "hello"
//TODO Démarrer le serveur
```

## Variable d'env
Permet de créer des constantes d'environnment qui peuvent être defini : 
 - Fichier .env (doit être liéé au projet !)
 - (Local) Variable d'env du systeme d'exploitation
 - (Hebergeur) Variable d'env injecté depuis la configuration.

### Lier le fichier et l'application
- Utiliser un package « dotenv » !(Lien)[https://www.npmjs.com/package/dotenv]
- Depuis Node 22, utiliser l'arguement « --env-file=... »  (Lien)[https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs]