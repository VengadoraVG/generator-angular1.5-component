var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  method1 : function () {
    this.kebabToCamel = function (kebab) {
      var words = kebab.split(/-/),
          i=1,
          camel = words[0];

      for (; i<words.length; i++) {
        camel += words[i][0].toUpperCase() + words[i].substr(1);
      }

      return camel;
    };

    var prompt = require('prompt'),
        ioInputSchema = {
          properties : {
            kebabCaseName: {
              // pattern: // TODO: check if variable is on kebab-case
              message: 'Nombre del componente? usa kebab-case!!!!! (por favor *ojitos de gato*)',
              required: true
            }
          }
        };

    prompt.get(ioInputSchema, (function (context) {
      return function (err, data) {
        var dir = 'app/components/' + data.kebabCaseName,
            fs = require('fs');

        context.destinationDir = context.destinationRoot() + '/' + dir + '/';
        context.camelCaseName = context.kebabToCamel(data.kebabCaseName);
        context.kebabCaseName = data.kebabCaseName;

        // creating components dir if it doesn't exists...
        if (!fs.existsSync('app/components')) {
          fs.mkdirSync('app/components');
        }

        // creating containing dir
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        // template
        context.fs.copy(
          context.templatePath('template.template.html'),
          context.destinationDir +
            context.kebabCaseName + '.template.html'
        );

        // module
        fs.readFile(context.templatePath('module.module.js'), 'utf8', (function (context) { // yo dawg, i herd u like closures...
          return function (err, data) {
            var esprima = require('esprima'),
                escodegen = require('escodegen'),
                obj = esprima.parse(data);

            obj.body[0].expression.arguments[0].value = context.camelCaseName;

            fs.writeFileSync(context.destinationDir + '/' +
                             context.kebabCaseName + '.module.js',
                             escodegen.generate(obj) + '\n', 'utf8');
          }
        })(context));

        // component
        fs.readFile(context.templatePath('component.component.js'), 'utf8', (function (context) { // yo dawg, i herd u like closures...
          return function (err, data) {
            var esprima = require('esprima'),
                escodegen = require('escodegen'),
                obj = esprima.parse(data);

            // component's field
            obj.body[0].expression.arguments[0].value = context.camelCaseName;

            // module's field
            obj.body[0].expression.callee.object.arguments[0].value =
              context.camelCaseName;

            // template string
            obj.body[0].expression.arguments[1].properties[0].value.value =
              context.kebabCaseName + '/' + context.kebabCaseName +
              '.template.html';

            // context function name
            obj.body[0].expression.arguments[1].properties[1].value.id.name =
              context.camelCaseName + 'Controller';

            fs.writeFileSync(context.destinationDir + '/' +
                             context.kebabCaseName + '.component.js',
                             escodegen.generate(obj) + '\n', 'utf8');
          }
        })(context));
      };
    })(this));

  }
});
