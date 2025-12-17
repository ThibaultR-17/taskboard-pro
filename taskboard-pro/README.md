# TaskboardPro

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Séquence 2 – Logique réactive du flux de données
### 1. Structure du flux
- Le service `TaskService` utilise un **BehaviorSubject** pour stocker et diffuser la liste des tâches.
- Le composant `Home` s’abonne à ce flux via `tasks$` et le **pipe async**.
### 2. Mise à jour des données
- La méthode `addTask()` ajoute une tâche puis appelle `next()` pour émettre la nouvelle liste.
- La méthode `removeTask()` supprime une tâche puis émet à nouveau la liste mise à jour.
- La vue est automatiquement réactualisée sans rechargement.
### 3. Points clés retenus
- Pas besoin d’appeler `getTasks()` à chaque fois : la donnée est **vivante**.
- `| async` gère l’abonnement et le désabonnement automatiquement.
- Le flux reste cohérent entre le service et la vue.

## BehaviorSubject :
- Le behaviorSubject permet d'utiliser liste dynamique et reactive. le bouton utilise le behaviorSubject pour mettre a jour la liste et ce dernier "propage" la mise à jour aux composants abonnés 
## Async | 
-  Async | permet de faire une operation sans bloquer le processus et en affichant un placeholder en attendant

## Séquence 3 — Lazy Loading & Composants dynamiques

- Lazzy loading : charger le chemin des composants plutot que les composants eux meme : site moins lourd, ne charge que le nécéssaire.
- - Dans app.routes.ts on référence les chemins vers les routes.ts des differents composants via loadChildren
- - Ces routes.ts references les composants de leur feature ou autre, mais peuvent aussi référencer d'autres routes.
- Structure avec /features : Permet de mettre ses pages dans le meme dossier pour ne pas avoir à les chercher. 
- - La logique peut se trouver dans d'autres dossier, par exemple ici la logique est dans core/services
- Composants dynamiques : inserer un composant conditionnellement / selon une action. Ici, quand on choisis d'highlight

- ViewContainerRef & ViewChild :
- - le lien entre le composant et la fonction est fait au travers du container initialisé sur ViewContainerRef a partir duquel la méthode CreateComponent est utilisé
- - ViewChild créé le #object que l'on appelle dans le HTML pour indiqué ou doit etre le composant créé dynamiquement.


