// Responsabilité du fichier "controller"
// -> Traitement de la requete

const vetementController = {

    demo: (req, res) => {
        // res.status(501).send();
        res.sendStatus(501);
    },

    exemple: (req, res) => {
        const data= {
            message : 'Ceci est un exemple !'
        };
        res.json(data);
    },

    detail: (req, res) => {
        const id = parseInt(req.params.id);

        if(isNaN(id)) {
            res.status(400).send('Erreur !');
            return;
        }

        res.send(`Detail de l'élément ${id} !`);
    },

    search: (req, res) => {
        console.log(req.query);
        
    }

};

export default vetementController;