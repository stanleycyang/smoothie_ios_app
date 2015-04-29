(function(){

  angular
    .module('smoothie_app')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http'];

    function ApplicationController($http){

      // Capture variable
      var self = this;

      // Create a promise
		  var promise = $http.get('https://agile-woodland-4847.herokuapp.com/api/smoothies')
        .success(function(data, status, headers, config){
          return data;
        })
        .error(function(data, status, headers, config){
          return data;
        });

        promise.then(function(response){
          self.smoothies = response.data;
        });        

    }

})();

