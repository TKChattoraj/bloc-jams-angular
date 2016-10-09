(function(){
    function atBat(AtBatFactory) {
        
        return {
            templateUrl: '/templates/directives/at_bat.html',
            controller: 'AtBatCtrl as atBat',
            replace: true,
            restrict: 'E',
            bindToController: true,
            scope: {
                
            },
            link: function(scope, element, attributes) {}
                
        };
    }
                
    
    angular
        .module('scoreMod')
        .directive('atBat', ['AtBatFactory', atBat]);
})();

