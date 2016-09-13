(function() {
    
    function updateTime($document) {
        
        var currentBuzzObject = null;
        
        
        var getBuzzed = function(song) {
            var BuzzObject;
            buzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            return buzzObject;
        }
        
        
        CurrentTimeService.currentTime = currentBuzzOjbect.getTime();
    }
    
    
    return {
        templateUrl: '/templates/directives/time_update.html',
        replace: true,
        retrict: 'E',
        scope: {},
        link: function(scope, element, attributes){
            
            
            
        }
    }
    
    
    
    angular
        .module('blocJams')
        .directive('updateTime', ['Fixtures', updateTime]);
    
    
    
})();