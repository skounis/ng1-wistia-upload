'use strict';

describe('Directive: wistia', function () {

  // load the directive's module
  beforeEach(module('wistiaUploadDemo'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wistia></wistia>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wistia directive');
  }));
});
