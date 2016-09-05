(function() {
    function SongPlayer(Fixtures) {
        
        /**
        * @desc Service object return, making the service propeties, methods available to the application
        * @type {Object}
        */
        
        var SongPlayer = {};
        
        /**
        * @desc obtains from Fixtures the current album
        * @type [Array]
        */
    
        
        var currentAlbum = Fixtures.getAlbum();
        
        
        
        
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */ 
        
        var currentBuzzObject = null;
        
        /**
        * @function setSong
        * @desc private function that stops currently playing song and loads new audio file 
        * corresponding to the song input variable as currentBuzzObject
        * @param {Object} song
        */
        
        var setSong = function(song) {
            
            if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    SongPlayer.currentSong.playing=null;
                }
                
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            SongPlayer.currentSong = song;          
        }
        
        /**
        * @function playSong
        * @desc private function taht plays the currentBuzzObject and sets song.playing to true
        * @param song to be played       
        */
        
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;                 
        }
        
        /**
        * @function getSongIndex
        * @desc takes a song as a parameter and returns the index of that song in the songs array
        * @params song, a song object from the currentAlbum
        */
        
        
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
        
        
        /**
        * @desc the currentSong object
        * @type {Object}
        */
        
        SongPlayer.currentSong = null;
        
        /*
        * @function SongPlayer.play
        * @desc public function that calls private functions setSong and playSong
        * @params song to be set and played.  The song is from the collection of songs and is specify by clicking on its corresponding play button.
        */
        
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
               
            
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            } 
        };
        
        
        /*
        * @function SongPlayer.pause
        * @desc public functon that pauses the currently playing song after checking that the specified son is the song playing
        * @params song
        */
        
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            if (song.playing) {
                currentBuzzObject.pause();
                song.playing = false;               
            }
            
        };
        
        /**
        * @function SongPlayer.previous
        * @desc public function that will decriment the currentSongIndex
        * @params 
        */
        
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        
        
        
        
        return SongPlayer;
        
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer])
    
    
    
})();