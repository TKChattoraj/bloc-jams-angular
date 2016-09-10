(function() {
    
    function CurrentTimeService() {
        
        var currentBuzzObject = null;
        
        CurrentTimeService.currentTime = currentBuzzOjbect.getTime();
    }
    
    
    angular
        .module('blocJams')
        .factory('CurrentTimeService', ['Fixtures', CurrentTimeService])
    
    
    
})();