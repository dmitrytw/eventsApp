(function() {
  var app = angular.module('eventItems-directives', []); 
  
  app.directive("eventItemDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "eventitem-description.html"
    };
  });

  app.directive("eventReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "event-reviews.html"
    };
  });

  app.directive("eventSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "event-specs.html"
    };
  });

  app.directive("eventTabs", function() {
    return {
      restrict: "E",
      templateUrl: "event-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("eventGallery", function() {
    return {
      restrict: "E",
      templateUrl: "event-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

})();
