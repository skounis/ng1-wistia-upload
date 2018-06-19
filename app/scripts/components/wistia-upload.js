'use strict';

function WistiaUploadControler($scope, $timeout) {
  // Base URL for video embed (iFrame)
  var VIDEO_BASE_URL = '//fast.wistia.net/embed/iframe/';
  var vm = this;

  vm.$onInit = function(){
    $scope.access = {
      project: vm.project,
      password: vm.password
    };
  };

  // Prepare jQuery
  $.noConflict();

  // console.log(model.password);

  $scope.access = {
    project: '',
    password: ''
  };
  //
  // Demo Videos
  // - //fast.wistia.net/embed/iframe/avk9twrrbn
  // - //fast.wistia.net/embed/iframe/g5pnf59ala
  $scope.video = {
    id: '', //'kro7mgsfsj'
    url: ''
  };

  $scope.progress = {
    value: '0'
  };

  /**
   * Update media URL
   * @param id media ID returned by the API
   */
  var updateMediaId = function(id){
    $scope.video.url = VIDEO_BASE_URL + id;
    $scope.$apply();
  };

  /**
   * Update progress indication
   * @param progress 1-100 in string
   */
  var updateProgress = function(progress) {
   $scope.progress.value = progress;
   $scope.$apply();
  };

  $timeout(function() {
    $('#fileupload')
      .fileupload({
        dataType: "json",
        done: function(e, data) {
          var hash = data.result.hashed_id;
          console.log('done:', hash);
          updateMediaId(hash);
        },
        fail: function(e, data) {
          if (data.textStatus !== "error") { return; }
          console.error('error: ', data.jqXHR.responseText);
          console.error(data);
          var message = JSON.parse(data.jqXHR.responseText);
          alert(message.error);
          updateProgress(0);
        },
        progress: function(e, data) {
          var progress = parseInt(data.loaded / data.total * 100, 10);
          console.log('progress: ', progress);
          updateProgress(progress);
        }
      });
  }, 1000);


}

/**
 * @ngdoc component
 * @name wistiaUploadDemo.component:wistia
 * @description
 * # wistia
 */
angular.module('wistiaUploadDemo')
.controller('wistiaUploadControler', WistiaUploadControler)
  .component('wistiaUpload', {
    templateUrl: 'views/wistia-upload.html',
    bindings: {
      project: '<',
      password: '<'
    },
    controller: 'wistiaUploadControler'
  })
  .filter('trusturl', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
