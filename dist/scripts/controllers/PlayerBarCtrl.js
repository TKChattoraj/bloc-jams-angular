(function() {
   
    function PlayerBarCtrl(Fixtures, BuzzWrapper, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        
        this.buzzWrapper = BuzzWrapper;
        this.songPlayer = SongPlayer;
    }
    
    
    
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'BuzzWrapper','SongPlayer', PlayerBarCtrl]);
    
    
    
})();