/**
 * Master Controller
 */

angular.module('UBSDash')
    .controller('ApplicationCtrl', ['$scope', '$http', ApplicationCtrl]);
function ApplicationCtrl($scope, $http) {

// ****************************
// Initialise variables & scope
// ****************************
$scope.appsList =  [];
$scope.appServersList =  [];
$scope.searchText = "";

// ****************************
// Load
// ****************************
  var Load = function () {
      loadAppsList();
      console.log("load appsCtrl")
  }

  // ****************************
  // load from API
  // ****************************

  var loadAppsList = function () {
  //  $http.defaults.headers.common.Authorization = 'Basic YWxleDpudGNvcmVLMDA3Cg==';
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/applications'
    }).then(function successCallback(response) {
      $scope.appsList = response.data;
      console.log(response.data);
    //  console.log($scope.appsList);
      }, function errorCallback(response) {
        console.log("error");
      });
  }

  var loadAppMetrics = function () {
  //  $http.defaults.headers.common.Authorization = 'Basic YWxleDpudGNvcmVLMDA3Cg==';
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/applications/metrics'
    }).then(function successCallback(response) {
      $scope.appsList = response.data;
      console.log(response.data);
    //  console.log($scope.appsList);
      }, function errorCallback(response) {
        console.log("error");
      });
  }


//will be replaced by something else
$scope.onSearch = function (s){
 $scope.searchText = s;
}


Load();

}
