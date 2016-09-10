(function() {
    function SongPlayer($rootScope, Fixtures) {
        
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
                stopSong(SongPlayer.currentSong);
                }
                
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentBuzzObject.bind('timeupdate', function() {
                //$rootScope.$apply(function() {
                $apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
            
            SongPlayer.currentSong = song;          
        };
        
        /**
        * @function playSong
        * @desc private function that plays the currentBuzzObject and sets song.playing to true
        * @param song to be played       
        */
        
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;                 
        };
        
        /*
        * @function stopSong
        * @desc private function that stops the currenBuzzObject from playing and sets the song.playing value to null
        * @params the song to stop playing
        */
        
        var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = null;
        };
             
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
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        
        SongPlayer.currentTime = null;
        
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
                stopSong(song);          
            }
            
        };
        
        /**
        * @function SongPlayer.previous
        * @desc public function that will decriment the currentSongIndex
        * @params none
        */
        
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        
        
        /*
        * @function SongPlayer.next
        * @desc pulbic function that plays the next song in the album.songs array. 
        *       If at the end of the array, all music stops.
        * @params none
        */
        
        
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            if (currentSongIndex >= currentAlbum.songs.length) {
                stopSong(SongPlayer.currentSong);

            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };
        
        SongPlayer.setVolume = function(volume) {
            if (currentBuzzObject) {
                currentBuzzObject.setVolume(volume);
                SongPlayer.volume = volume;
            }
        };
        
        
        
        
        
        return SongPlayer;
//        return {
//            "play": play,
//            "pause": pause,
//            "currentSong": currentSong
//        }
//        
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer])
    
    
    
})();