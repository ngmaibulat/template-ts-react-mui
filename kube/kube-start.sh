minikube start --driver=hyperkit --memory=2g

minikube addons enable ingress

kubectl get pods -n ingress-nginx