## Séquence 4 — Tests Unitaires Angular

        ### 📚 Ce que j'ai appris

        #### 1. Pourquoi tester ?
        - Les tests permettent de valider la bonne fonction du code
        - Sans tests, le risque est d'avoir un code inconstant / de perdre des fonctionnalités entre les differentes versions
        - Exemple concret : Sans tests, un changement peut affecter une autre fonction sans relever d'erreur, la rendant juste inneficace


        #### 2. Outils utilisés
        - **Jasmine** : j'utilise vitest (angular 21) mais le principe reste le meme, c'est la bibliotèque qui permet de construire les tests et leur environement
        - **Karma** : j'utilise @angular/build, donc les tests sont aussi run par vitest
        - **TestBed** : permet de controler l'environement et de creer une sandbox pour tester different problemes

        #### 3. Concepts clés maîtrisés
        - **AAA Pattern** : Arrange, Act, Assert
        - **Mocks** : donnée "fausse" de test. Parfois incomplete (dummies) permet de creer le contexte pour les tests
        - **Spies** : tester quel fonctions sont appeler, les differentes interactions entre les fonctions etc.
        - **Fixture & detectChanges()** : cela permet de controler l'environement (testBed) et donc de poser un context de test, et de le changer pour tester les reactions des fonctions

        #### 4. Types de tests pratiqués
        - ✅ Test d'une classe simple (sans Angular)
        - ✅ Test d'un service
        - ✅ Test d'un composant avec TestBed
        - ✅ Test des @Input
        - ✅ Test des @Output
        - ✅ Test du DOM

        #### 5. Erreurs courantes rencontrées
        - Oublier `detectChanges()` : pas de changement dans le DOM si pas demander donc le test ne sera pas pertinant
        - Tests qui dépendent les uns des autres : uniquement si c'est nécéssaire, sinon preferer des tests avec plus de contexte pour bien cerner la fonctionnalité.

        #### 6. Commandes importantes
        ```bash
        ng test                    # Lancer les tests
        ng test -- --coverage    # Avec rapport de couverture avec vitest besoin du package @vitest/coverage-v8
        ```

        #### 7. Code Coverage atteint
        - Objectif : 70-80%
        - Mon résultat : **XX%** sur TaskBoard Pro

        #### 8. Difficultés rencontrées et solutions
        | Difficulté | Solution trouvée |
        |------------|------------------|
        | [Exemple] | [Comment j'ai résolu] |
        |pas de jasmine en angular 21 | protocoles de conversion vers vitest (très simple) trouvé en ligne |
        |input/output ne se synchronisent pas|

        #### 9. Points à approfondir
        - [ ] Tests d'intégration
        - [ ] Tests E2E avec Cypress
        - [ ] Mocking avancé pour HttpClient
        - [ ] Tests de services asynchrones

        ### 🎯 Projet : Tests TaskBoard Pro

        #### Tests implémentés
        - [x] TaskService
        - ✅ `addTask()`
        - ✅ `deleteTask()`
        - ✅ `getTasks()`
        - [x] TaskHighlight Component
        - ✅ Affichage du titre
        - ✅ @Input title
        - ✅ Rendu dans le DOM

        #### Résultats
        Test Files  8 passed (8)
            Tests  18 passed (18)
        Start at  16:21:53
        Duration  2.94s (transform 613ms, setup 6.24s, import 1.21s, tests 801ms, environment 10.67s)
         % Coverage report from v8
        -----------------------------------|---------|----------|---------|---------|-------------------
        File                               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
        -----------------------------------|---------|----------|---------|---------|-------------------
        All files                          |   70.22 |       80 |   45.45 |   72.64 |                  
        app                               |     100 |    85.71 |     100 |     100 |                  
        app.html                         |     100 |      100 |     100 |     100 |                  
        app.ts                           |     100 |    85.71 |     100 |     100 | 12               
        app/core/services                 |      75 |     62.5 |   72.72 |      75 |                  
        task.ts                          |      75 |     62.5 |   72.72 |      75 | 37,63-66         
        app/features/about                |     100 |      100 |     100 |     100 |                  
        about.html                       |     100 |      100 |     100 |     100 |                  
        about.ts                         |     100 |      100 |     100 |     100 |                  
        app/features/tasks/task-edit      |   76.47 |    71.42 |   33.33 |      80 |                  
        task-edit.html                   |   81.81 |      100 |       0 |     100 |                  
        task-edit.ts                     |   66.66 |    71.42 |      50 |      60 | 15-16            
        app/features/tasks/task-highlight |     100 |      100 |     100 |     100 |                  
        task-highlight.ts                |     100 |      100 |     100 |     100 |                  
        app/features/tasks/tasks-page     |   54.73 |    61.53 |   18.75 |      60 |                  
        tasks-page.html                  |    58.2 |       50 |       0 |   72.41 | 4-8,38-40,46     
        tasks-page.ts                    |   46.42 |    71.42 |      30 |   46.15 | 28-30,47-76       
        app/header                        |     100 |      100 |     100 |     100 |                  
        header.html                      |     100 |      100 |     100 |     100 |                  
        header.ts                        |     100 |      100 |     100 |     100 |                  
        app/home                          |     100 |      100 |     100 |     100 |                  
        home.html                        |     100 |      100 |     100 |     100 |                  
        home.ts                          |     100 |      100 |     100 |     100 |                  
        -----------------------------------|---------|----------|---------|---------|-----------

        ### 💡 Réflexion personnelle
        Ne pas se limiter aux ressources fournit, c'est une bonne base pour aller regarder ce qui fonctionne/ ne fonctionne pas plus loin.

        ### 📚 Ressources consultées
        - [Angular Testing Guide](https://angular.io/guide/testing)
        - [Notes de cours - Séquence 4 et 3]