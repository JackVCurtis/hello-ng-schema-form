var ContentController = function (){

};

var ContentDirective = function () {
  return {
    restrict: 'E',
    scope: {},
    template: require('./content.html'),
    controller: ContentController,
    controllerAs: 'contentCtrl',
    bindToController: {
      sampleText: '='
    }
  };
};


module.exports = ContentDirective;