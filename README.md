# Documentation

## Prereq

Install wasp

```shell
curl -sSL https://get.wasp-lang.dev/installer.sh | sh
```

# Start 

```shell
podman run --name wasp-dev-db-OpenSaaS-a3167729ef --rm --publish 5432:5432 -v wasp-dev-db-OpenSaaS-a3167729ef:/var/lib/postgresql/data --env POSTGRES_PASSWORD=postgresWaspDevPass --env POSTGRES_USER=postgresWaspDevUser --env POSTGRES_DB=OpenSaaS-a3167729ef postgres

wasp start
```
