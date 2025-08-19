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
- Utiliser un package « dotenv » [Documentation](https://www.npmjs.com/package/dotenv)
- Depuis Node 22, utiliser l'arguement « --env-file=... »  [Documentation](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)

## Routing
Mise en place du routing :
 - Basique : directement depuis la variable "app" de express
 - Avancé : via un objet "Router"

### Parametres récuperable depuis l'objet "req"
- **req.params**   
  -> Segement dynamique de la route (en gros, le ":id" par exemple)
- **req.query**  
  -> SearchParams de la requete, exemple "?category=42&minPrice=50&maxPrice=100"
- **req.body**
  -> Le corps de la requete (JSON, XML, Donnée) d'une requete de type "POST", "PUT" ou "PATCH"  
  Attention, celui-ci necessite une configuration _(Vu plus tard)_

## Structure de l'application
```
node_modules
src
  controllers   # Traitement des requetes
  routers       # Gestion du routing
  app.js        # Point d'entrer de l'app express
.env
.gitignore
package.json
readme.md
```
