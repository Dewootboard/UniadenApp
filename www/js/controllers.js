angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal) {

  // Hårdkodade modals med id 1,2,3.
  $ionicModal.fromTemplateUrl('templates/tips.html', {
    id:1,
    scope: $scope
  }).then(function(modal) {
    $scope.modal1 = modal;
  });
  $ionicModal.fromTemplateUrl('templates/map.html', {
    id:2,
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });
  $ionicModal.fromTemplateUrl('templates/club.html', {
    id:3,
    scope: $scope
  }).then(function(modal) {
    $scope.modal3 = modal;
  });
  $scope.openModal = function(index) {
      if(index === 1){
        $scope.modal1.show();
      }
      if(index === 2){
        $scope.modal2.show();
      }
      if(index === 3){
        $scope.modal3.show();
      }
  }
  $scope.closeModal = function(index) {

    if(index === 1){
      $scope.modal1.hide();
    }
    if(index === 2){
      $scope.modal2.hide();
    }
    if(index === 3){
      $scope.modal3.hide();
    }

  };
  // När en modal stängs så tas den bort för att förbättra prestanda
  // se även cache-view=false i tab-dash.html på rad 1
  $scope.$on('$destroy', function() {
   console.log('Destroying modals...');
   $scope.modal1.remove();
   $scope.modal2.remove();
   $scope.modal3.remove();
 });
})


.controller('CatalogCtrl', function($scope, $ionicModal, allCompanies, companies, $ionicLoading) {

  //allCompanies finns i app.js som i sin tur kör companies.all() från services.

  $scope.companyData = allCompanies;

  $scope.openDetails = function(companyId){
    company = companies.get(companyId);

    $ionicModal.fromTemplateUrl('templates/details-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.company = company;
      $scope.modal = modal;
      $scope.modal.show();
    })
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  };
})
