angular.module('CardsAgainstAssembly', ['ngAnimate'])
.directive("hideMe", function($animate){
    return function(scope, element, attrs){
            scope.$watch(attrs.hideMe, function(){
                if(attrs.hideMe){
                   $animate.removeClass(element, "hidden");
                } else {
                   $animate.addClass(element, "hidden");
                }
        });
    };
});