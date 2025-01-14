# Documentation

## Prereq

Install wasp

```shell
curl -sSL https://get.wasp-lang.dev/installer.sh | sh
```

# Wasp Build backend 
```shell
cd ./app && wasp build
cd .wasp/build/
```
Replace in Dockerfile EXPOSE $PORT by EXPOSE 3000

```shell
podman build . -t quay.io/florian_even/opensaas-backend:latest
podman push quay.io/florian_even/opensaas-backend:latest
```

# Wasp Build frontend 

```shell
cd ./app/.wasp/build/web-app
npm install
REACT_APP_API_URL=http://localhost:3001 npm run build
```

# Build image 

```
# Utilise l'image officielle NGINX
FROM nginx:alpine AS web-app-production

# Définit la variable d'environnement pour le port
ENV SERVER_PORT=3000

# Copie les fichiers de construction dans le répertoire attendu par NGINX
COPY ./build /usr/share/nginx/html

# Expose le port configuré
EXPOSE $SERVER_PORT
```

```shell
podman build . -t quay.io/florian_even/opensaas-frontend:latest
podman push quay.io/florian_even/opensaas-frontend:latest
```




## dev 

```shell
podman run -it  --name wasp-dev-db-OpenSaaS-a3167729ef --rm --publish 5432:5432 -v wasp-dev-db-OpenSaaS-a3167729ef:/var/lib/postgresql/data --env POSTGRES_PASSWORD=postgresWaspDevPass --env POSTGRES_USER=postgresWaspDevUser --env POSTGRES_DB=OpenSaaS-a3167729ef postgres
wasp start
```


# Start opensaas in podman environnement

```shell
podman pod create --name mypod -p 5432:5432 -p 3001:3001 -p 3000:80

podman run -d \
  --name db \
  --pod mypod \
  -e POSTGRES_USER=wordpress \
  -e POSTGRES_PASSWORD=somewordpress \
  -e POSTGRES_DB=wordpress \
  -v pg_data:/var/lib/postgresql/data \
  postgres:13

cd app



podman run -it --pod mypod --env-file /Users/florian/Desktop/dev/triathlon/opensaas/rueil-malmaison-triathlon/app/.env.server quay.io/florian_even/opensaas-rmt

podman  run -it  quay.io/florian_even/opensaas-frontend

```

# Start opensaas in docker environnement

```shell
docker-compose up -d
```


#

```shell
podman stop -a 
podman rm -a
```
