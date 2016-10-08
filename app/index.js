var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  method1 : function () {
    var prompt = require('prompt'),
        ioInputSchema = {
          name: {
            // pattern: // TODO: check if variable is on kebab-case
            message: 'Nombre del componente? usa kebab-case!!!!! (por favor *ojitos de gato*)',
            required: true
          }
        };

    prompt.get(ioInputSchema, (function (context) {
      return function (err, data) {
        context.kebabName = data.name
      };
    })(this));

    console.log(this.kebabName);
  }
});
