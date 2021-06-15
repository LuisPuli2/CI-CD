# Serverless template

  
Template designed for a lambda function

## Getting started
  

- Copy the `.env.example` file to new `.env` file

`cp .env.example .env`

  

- Install proyect dependencies

`yarn`

- Modify the `org` field on `serverless.yaml` file with your own
```yaml
service: serverless-test
app: serverless-test
org: <org>
```
- Run the project

`yarn dev`

It will run the `sls-offline` plugin in port `3000`
