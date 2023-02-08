# AppSoftPymes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Mock de datos

En la ruta src/mock se ubica el archivo softPymes.json, el cual nos sirve para simular la API con la cual realizaremos el consumo de datos de usuario y cuentas bancarias de la aplicación. Para poder simular este backend usaremos json-server y para ello seguiremos los siguientes pasos:

1. Ejecutamos el comando npm install -g json-server
2. Desde la ubicación del archivo .json (src/mock) abrimos una consola y ejecutamos el comando json-server --watch softPymes.json, por defecto nuestro archivo .json correra en el puerto 3000, de manera que accederemos a http://localhost:3000 para consumir los datos.
