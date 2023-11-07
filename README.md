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

Commandes gestion des branches 

Pour créer une branche 

```
git branch nom_de_la_nouvelle_branche
```

Pour basculer sur la nouvelle branche 

```
git checkout nom_de_la_nouvelle_branche
```

Pour supprimer une branche en local 

```
git branch -d nom_de_la_branche
```

Pour supprimer une branche qui est deja sur le git

```
git push origin --delete nom_de_la_branche
```

Pour push une branche

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
Provisioning 

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

# Lab 7

Ce guide présente le processus de configuration et de gestion d'un environnement Kubernetes en utilisant Minikube et kubectl.

## Partie 1 : Installation

Avant de commencer, nous devons vérifier que Docker est bien installé, car il est nécessaire pour utiliser Minikube.

### Lancement

Pour lancer Minikube, exécutez la commande suivante :

```bash
minikube start
```

## Partie 2 : Création d'un Pod

Créez un nouveau pod en utilisant la commande ci-dessous :

```bash 
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

Pour lister tous les pods en cours d'exécution :

```bash
kubectl get pods
```

Pour accéder à l'application à l'intérieur de la VM Minikube, nous pouvons utiliser :

```bash 
curl http://localhost:8080
```

Pour accéder à l'application depuis notre machine locale, nous pouvons utiliser la commande suivante:

```bash
minikube service kubernetes-bootcamp --url
```

## Partie 3 : Exposition du Déploiement

Pour trouver le nom des déploiements :

```bash
kubectl get deployments
```

Pour exposer le déploiement en utilisant le nom du déploiement :

```bash
kubectl expose deployment kubernetes-bootcamp --type="NodePort" --port 8080
```

Pour lister les services pour trouver le port attribué :

```bash
kubectl get services
```

Récupérez l'IP de Minikube :

```bash
minikube ip
```

Lancez automatiquement l'application dans un navigateur :

```bash
minikube service $SERVICE_NAME
```

## Partie 4 : Mise à l'échelle du Déploiement

Pour augmenter le déploiement afin d'avoir 5 répliques :

```bash
kubectl scale deployments/kubernetes-bootcamp --replicas=5
```

Vérifiez que tous les pods sont prêts (devrait être 1/1) :

```bash 
kubectl get pods
```

Pour réduire à 2 répliques :

```bash 
kubectl scale deployments/kubernetes-bootcamp --replicas=2
```

## Partie 5 : Mise à jour de l'Application

Pour mettre à jour l'image de l'application :

```bash
kubectl set image deployments/$DEPLOYMENT_NAME kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2
```

Vous devriez remarquer une mise à jour sur la page web en v2. Pour mettre à jour vers une version plus récente :

```bash
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v3
```

Pour lister les pods actuels et repérer les erreurs :

```bash
kubectl get pods
```

Pour annuler un déploiement en cas d'erreur :

```bash
kubectl rollout undo deployments/kubernetes-bootcamp
```

Pour restaurer le service à l'image initiale de la Partie 2 :

```bash 
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v1
```

##Lab 8

## Partie 1 : emptyDir

installation : 

```bash
winget install minikube
```

Modification du fichier deployment.yml :

On ajoute les volumes au fichier 

```c
volumes:

```

```c
volumeMounts:

```

Pour run le pod : 

```bash
kubectl apply -f lab/emptyDir/deployment.yml
```

Lister les pods : 

```bash 
kubectl get pods
```

Pour entrer dans le conteneur : 

```bash 
kubectl exec -it <POD_NAME> bash
```

Pour run : 

```bash 
curl localhost
```

## Partie 2 : hostPath

Pour run le pod (hostPath): 

```bash
kubectl apply -f lab/hostPath/deployment.yml
```

On entre dans la VM avec ```minikube ssh```
 




