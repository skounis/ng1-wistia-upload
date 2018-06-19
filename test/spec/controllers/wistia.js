'use strict';

describe('Controller: WistiaCtrl', function () {

  // load the controller's module
  beforeEach(module('wistiaUploadDemo'));

  var WistiaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WistiaCtrl = $controller('WistiaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach project and a kye s to the scope', function () {
    // console.log('Wistia Scope: ', scope.access);
    expect(scope.access.project).toBe('cz2bhyafmq');
    expect(scope.access.password).toBe('f64579d76f40ab92f5601e2319704aa57876cba89876b9209cd5ba57fd0822f3');
  });
});
