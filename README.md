# labDevOps


### Contributeurs

SUBAKARAN Thanushan 
KEMGANG Harold
VICTOR Scharan

# Lab 1
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

### Commandes gestion des branches 

### Pour créer une branche 

```
git branch nom_de_la_nouvelle_branche
```

### Pour basculer sur la nouvelle branche 

```
git checkout nom_de_la_nouvelle_branche
```

### Pour supprimer une branche en local 

```
git branch -d nom_de_la_branche
```

### Pour supprimer une branche qui est deja sur le git

```
git push origin --delete nom_de_la_branche
```

### Pour push une branche

```
git push --set-upstream origin nom_de_la_branche
```

# Lab 5

## Installation 

VirtualBox 
Vagrant
centos/7 sur la Virtualbox

## Partie 1 

Création de la machine virtuelle :

```bash
vagrant up
```
Entrer dans la VM avec SSH : 

```bash
vagrant ssh
```
### Provisioning 

On utilise la commande : 

```bash
vagrant provision
```
Cette commande permet de relancer le provisonnement de la machine virtuelle.
On l'utilise quand on fait des modifications notamment dans le "Vagrantfile", elle évite de rédemarrer la machine. 

## Partie 2
# Lab 6

## Installation 

Installer Docker et se créer un compte
Tester l'installation avec la commande 

```bash 
docker run hello-world
```

## Docker

#### Build Docker 

```bash
docker build -t hello-world-docker .
```

"-t" siginfie tag, le nom que l'on veut donner au fichier ici, nous avons choisis "hello-world-docker"

#### Run Docker 

```bash
docker run -p 12345:8080 -d hello-world-docker
```

-p : pour le port sur la machine locale 
-d : arriere plan 

#### Stop Docker 

```bash 
docker stop <CONTAINER_ID>
```

<CONTAINER_ID> : nom du container sur docker desktop

```bash
docker images
```

Cette commande permet de voir le nom des images disponible

Pour se connecter a Docker depuis le terminal 

```bash 
docker login
```

## Docker Compose 

```bash
docker-compose up
```





