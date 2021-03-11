# whisky-api
This project is a simple API used for building a full stack app. The API is a simple NodeJS app which connects to a database (by default, the api is configured to connect to a MySQL database).

## Dependencies

* To run this project locally, you'll need to have Node JS installed ([nodejs.org](nodejs.org))
* If you want to run a local version of MySQL, you'll need to have MySQL server installed. If you're on a Mac, the easiest way is to just run `brew install mysql`

## Setup

### Clone the repo:
```bash
$ git clone git@github.com:ponysmith/whisky-api.git
```

### Install dependencies
```bash
$ cd <project_root>
$ npm install
```

### Create Database
You'll need to manually create the database. You can do this by connecting to your chosen MySQL instance:
```bash
$ mysql -h <host> -u <user> -p
```

and creating the database:
```sql
mysql> create database <dbname>;
```

### Configure environment
Copy the `.env.sample` file in the root directory and create `.env.development` and `.env.production` files. Supply the database connection information in the files to allow the application to connect to the database(s). Make sure to use the same database name as the one you created above.

### Run migrations and seeds
Once you have created the database and configured the environment variables, you can use Knex ([knexjs.org](knexjs.org)) to run migrations and seed the table with data. Set the environment flag to the desired environment.

```bash
$ knex migrate:latest --env development
$ knex seed:run --env development
```

## Start the application

### Development 
To run the application in dev mode with live reload:

```bash
$ npm run dev
```

To stop the server, simply use `ctrl+c` in the terminal where the server is running.

### Production
To run the application in production mode, first build the production JS bundle, the launch the server in production mode:

```bash
$ npm run build
$ npm run start
```
The production server runs as a daemon. To stop the production server, run `npm run stop` from the project root.