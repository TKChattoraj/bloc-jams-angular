(function() {
    
    function AtBatCtrl($scope, basePathState, inningState, AtBatFactory) {
        this.atBatFactory = AtBatFactory;
        
        
    }
    
    
    angular
        .module('scoreMod')
        .controller('AtBatCtrl', ['$scope','basePathState', 'inningState', 'AtBatFactory', AtBatCtrl]);
    
    
})();