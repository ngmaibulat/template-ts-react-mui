### Build Docker Container

```bash
docker build . -t yourname/web
docker images

docker run -d -p 3000:3000 --name web01 yourname/web

docker ps
docker logs web01 -f
docker stop web01
```
