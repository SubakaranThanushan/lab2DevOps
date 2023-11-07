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
