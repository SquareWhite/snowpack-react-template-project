# Snowpack + React Template Project
- Build tool: `Snowpack`
- Framework: `React`
- UI library: `Material UI`
- Formatting: `prettier`, `eslint`
- Pre-commit hooks: `husky`
- Deploy: `docker`

Rename all occurrences of `project-name` before using.

## Run locally
```
npm i
npm run start
```

## Run in docker
```
docker build . -t project-name
docker run -p 80:80 project-name
```

## Basic Auth
To enable auth add `.htpasswd` file and uncomment parts of docker and nginx config, 
that are marked with `# Basic Auth` comment.
