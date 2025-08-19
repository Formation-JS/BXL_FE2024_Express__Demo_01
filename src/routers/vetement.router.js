// Responsabilité du fichier "router"
// -> Gestion des routes (pas de métier)

import { Router } from 'express';
import vetementController from '../controllers/vetement.controller.js';


const vetementRouter = Router();

//! Route simple
// vetementRouter.get('/vetement/demo', vetementController.demo);
// vetementRouter.get('/vetement/example', vetementController.exemple);

vetementRouter
    .get('/demo', vetementController.demo)
    .get('/exemple', vetementController.exemple);


//! Deux routes différentes
// vetementRouter
//     .get('/detail/:id', vetementController.detail)  // -> localhost:8080/vetement/detail/42
//     .get('/d/:id', vetementController.detail)       // -> localhost:8080/vetement/d/42

//! Même routes, mais avec segement optionnel
//  -> Les accolades permettre de rendre un segement optionnel !
vetementRouter
    .get('/d{etail}/:id', vetementController.detail)  // -> localhost:8080/vetement/detail/42

//! Route avec des parametres optionnels
// -> localhost:8080/vetement/search?category=42&minPrice=50&maxPrice=100
vetementRouter
    .get('/search', vetementController.search)

export default vetementRouter;