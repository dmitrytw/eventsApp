(function() {
  var app = angular.module('eventsApp', ['eventItems-directives', 'routes-module']);
  
  app.controller('EngclubsController', ['$http', function($http){
    var eventList = this;
    eventList.eventItems = [];
    $http.get('engclubs-info.json').success(function(data){
        eventList.eventItems = data;
    });
    
  }]);

  app.controller('MafiaclubsController', ['$http', function($http){
    var eventList = this;
    eventList.eventItems = [];
    $http.get('mafiaclubs-info.json').success(function(data){
        eventList.eventItems = data;
    });
    
  }]);

  app.controller('CoworkingsController', ['$http', function($http){
    var eventList = this;
    eventList.eventItems = [];
    $http.get('coworkings-info.json').success(function(data){
        eventList.eventItems = data;
    });
    
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(eventItem) {
      eventItem.reviews.push(this.review);

      this.review = {};
    };
  });

  app.controller('ContactformController', ['$scope', function($scope) {
    $scope.forminfo = {};
    $scope.message = "hello!";

    $scope.submitForm = function() {
            // check to make sure the form is completely valid
            if ($scope.contactForm.$valid) {
                alert('Thanks for sumbission!');
                $scope.forminfo = {};
            }

        };
  }]);

  
})();