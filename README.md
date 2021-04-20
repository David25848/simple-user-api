# Simple User API

With this app you can realize a simple user register process, look the list of registered users and the single user view o user profile

## Details
RVM Version 2.7.2

Rails Version 6.0.3

## 1. Clone de repo

## 2. Create the database

```bash
rails db:create
```
## 2. Migrate the database

```bash
rails db:migrate
```
## 3 Apply seeds for demo data

```bash
rails db:seeds
```

After that you can use de app in the browser of your choice putting the following url http://localhost:3000/.

## Frontend routes

Home: http://localhost:3000/

New User: http://localhost:3000/new

User: http://localhost:3000/users/:user_id

## API endpoints

Users List: GET /api/v1/users

User create: POST /api/v1/users/new

User show: GET /api/v1/users/:id
