angular.module('CardsAgainstAssembly')
  .controller('cardsController', ['$scope', function($scope){

  $scope.swapMe = function(){
    console.log('click heard on ', this.card.question);
  };

  var self = this;
  self.all = [
    {
      question: "What is Batman's guilty pleasure?", 
      answer: "Robert Downey Jr."
    },
    {
      question: "I'm sorry professor, I couldn't complete my homework because _________.",
      answer: "the dog ate my assignment!"
    },
    {
      question: "I get by with a little help from _________.",
      answer: "John Cena!"
    },
    {
      question: "_________ -- It's a trap!",
      answer: "General Assembly?"
    },
    {
      question: "The class field trip was completely ruined by _________.",
      answer: "dragons"
    },
    {
      question: "What's my secret power?",
      answer: "Angular Baby!"
    },
    {
      question: "Why are there so many songs about rainbows?",
      answer: "It's not that easy being green."
    },
    {
      question: "Where do babies come from?",
      answer: "Go ask your mother."
    }
  ]
}]);
