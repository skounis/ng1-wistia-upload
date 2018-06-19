'use strict';

describe('Component: wistia upload', function () {

  // load the directive's module
  beforeEach(module('wistiaUploadDemo'));

  var element,
    scope,
    $compile;

  beforeEach(inject(function ($controller, $rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    WistiaUploadControler = $controller('wistiaUploadControler', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should accept project and password', inject(function () {
    var project = 'foo';
    var password = 'bar';
    scope['project'] = project;
    scope['password'] = password;

    expect(scope.project).toBe('foo');
    expect(scope.password).toBe('bar');
  }));

});
