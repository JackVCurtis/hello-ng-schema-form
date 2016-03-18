// Style
require('./app.css');

// Components
var ContentDirective = require('./components/content/content.directive.js');

angular.module('app', []);

angular.module('app')
  .controller('RootCtrl', function(){
    this.text = "test";
  })
  .directive('jvcContent', ContentDirective);