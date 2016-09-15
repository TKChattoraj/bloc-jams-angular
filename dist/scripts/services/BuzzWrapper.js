(function() {
    
    function BuzzWrapper(Fixtures) {
        
       BuzzWrapper.getBuzzed = function(song) {
           
           var buzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
               preload: true
           });
           return buzzObject;
       };
        
       BuzzWrapper.updateTime = function(currentBuzzObject) {
           console.log(currentBuzzObject.getTime());
           return currentBuzzObject.getTime();
               
           };
    
    
    return BuzzWrapper;
    
    }
    
    angular
        .module('blocJams')
        .factory('BuzzWrapper', ['Fixtures', BuzzWrapper])
    
})();