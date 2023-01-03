eval $(minikube -p minikube docker-env)

docker build . -t aibulat/web
