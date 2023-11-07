```markdown
# Laboratoire

Orchestration de conteneurs avec Kubernetes

## Objectifs

1. Installer Minikube
2. Apprendre à utiliser les commandes `kubectl`
3. Apprendre à exposer un service Kubernetes à l'extérieur
4. Apprendre à mettre à l'échelle une déployment Kubernetes
5. Exécuter une application à plusieurs pods dans Kubernetes
6. Déployer une application à l'aide de fichiers de configuration YAML

## 1. Installer Minikube

[Installer Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) en suivant les instructions en fonction de votre système d'exploitation.

Démarrer Minikube avec :
```bash
minikube start
```

Vérifier que tout est en ordre avec :
```bash
minikube status
```

## 2. Apprendre à utiliser les commandes `kubectl`

1. Ouvrir un terminal

2. Exécuter un `deployment` avec un `pod` en utilisant la commande suivante :
   ```bash
   kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
   ```
   `gcr.io/google-samples/kubernetes-bootcamp:v1` est une image Docker d'une application web Node.js de base.

3. Listez tous les pods en cours d'exécution avec :
   ```bash
   kubectl get pods
   ```
   Attendez que l'état de préparation du pod atteigne 1/1 et enregistrez le nom du pod quelque part.

4. Affichez les journaux du pod avec :
   ```bash
   kubectl logs $POD_NAME
   ```

5. Exécutez une commande à l'intérieur du pod avec :
   ```bash
   kubectl exec $POD_NAME -- cat /etc/os-release
   ```

6. Ouvrez un shell à l'intérieur du pod avec :
   ```bash
   kubectl exec -ti $POD_NAME bash
   ```

7. Liste le contenu du répertoire dans lequel vous vous trouvez et essayez de trouver le fichier source JavaScript.

8. Assurez-vous que l'application web répond à l'intérieur du conteneur en l'interrogeant avec `curl`.

   > **Conseil.** Le port sur lequel l'application répond est défini dans le fichier JavaScript `/server.js`.

9. Pouvez-vous interroger l'application web à l'extérieur du pod (depuis votre machine locale) ?

## 3. Apprendre à exposer un service Kubernetes à l'extérieur

1. Exposez le déploiement que vous avez créé dans la première partie du laboratoire avec :
   ```bash
   kubectl expose deployments/$DEPLOYMENT_NAME --type="NodePort" --port $PORT_NUMBER
   ```

   > **Conseil.** Vous devez remplacer `$DEPLOYMENT_NAME` par le nom réel du `deployment` ainsi que `$PORT_NUMBER`.

2. Découvrez sur quel port le service a été attaché avec :
   ```bash
   kubectl get services
   ```

3. Obtenez l'adresse IP de votre machine virtuelle Minikube avec :
   ```bash
   minikube ip
   ```

4. Utilisant les réponses aux questions 2 et 3, ouvrez votre navigateur web et essayez d'accéder à l'application web.

> **Note !** Si vous utilisez le pilote Docker dans Minikube, vous devez créer un tunnel vers le nœud du cluster (qui s'exécute en tant que conteneur Docker). Exécutez la commande (remplacez `$SERVICE_NAME` par le nom de votre service) :

```bash
minikube service $SERVICE_NAME
```

## 4. Apprendre à mettre à l'échelle un déploiement Kubernetes

1. Mettez à l'échelle votre déploiement pour avoir un total de 5 pods avec :
   ```bash
   kubectl scale deployments/kubernetes-bootcamp --replicas=5
   ```

2. Assurez-vous que vous avez 5 pods en cours d'exécution en utilisant l'une des commandes que nous avons vues dans la partie 2 du laboratoire. Quelle commande avez-vous utilisée ?

3. Ouvrez à nouveau le service exposé dans votre navigateur web. Forcez le rafraîchissement plusieurs fois avec `CTRL+F5`. Qu'est-ce qui se passe ? Pourquoi ?

4. Réduisez à nouveau votre déploiement à 2 pods et confirmez que les 3 autres ne sont plus en cours d'exécution.

## 5. Exécution d'une application à plusieurs pods dans Kubernetes

1. Préparez-vous à appuyer sur `CTRL+F5` dans votre navigateur plusieurs fois juste après avoir lancé la commande suivante.

2. Mettez à jour l'image Docker utilisée par le déploiement avec :
   ```bash
   kubectl set image deployments/$DEPLOYMENT_NAME kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2
   ```

3. Que s'est-il passé sur la page web ?

4. Mettez à jour à nouveau l'image Docker utilisée par le déploiement en définissant l'image sur `jocatalin/kubernetes-bootcamp:v3`.

5. Liste de tous les pods en cours d'exécution, que se passe-t-il ici ?

6. Annulez l'opération précédente en exécutant :
   ```bash
   kubectl rollout undo deployments/kubernetes-bootcamp
   ```

7. Revenez en arrière sur l'image choisie pour le service dans la partie 2 du laboratoire.

## 6. Déployer une application à l'aide de fichiers de configuration YAML

1. Nettoyez ce que vous avez fait dans la partie précédente avec :
   ```bash
   kubectl delete service $SERVICE_NAME
   kubectl delete deployment $DEPLOYMENT_NAME
   ```

2. En utilisant la [documentation sur le déploiement](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), remplissez l'espace vide (`À COMPLÉTER #1`) dans [`./lab/deployment.yaml`](./lab/deployment.yaml) pour définir un déploiement basé sur celui que nous avons exécuté dans la partie 2.

3. Une fois que vous avez complété le fichier, exécutez :
   ```bash
   kubectl apply -f deployment.yaml
   ```
   Les pods sont-ils en cours d'exécution ?

4. En utilisant la [documentation sur le service](https://kubernetes.io/docs/concepts/services-networking/service/), remplissez l'espace vide dans [`./lab/service.yaml`](./lab/service.yaml).



5. Une fois que vous avez complété le fichier, exécutez :
   ```bash
   kubectl apply -f service.yaml
   ```
   Pouvez-vous accéder au service depuis votre navigateur web ?

6. Remplissez `À COMPLÉTER #2` à l'intérieur de [`./lab/deployment.yaml`](./lab/deployment.yaml) pour créer 3 répliques de votre application.

7. Une fois que vous avez complété le fichier, exécutez :
   ```bash
   kubectl apply -f deployment.yaml
   ```
   Forcez le rafraîchissement dans le navigateur plusieurs fois. Accédez-vous à différentes répliques ?
```

Vous pouvez utiliser ce fichier Markdown comme instructions pour votre laboratoire. Assurez-vous de remplacer `$DEPLOYMENT_NAME`, `$PORT_NUMBER`, `$POD_NAME` et d'autres espaces réservés par des valeurs réelles selon les besoins dans votre environnement.