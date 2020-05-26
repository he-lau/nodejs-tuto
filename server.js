/*
Il crée un mini-serveur web qui renvoie un message "Salut tout le monde" 
dans tous les cas, quelle que soit la page demandée. 
Ce serveur est lancé sur le port 8080 à la dernière ligne.
*/

//http est un objet !
var http = require('http');

//res equivaut au requêtes utilisateurs (visiteurs), res equivaut a ce qu'on va renvoyer (en générale code HTML)
var server = http.createServer(function(req, res) {
	//On renvoie le code 200 dans l'en-tête de la réponse, qui signifie au navigateur "OK tout va bien"
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
server.listen(8080);





// Code identique au précédent

var instructionsNouveauVisiteur = function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
}

var server = http.createServer(instructionsNouveauVisiteur);