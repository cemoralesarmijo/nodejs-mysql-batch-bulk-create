# nodejs-mysql-batch-bulk-create
node js project to batch process data into mysql and bulk create registers

## Prerequisites

Environments that should work include:
 - Docker and docker-compose using distribution supported with your operating system 
 - NodeJs >=v12 LTS [(more info to easy install)](https://docs.docker.com/engine/install/ubuntu/)
 - MySQL Client



## Enviroment config

Create a .env file in the root of your project and insert your key/value pairs in the following format of KEY=VALUE:

```sh
DB_HOSTNAME         = "127.0.0.1"
DB_PORT             = "3306"
MYSQL_USER          = "user"
MYSQL_DATABASE      = "dbname"
MYSQL_PASSWORD      = "password"
MYSQL_ROOT_PASSWORD = "password"
```


 ## Installation


Clone repo

    $ git clone git@github.com:cemoralesarmijo/nodejs-mysql-batch-bulk-create.git

install dependencies

    $ npm install

create docker container mysql

    $ sudo docker-compose up -d

## Mysql stuff

You must execute the script.sql into your mysql client, doing this, you will have available the table that we will use for this example

## RUN

    $ npm start

## gratitude

* Thanks to my friend Alexis Saéz for contributing ideas and also reviews

* https://simplemaps.com/data/world-cities for the csv *worldcities.csv* file

## Next goal

Create an additional module, to be able to read the same csv file, but this time read it from storage using the NodeJS streams. The storage can be from an amazon, azure or the cloud that provides a storage with a library for node js
Doing the above may mean modifying the structure of the project to make it more modular and scalable and to be able in the future to add more modules related to different approaches.


## One more thing

If you want to contribute to this project and improve it, give ideas or add more things to it, you are welcome


