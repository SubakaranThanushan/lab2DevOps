# labDevOps
## Objectif :

Dans ce TP, nous devons donc apprendre les commandes qui permettent de partager les dossiers dans Git.

## Commande : 


Tout utilisateur doit obtenir les dossiers se trouvant dans Git.

Url se trouve dans : ![Capture d’écran 2023-09-12 à 13.40.25.png](Capture%20d%E2%80%99%C3%A9cran%202023-09-12%20%C3%A0%2013.40.25.png)
```
git clone url
```
Les fichiers seront donc importés dans votre machine.
Nous pouvons également sauvegarder les fichiers en utilisant les commandes :
```
git add fichier 
git commit -m"commentaire"
git push
```

Nous pouvons également récupérer les modifications qui ont été faites avec la commande :
```
git pull
```
# Lab 2 

## Contributeurs

SUBAKARAN Thanushan 
KEMGANG Harold
VICTOR Scharan

## Commandes gestion des branches 

## Pour créer une branche 

git branch nom_de_la_nouvelle_branche 

## Pour basculer sur la nouvelle branche 

git checkout nom_de_la_nouvelle_branche

## Pour supprimer une branche en local 

git branch -d nom_de_la_branche

## Pour supprimer une branche qui est deja sur le git

git push origin --delete nom_de_la_branche

## Pour push une branche

git push --set-upstream origin nom_de_la_branche
