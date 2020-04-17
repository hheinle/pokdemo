# Pokdemo, Hélène Heinlé et Emile Georget, M1 MIAGE, groupe 1B


Dans ce TP, nous avons appris à nous servir d'un framework développé par Google : Angular. Avec ce framework, l'objectif est de faire du code bien modulé afin qu'il soit ré-utilisable. Ce principe passe principalement par la notion de composants.

Pour ce TP, nous avons utilisé le langage Typescript mais il aurait été possible d'utiliser Javascript.

Le but de ce TP était de développer une interface permettant de rechercher des informations sur des Pokémons.

## Interface

L'interface que nous avons réalisée comporte en fait deux composants. Le premier permet à l'utilisateur de rechercher
le nom d'un Pokémon (en anglais) et le second affiche les informations qui concernent ce Pokémon.

Plus en détails, le premier composant (https://github.com/hheinle/pokdemo/tree/master/src/app/my-component), contient un champ texte où l'utilisateur peut saisir un nom de pokemon. 

Juste après se trouve une liste de noms de Pokémons. Cette liste est filtrée en temps réel lorsque l'utilisateur commence à saisir des lettres dans le premier champ de texte. Vous pouvez retrouver la fonction de filtrage dans le fichier "filter-pokemon--pipe.pipe.ts" (https://github.com/hheinle/pokdemo/blob/master/src/app/filter-pokemon--pipe.pipe.ts).

Ce composant possède aussi un champ de texte non éditable par l'utilisateur qui imprime le choix fait par l'utilisateur dans la liste avec le data-binding. Le choix fait dans la liste par l'utilisateur est enregistré dans un attribut "pokemonChoice" et on peut donc l'afficher dans un élément en écrivant {{pokemonChoice}}.

Le second composant est celui pour afficher les données du Pokémon choisi. Il se compose d'un bouton pour afficher ces données.

## Accès à l'API

Comme dit précedemment, il y a une liste contenant les noms des Pokemons. Ce ne sont pas des données saisies en dur mais des données récupérées depuis l'API http://pokeapi.co/.

Pour récupérer des données depuis cette API, nous avons créé un service (https://github.com/hheinle/pokdemo/blob/master/src/app/poke-api-service.service.ts).

Ce service à deux méthodes : getListPokemons et getPokemonById(x). La première permet de remplir la liste des noms de Pokémons en faisant une requête HTTP GET sur l'url https://pokeapi.co/api/v2/pokemon?limit=964.

La seconde méthode fait une requête HTTP GET sur l'url https://pokeapi.co/api/v2/pokemon/+id avec "id" qui vient du premier composant.

## Lien entre les deux composants

Pour pouvoir afficher les données du Pokémon choisi, il faut passer son identifiant "id" du permier au deuxième composant. Pour ça, nous avons créé un service https://github.com/hheinle/pokdemo/blob/master/src/app/share.service.ts. Il contient un attribut Observable. Les deux composants suivnet sont état en "s'inscrivant" à cet attribut. Ainsi, quand le premier composant change l'identifiant, le second obtient cette nouvelle donnée.



Ce projet a été généré avec [Angular CLI] (https://github.com/angular/angular-cli) version 8.3.23.

## Serveur de développement

Exécutez `ng serve` pour un serveur de développement. Accédez à `http: // localhost: 4200 /`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

## Génération de code

Exécutez `ng generate composant nom-composant` pour générer un nouveau composant. Vous pouvez également utiliser `ng generate directive | pipe | service | class | guard | interface | enum | module`.

## Build

Exécutez `ng build` pour construire le projet. Les artefacts de construction seront stockés dans le répertoire `dist /`. Utilisez l'indicateur `--prod` pour une version de production.

## Exécution de tests unitaires

Exécutez `ng test` pour exécuter les tests unitaires via [Karma] (https://karma-runner.github.io).

## Exécution de tests de bout en bout

Exécutez `ng e2e` pour exécuter les tests de bout en bout via [Protractor] (http://www.protractortest.org/).

## Aide supplémentaire

Pour obtenir plus d'aide sur l'Angular CLI, utilisez `ng help` ou allez consulter [Angular CLI README] (https://github.com/angular/angular-cli/blob/master/README.md).

