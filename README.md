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

Install the project dependencies
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
Once you have created the database and configured the environment variables, you can use Knex ([knexjs.org](knexjs.org)) to run migrations and seed the table with data. The easiest way is to just install Knex globally via NPM:

```bash
$ npm install -g knex
```

Once you have Knex installed, just run the migration and seed commands (remember to set the environment flag to the desired environment).

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

> **NOTE**
>
> If the `dist/dev.bundle.js` file doesn't exist (such as with a fresh clone of the repo), you may get an error when trying to launch the dev server. If that happens, simply run the init command first to build the file and then launch the dev server.
> ```bash
> $ npm run init
> $ npm run dev
> ```

### Production
To run the application in production mode, first build the production JS bundle, the launch the server in production mode:

```bash
$ npm run build
$ npm run start
```
The production server runs as a daemon. To stop the production server, run `npm run stop` from the project root.


## A word on setting up the server

This repository includes an Ansible playbook for provisioning the API server. While this isn't strictly necessary (you can absolutely install and configure things by hand), it can be helpful in setting up a remote server and ensuring it has the same versions of software, etc. If you want to use Ansible to provision a remote server (e.g. an AWS EC2 instance), follow the steps below:

### Make sure you have Ansible installed on your local machine
https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html

### Configure the hosts file
Edit the `/ansible/inventory/aws/hosts` file in this repo with the following changes:
* Replace `<IP>` with the public IP address of the server you want to provision
* By default, the Ansible playbook is set to use Python 3 as the remote interpreter. If Python 3 is not available on your remote server, remove `ansible_python_interpreter=/usr/bin/python3` from the `/ansible/inventory/aws/hosts` file to use the default Python 2

### Run the Ansible Playbook
Run the following command on your local machine from the root of the repository:
```
ansible-playbook ansible/aws.yml -i ansible/inventory/aws/hosts -u ubuntu --private-key=~/Desktop/whisky-api.pem
```

> The command above is for an Ubuntu instance running in AWS with a keypair PEM file called `whisky-api.pem`. You may need to update the values of the `-u` and `--private-key` flags depending on your server's user and the location of your PEM file. Just be aware that the user will need to have `sudo` permissions on the server.

### Watch the magic happen!