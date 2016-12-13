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
      $http.get('http://a.jexpo.se/uniaden/exhibitors?profile[logotype]&profile[ad]&exhibition&_limit=0').then(function(response){
        companies = response.data;
        dfd.resolve(companies);
        $ionicLoading.hide();
      });
      return dfd.promise;
    },
    get: function(companyId) {
      for (var i = 0; i < companies._models.length; i++) {
        if (companies._models[i].id === companyId ){
          return companies._models[i];
        }
      }
      return null;
    }
  }
});
