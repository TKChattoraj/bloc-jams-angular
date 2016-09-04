(function() {
    function SongPlayer() {
        
        /**
        * @desc Service object return, making the service propeties, methods available to the application
        * @type {Object}
        */
        
        var SongPlayer = {};
        
        var currentSong = null;
        
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
                    currentSong.playing=null;
                }
                
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            currentSong = song;          
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
        
        
        /*
        * @function SongPlayer.play
        * @desc public function that calls private functions setSong and playSong
        * @params song to be set and played.  The song is from the collection of songs and is specify by clicking on its corresponding play button.
        */
        
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
               
            
            } else if (currentSong === song) {
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
            if (song.playing) {
                currentBuzzObject.pause();
                song.playing = false;               
            }
            
        }
        
        
        return SongPlayer;
        
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer)
    
    
    
})();