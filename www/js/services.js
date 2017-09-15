angular.module('starter.services', [])


.factory('companies', function($http, $q, $ionicLoading) {
  var companies;
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

      $http.get('http://api.jexpo.se/exhibitors?namespace=uniaden&limit=0').then(function(response){
        companies = response.data;
        dfd.resolve(companies);
        $ionicLoading.hide();
      });
      return dfd.promise;
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
