# Guide de déploiement sur GitHub Pages

## Étapes pour héberger l'application sur GitHub Pages

### 1. Créer un repository GitHub

1. Va sur [GitHub](https://github.com) et crée un nouveau repository
2. Nomme-le `taskboard-pro` (ou un autre nom si tu préfères)
3. **Ne coche PAS** "Initialize with README"

### 2. Initialiser Git et pousser le code

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit"

# Ajouter le remote GitHub (remplace USERNAME par ton nom d'utilisateur)
git remote add origin https://github.com/USERNAME/taskboard-pro.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

### 3. Activer GitHub Pages

1. Va dans les **Settings** de ton repository GitHub
2. Dans le menu de gauche, clique sur **Pages**
3. Sous **Source**, sélectionne :
   - **Source** : `GitHub Actions`
4. Sauvegarde

### 4. Ajuster le baseHref (si nécessaire)

Si ton repository GitHub a un nom différent de `taskboard-pro`, modifie le script dans `package.json` :

```json
"build:github": "ng build --configuration=production --base-href=/NOM-DE-TON-REPO/"
```

### 5. Déploiement automatique

Le workflow GitHub Actions se déclenchera automatiquement :
- À chaque push sur `main` ou `master`
- L'application sera disponible sur : `https://USERNAME.github.io/taskboard-pro/`

### 6. Déploiement manuel (optionnel)

Tu peux aussi déclencher le déploiement manuellement :
1. Va dans l'onglet **Actions** de ton repository
2. Sélectionne le workflow "Deploy to GitHub Pages"
3. Clique sur **Run workflow**

## Vérification

Après le premier déploiement (quelques minutes), ton application sera accessible sur :
`https://USERNAME.github.io/taskboard-pro/`

## Notes importantes

- Le premier déploiement peut prendre 5-10 minutes
- Les déploiements suivants sont plus rapides
- Si tu changes le nom du repository, n'oublie pas de mettre à jour le `base-href` dans `package.json`
