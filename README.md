README
======

Template de Rails para el Hands on de Angular de la clase bonus de Diseño de Sistemas - FRBA - UTN

* Precondicion: Tener instalado todo el entorno para correr un proyecto Rails.

* Clonar el proyecto:
```
$ git clone git@github.com:dds-utn/angular-dds-hands-on.git
```

* Entrar a la carpeta recién clonada

```
$ cd angular-dds-hands-on
```

* Correr: 

```
$ bundle install
```

* Luego preparar la base de datos local

```
$ rake db:create db:migrate db:seed
```

* Levantar el server

```
$ rails s
```

* Ingresar a la url [localhost:3000](http://localhost:3000)


**Para correr los tests:**
* Levantar el server de test
```
$ rails jasmine
```

* Ingresar a la url [localhost:8888](http://localhost:8888)
