angular.module('FlashCards')
.controller('cardsController', ['$scope', '$http', function($scope, $http){

    $scope.hideMe = function(){
      $scope.answerHidden = true;
      if($scope.answerHidden === true){
           return false;
        } else {
          $scope.answerHidden = false;
          return true;
        }
    };

    $http.get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
      .success(function(response){
        for(var i = 0; i < response.length; i++)
        {
          // console.log('response is ', response[i]);
          $scope.cards.push(response[i]);
        }
      })
      .error(function(response){
        console.log('Error: ', response)
      });


  $scope.cards = [
    {
      _id: 1,
      question: "What is Superman's guilty pleasure?", 
      answer: "Ben Affleck",
      answerHidden: true
    },
    {
      _id: 2,
      question: "I'm sorry I couldn't finish my homework...",
      answer: "the dog ate my laptop!",
      answerHidden: true
    },
    {
      _id: 3,
      question: "I get by with a little help from _________.",
      answer: "John Cena!",
      answerHidden: true
    },
    {
      _id: 4,
      question: "_________ -- It's a trap!",
      answer: "Monq's Chat room?",
      answerHidden: true
    },
    {
      _id: 5,
      question: "The class field trip was completely ruined by _________.",
      answer: "the guy in a clown suit",
      answerHidden: true
    },
    {
      _id: 6,
      question: "What's my secret power?",
      answer: "ngAnimate",
      answerHidden: true
    },
    {
      _id: 7,
      question: "Why are there so many songs about rainbows?",
      answer: "Leprachauns",
      answerHidden: true
    },
    {
      _id: 8,
      question: "Where do babies come from?",
      answer: "Netflix and Chill",
      answerHidden: true
    },
    {
      _id: 9,
      question: "How do we do auth in Angular with Satellizer?",
      answer: "I'm glad you asked.",
      answerHidden: true
    }
  ];

}]);

