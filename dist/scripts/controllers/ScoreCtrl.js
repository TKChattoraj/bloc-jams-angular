(function() {
    
    function ScoreCtrl(AtBatFactory) {
        this.atBatFactory = AtBatFactory;
        this.test = function(e) {
            alert("into score test");
            this.event = e.target.className;
            console.log(this.event);
        }
    }
    
    
    angular
        .module('scoreMod')
        .controller('ScoreCtrl', ['AtBatFactory', ScoreCtrl]);
    
    
})();