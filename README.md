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

# Laboratoire 7

Ce guide présente le processus de configuration et de gestion d'un environnement Kubernetes en utilisant Minikube et kubectl.

## Partie 1 : Installation

Avant de commencer, assurez-vous que Docker est installé, car il est nécessaire pour utiliser Minikube.

### Lancement

Pour lancer Minikube, exécutez la commande suivante :

```minikube start```

## Partie 2 : Création d'un Pod

Créez un nouveau pod en utilisant la commande ci-dessous :

```kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1```

Pour lister tous les pods en cours d'exécution :

```kubectl get pods```

Pour accéder à l'application à l'intérieur de la VM Minikube, vous pouvez utiliser :

```curl http://localhost:8080```

Pour accéder à l'application depuis votre machine locale, utilisez la commande suivante qui ouvrira une fenêtre de navigateur :

```minikube service kubernetes-bootcamp --url```

## Partie 3 : Exposition du Déploiement

Pour trouver le nom des déploiements :

```kubectl get deployments```

Pour exposer le déploiement en utilisant le nom du déploiement :

```kubectl expose deployment kubernetes-bootcamp --type="NodePort" --port 8080```

Listez les services pour trouver le port attribué :

```kubectl get services```

Récupérez l'IP de Minikube :

```minikube ip```

Lancez automatiquement l'application dans un navigateur :

```minikube service $SERVICE_NAME```


## Partie 4 : Mise à l'échelle du Déploiement

Pour augmenter le déploiement afin d'avoir 5 répliques :

```kubectl scale deployments/kubernetes-bootcamp --replicas=5```

Vérifiez que tous les pods sont prêts (devrait être 1/1) :

```kubectl get pods```

Pour réduire à 2 répliques :

```kubectl scale deployments/kubernetes-bootcamp --replicas=2```

## Partie 5 : Mise à jour de l'Application

Pour mettre à jour l'image de l'application :

```kubectl set image deployments/$DEPLOYMENT_NAME kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2```

Vous devriez remarquer une mise à jour sur la page web en v2. Pour mettre à jour vers une version plus récente :

```kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v3```


Pour lister les pods actuels et repérer les erreurs :

```kubectl get pods```


Pour annuler un déploiement en cas d'erreur :

```kubectl rollout undo deployments/kubernetes-bootcamp```


Pour restaurer le service à l'image initiale de la Partie 2 :

```kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v1```




