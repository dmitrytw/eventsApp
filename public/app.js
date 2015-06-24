(function() {
  var app = angular.module('eventsApp', ['eventItems-directives', 'routes-module']);
  
  //PAGES CONTROLLERS
  //=============================================================

  //English clubs page
  app.controller('EngclubsController', ['$http', function($http){
    var eventList = this;
    eventList.eventItems = [];
    $http.get('appdata/engclubs-info.json').success(function(data){
        eventList.eventItems = data;
    });
    
  }]);

  //Mafia clubs page
  app.controller('MafiaclubsController', ['$http', function($http){
    var eventList = this;
    eventList.eventItems = [];
    $http.get('appdata/mafiaclubs-info.json').success(function(data){
        eventList.eventItems = data;
    });
    
  }]);

  //Coworkings page
  app.controller('CoworkingsController', ['$http', function($http){
    var eventList = this;
    eventList.eventItems = [];
    $http.get('appdata/coworkings-info.json').success(function(data){
        eventList.eventItems = data;
    });
    
  }]);

  // Fresh events page  
  app.controller('FresheventsController', ['$http', function($http){
    var eventList = this;
    eventList.eventItems = [];
    $http.get('appdata/freshevents-info.json').success(function(data){
        eventList.eventItems = data;
    });
    
  }]);


  //Review form
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(eventItem) {
      eventItem.reviews.push(this.review);

      this.review = {};
    };
  });

  //Contact Form Controller
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