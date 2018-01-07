angular.module('starter.services', [])


.factory('companies', function($http, $q, $ionicLoading) {
  var companies;
  var jsonString;
  return {
    // funktionen all hämtar information från jexpo
    // för mer info om $q,resolve,promises osv: googla.
    all: function(){

      var deferred = $q.defer();
      //Laddgrej medans json-filen hämtas
      $ionicLoading.show({
        content: '<ion-spinner icon="crescent"></ion-spinner>',
        animation: 'fade-in',
        showBackdrop: false,
        maxWidth: 50,
        showDelay: 0
      });

     // $http.get('http://p17.jexpo.se/uniaden/exhibitors?getAttributes=1&filter=["published:true"]').then(function (response) {
      $http.get('http://p17.jexpo.se/uniaden/exhibitors?getAttributes=1&filter=["published:true"]').then(function (response) {
          jsonString = JSON.stringify(response.data);
          jsonString = jsonString.replace("{\"results\":[", "[").slice(0, -1)   
          companies = JSON.parse(jsonString);
          //companies = response.data;
          deferred.resolve(companies);
          $ionicLoading.hide();
      });
        return deferred.promise;
     // });
      
    },
    get: function(companyId) {
      for (var i = 0; i < companies.length; i++) {
        if (companies[i].id === companyId ){
          return companies[i];
        }
      }
      return null;
    }
  }
});
/*
.factory('companyZones', function($http, $q, $ionicLoading) {
  var companyZones;
  return {
    // funktionen all hämtar information från jexpo
    // för mer info om $q,resolve,promises osv: googla.
    all: function(){

      var dfd = $q.defer();
      //Laddgrej medans json-filen hämtas
      $ionicLoading.show({
        content: '<ion-spinner icon="crescent"></ion-spinner>',
        animation: 'fade-in',
        showBackdrop: false,
        maxWidth: 50,
        showDelay: 0
      });

      $http.get('http://www.uniaden.com/exhibitor-zones.json').then(function(response){
        companyZones = response.data;
        dfd.resolve(companyZones);
        $ionicLoading.hide();
      });
      return dfd.promise;
    },
    get: function(companyId) {
      for (var i = 0; i < companyZones.length; i++) {
        if (companyZones[i].id === companyId ){
          return companyZones[i];
        }
      }
      return null;
    }
  }
});*/
