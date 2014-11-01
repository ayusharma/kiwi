var recword;
var w1,w2,w3;
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
	// $scope.master = {};
	// $scope.isUnchanged = function(word) {
 //      return angular.equals(word, $scope.master);
 //    };
	$scope.wordMean = function(){
		if($scope.word != null){
			recword = encodeURI($scope.word);
		} else {
			recword = ' ';
		}
		
	}
	
})
.controller('DashDetCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/definitions?limit=5&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.wordmean = data;
		$scope.hand = false;
		if($scope.wordmean[0] == null){
			$scope.hand = true;
		}
		});
})
.controller('DashExCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/topExample?useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.ex = [data];
		$scope.hand = false;
		}).error(function(data){
			$scope.hand = true;
		});
})
.controller('DashProCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/pronunciations?useCanonical=false&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.pro = data;
		$scope.hand = false;
		if($scope.pro[0] == null){
			$scope.hand = true;
			$scope.errorpro = 'No Results Found';
		}
		}).error(function(data){
			$scope.hand = true;
			$scope.errorpro = 'No Results Found';

		});
})
.controller('DashAudCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/audio?useCanonical=false&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.aud = data;
		$scope.hand = false;
		if($scope.aud[0] == null){
			$scope.hand = true;
			$scope.erroraud = 'No Results Found';

		}
		}).error(function(data){
			$scope.hand = true;
			$scope.erroraud = 'No Results Found';

		});;
})
.controller('DashRelCtrl', function($scope,$http) {
 $http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+recword+'/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.related = data;
		$scope.hand = false;
		if($scope.related[0] == null){
			$scope.hand = true;
			$scope.errorrel = 'No Results Found';
		}
		}).error(function(data){
			$scope.hand = true;
			$scope.errorrel = 'No Results Found';

		});
})
.controller('ActivityCtrl', function($scope) {
  // $scope.friends = Friends.all();
})

.controller('WodCtrl', function($scope,$http) {
	$scope.ayush = true;
  $http({method: 'GET', url: 'http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.wod = [data];
		var temp = data.examples;
		$scope.wodtext = temp;
		$scope.ayush = false;
		});


})

.controller('MtcCtrl', function($scope,$http) {
	$scope.ayush = true;
  	function getWord(){$http({method: 'GET', url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&sortBy=alpha&sortOrder=asc&limit=3&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(data){
		$scope.rd = data;
		$scope.wstyleone = {'background-color':'transparent' };
		$scope.wstyletwo = {'background-color':'transparent' };
		$scope.wstylethree = {'background-color':'transparent' };
		$scope.wtone = '';
		$scope.wttwo = '';
		$scope.wtthree = '';
		// $scope.rdd = $scope.data['word'];
		w1 = data[0].word;
		w2 = data[1].word;
		w3 = data[2].word;
		}).then(function(){
			$http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+w1+'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(jd){
				$scope.wone = jd;
			});
		}).then(function(){
			$http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+w2+'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(kd){
				$scope.wtwo = kd;
			});
		}).then(function(){
			$http({method: 'GET', url: 'http://api.wordnik.com:80/v4/word.json/'+w3+'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'}).success(function(ld){
				$scope.wthree = ld;
				$scope.ayush = false;
			});
		});
	}
		getWord();
		// var undefined.word = 'null';
		$scope.checkAns = function(){
				
				if(w1 == $scope.sel1.word){
					$scope.wstyleone = {'background-color':'#66cc33'};
					
				}
				else {
					$scope.wstyleone = {'background-color':'#ef4e3a' };
					$scope.wtone = w1;
					//console.log($scope.sel1);

				}
				if(w2 == $scope.sel2.word) {
					$scope.wstyletwo = {'background-color':'#66cc33'};
				}
				else {
					$scope.wstyletwo = {'background-color':'#ef4e3a'};
					$scope.wttwo = w2;
					
				}
				if(w3 == $scope.sel3.word) {
					$scope.wstylethree = {'background-color':'#66cc33'};

				}
				else {
					$scope.wstylethree = {'background-color':'#ef4e3a'};
					$scope.wtthree = w3;
				}
		}

		$scope.newWord = function(){
			getWord();
		}
	
	


})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('AccountCtrl', function($scope) {
});