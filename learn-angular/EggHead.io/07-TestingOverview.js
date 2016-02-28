angular.module('app', [])

.factory("Data", function () {
  return {
    message: "I'm data from service"
  }
})
.filter("reverse", function(Data) {
  return function(text) {
    return  Data.message + text.split("").reverse().join("");
  }
})

.controller('FirstCtrl', function ($scope, Data) {
  $scope.data = Data;
})

.controller('SecondCtrl', function ($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  }
})

// describe('filter', function() {
//   beforeEach(module('app'));

//   describe('reverse', function() {
//     it ('should reverse a string', inject(function(reverseFilter){
//       expect(reverseFilter("ABCD")).toEqual("DCBA");
//     }))
//   })
// })