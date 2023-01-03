
kubectl apply -f kube/deploy.yaml

kubectl apply -f kube/lb-service.yaml

# kubectl run web01 --image=aibulat/web

# kubectl describe pod web01

# kubectl port-forward  web-deployment-66fbc6bb9f-4m7sj   3000:3000

# kubectl expose deployment web --type=NodePort --port=8080
