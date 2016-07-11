angular.module('FlashCards')
.directive('card', function cardView(){
    return { 
        restrict: "E",
        templateUrl: '_cardView.html',
        scope: {
            question: '@',
            answer: '@',
            answerHidden: '@',
            'hideMe':'&hideMe'
        }
    };
});