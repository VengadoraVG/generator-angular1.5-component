** estamos en desarrollo!!! esta cosa está muy lejos de estar completada :S **

Con la llegada de angular 1.5, los componentes han cambiado mucho o.o, este módulo de yeoman generará un scaffolding para un nuevo componente! lo único que necesitará será el nombre en kebab-case :O

# developing notes...

ok, entonces el scaffolding con yeoman debería ir así:

## prompt input

debería preguntar por el nombre del componente, y rogar porque esté en kebab-case, lo vamos a usar en todas partes!

    name

TODO: a veces el prompt se "ensucia" con output del código de yeoman... investigar cómo hacer para obtener un prompt limpio.

## scaffolding

Crear una carpeta llamada `name`.

### template

Dentro, crear un archivo llamado `name.template.html` en blanco. Tal vez podríamos ponerle un comentario indicando que el contexto está en $ctrl...

### module

Dentro, crear un archivo llamado `name.module.js`, su contenido debe ser

    angular.module(CamelFromKebab(name), []);

TODO: CamelFromKebab(str) algoritmo para convertir kebab-case a camel-case

### component

Dentro, crear un archivo llamado `name.component.js`, su contenido debe ser

    angular.
      module(CamelFromKebab(name)).
      component(CamelFromKebab(name), {
        
        templateUrl: 'name/name.template.html',
        controller: function CamelFromKebab(name)Controller($scope) {
          // this.data = "hola!";
        }

      });

# sauce

Creando un componente, según el tutorial de angular :O

https://docs.angularjs.org/tutorial/step_03
