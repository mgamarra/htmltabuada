

var app = angular.module("app", []);


app
	.directive('tabuada', function(){
	  return {
		restrict: 'E',
		replace: true,
		templateUrl: 'tabuada.html',
		scope: { numero: '@' },
		transclude: true
		, link: function(scope, element, attributes, controller) {
			// console.log("link");
			
			element.bind('click', function(event) {
				let 
					numero = scope.numero
					, cz = "tr."+numero
					, table = $(event.target).parents("table")
					, trs = table.find("tr")
				;
				$("tr").removeClass("tr_relacionada");
				$("tr").removeClass("tr_desnecessaria");
				$("tr").removeClass("tr_necessaria");
				$(cz).each(function() {
					$(this).addClass("tr_relacionada");
				});				
				for ( let i = 0; i < numero ; i++ ) {
					$(trs[i]).addClass("tr_desnecessaria");
				}
				for ( let i = numero; i < trs.length ; i++ ) {
					$(trs[i]).addClass("tr_necessaria");
				}
				//console.log(scope.numero);
			});			
		}
		, controller: function($scope, $timeout) {
			$scope.items = [];
			
			for ( var i = 1; i <= 10; i++ ) {
				$scope.items.push({c1: $scope.numero, c2: i, c3: $scope.numero * i});
			}
			// console.log("controller");
		}		
	  };
	})

app.directive("w3TestDirective", function() {
    return {
        restrict : "A",
        template : "<h1>Made by a directive!</h1>"
    };
});