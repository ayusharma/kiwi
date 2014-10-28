var recword;
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
	// $http.defaults.useXDomain = true;
	// $http.defaults.withCredentials = true;
	// delete $http.defaults.headers.common["X-Requested-With"];
	// $http.defaults.headers.common["Accept"] = "application/json";
	// $http.defaults.headers.common["Content-Type"] = "application/json";
	// $scope.wordMean = function(){ $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+$scope.word+'/definitions?limit=5&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
	// 	$scope.wordmean = data; 
	// 	});
	// };
	$scope.wordMean = function(){
		recword = $scope.word;
		// console.log(recword);
	};
})
.controller('DashDetCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/definitions?limit=5&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.wordmean = data;
		});
})
.controller('DashExCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/topExample?useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.ex = [data];
		});
})
.controller('DashProCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/pronunciations?useCanonical=false&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.pro = data;
		});
})
.controller('DashAudCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/audio?useCanonical=false&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.aud = data;
		});
})
.controller('DashRelCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.related = data;
		});
})
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

