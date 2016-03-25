angular.module('CardsAgainstAssembly')
    .directive('card', cardView);

function cardView(){
    var directive = {};
    directive.restrict = "E";
    directive.templateUrl = '_cardView.html';
    directive.scope = {
        question: '@',
        answer: '@',
        'swapMe':'&swapMe'
    };
    return directive;
}

angular.module('CardsAgainstAssembly')
    .directive("hideMe", function(){
    return function(scope, element, attrs){
            console.log('attrs: ', attrs);
            scope.$watch(attrs.hideMe, function(){
                if(attrs.isHidden){
                    attrs.isHidden = false;
                } else {
                    attrs.isHidden = true;
                }
        }); 
    };
});