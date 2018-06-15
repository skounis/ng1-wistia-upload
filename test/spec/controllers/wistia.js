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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WistiaCtrl.awesomeThings.length).toBe(3);
  });
});
