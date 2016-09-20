(function() {
    function atBat() {
        
        return {
            templateUrl: '/templates/directives/at_bat.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes) {
                scope.background = "grey";
                var firstClick = null;
                var secondClick = null;
                scope.toFirst = false;
                scope.toSecond = false;
                scope.toThird = false;
                scope.advFrmFirst = false;
                scope.advFrmSecond = false;
                scope.advFrmThird = false;
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
                                scope.background = 'blue';
                        }
                    } else if (firstClick === 'first-base')  {
                        console.log(firstClick + " " + secondClick);
                        switch (secondClick) {
                            case 'second-base':
                                scope.advFrmFirst = true;
                                console.log(scope.advFrmFirst);
                                break;
                            case 'third-base':
                                scope.advFrmFirst = true;
                                scope.toThird = true;
                                break;
                            case 'home-plate':
                                scope.advFrmFirst = true;
                                scope.toThird = true;
                                scope.toHome = true;
                                scope.background = 'blue';
                                break;
                        }
                     } else if (firstClick === 'second-base') {
                        console.log(firstClick + " " + secondClick);
                        switch (secondClick) {
                            case 'third-base':
                                scope.advFrmSecond = true;
                                break;
                            case 'home-plate':
                                scope.advFrmSecond = true;
                                scope.toHome = true;
                                scope.background = 'blue';
                                break;
                        }
                    } else if (firstClick === 'third-base') {
                    console.log(firstClick + " " + secondClick);
                        switch (secondClick) {
                            case 'home-plate':
                                scope.advFrmThird = true;
                                scope.background = 'blue';
                                break;
                        }
                    }
                    if (secondClick) {
                        firstClick = secondClick;
                        console.log('firstClick is now: ' + firstClick);
                    }

                    };
                }
                        
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
                
            };
        }
        
    
    angular
        .module('blocJams')
        .directive('atBat', atBat);
})();

