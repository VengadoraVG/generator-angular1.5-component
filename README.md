Aún no es estable, pero para usarlo...

    yo angular1.5-component

Con la llegada de angular 1.5, los componentes han cambiado mucho o.o, este módulo de yeoman genera un scaffolding para un nuevo componente! lo único que necesita es el nombre en kebab-case :O

Aún no inyecta los archivos .js en el index n.n'

# developing notes...

ok, entonces el scaffolding con yeoman, básicamente hace esto:

## prompt input

Pregunta por el nombre del componente, rogando porque esté en kebab-case, lo vamos a usar en todas partes!

    name

TODO: a veces el prompt se "ensucia" con output del código de yeoman... investigar cómo hacer para obtener un prompt limpio. Aunque este problema aún no se está mostrando, podría llegar a suceder más adelante...

## scaffolding

Dentro de `app/`, crea una carpeta llamada `name`.

### template

Dentro de la carpeta `app/name`, crea un archivo llamado `name.template.html` en blanco.

### module

Dentro de `app/name`, crea un archivo llamado `name.module.js`, su contenido es:

    angular.module(camelCaseName, []);
    // camel case name es el nombre en camel case, duh!

### component

Dentro de `app/name`, crea un archivo llamado `name.component.js`, su contenido es

    angular.
      module('camelCaseName').component('camelCaseName'), {
        templateUrl: 'name/name.template.html',
        controller: function camelCaseNameController($scope) {
        }
      });

## sauce

Creando un componente, según el tutorial de angular :O

https://docs.angularjs.org/tutorial/step_03

Se usó esprima y escodegen para modificar los archivos :)
