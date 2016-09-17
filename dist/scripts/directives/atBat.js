(function() {
    function atBat() {
        
        return {
            templateUrl: '/templates/directives/at_bat.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {
                var firstClick = null;
                var secondClick = null;
                var toFirst = false;
                var toSecond = false;
                var toThird = false;
                var advFrmFirst = false;
                var advFrmSecond = false;
                var advFrmThird = false;
                scope.updateBasePath = function(e) {
                    if (firstClick === null) {
                        
                        firstClick = e.target.className;
                    } else {
                        secondClick = e.target.className;
                    }
                    
                    if (firstClick === 'home-plate') {
                        console.log(firstClick + " " + secondClick);
                        
                        switch (secondClick) {
                            case 'first-base':
                                scope.toFirst = true;
                                break;
                            case 'second-base':
                                scope.toFirst = true; 
                                scope.toSecond = true;
                                break;
                            case 'third-base':
                                scope.toFirst = true;
                                scope.toSecond = true;
                                scope.toThird = true;
                                break;
                            case 'home-plate':
                                scope.toFirst = true;
                                scope.toSecond = true;
                                scope.toThird = true;
                                scope.toHome = true;
                        }
                    }
                };
                        
//                        if (secondClick === 'first-base') {
//                            
//                           scope.toFirst = true; 
//                        }
//                        if (secondClick === 'second-base'){
//                            scope.toFirst = true; 
//                            scope.toSecond = true;
//                        }
//                        if (secondClick === 'third-base'){
//                            scope.toFirst = true; 
//                            scope.toSecond = true;
//                            scope.toThird = true;
//                        }
//                        if (secondClick === 'home-plate'){
//                            scope.toFirst = true; 
//                            scope.toSecond = true;
//                            scope.toThird = true;
//                            scope.toHome = true;
//                        }
//                        
//                        
//                    }
//                    
//                };
                
            }
        };
        
        
    }
    
    angular
        .module('blocJams')
        .directive('atBat', atBat);
})();

