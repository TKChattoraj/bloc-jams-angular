(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });
        
        $stateProvider
        
            .state('landing', {
              views: {
                  "": {
                      url: '/',
                      templateUrl: '/templates/landing.html',
                      controller: 'LandingCtrl as landing'
                  },
                  "test": {
                    template:"<h1>This shows multiple views within the single state 'landing'</h1>"
                  }
              }
              
            })
        
            .state('album', {
              url: '/album',
              templateUrl: '/templates/album.html'
            })
        
            .state('collection', {
              url:  '/collection',
              controller:  'CollectionCtrl as collection',
              templateUrl: '/templates/collection.html'
            });
    }
    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();