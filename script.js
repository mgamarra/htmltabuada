(function ($, window, undefined) {
      
  $(function () {
	  
	$(document).on('click', 'table.tabuada', function(e) {
		e.preventDefault();
		var $el = $(this);
		//$("table.tabuada").removeClass('tabuada_activa');
		//$el.addClass("tabuada_activa")
	});	  
  })
   
  
}(window.jQuery, window))


var app = angular.module("app", []);
app.controller('StudentController', function($scope) {
    var students=[];
    var student1={};
    student1.firstName="John";
    student1.lastName="David";
    students.push(student1);
    var student2={};
    student2.firstName="Michael";
    student2.lastName="Jackson";
    students.push(student2);
    $scope.students=students;
});
app.directive('student', function() {
    //define the directive object
    var directive = {};
    //restrict = E, implies that directive is Element directive
    directive.restrict = 'E';
    //element will be replaced by this text/html
    directive.template = "FirstName: <b>{{student.firstName}}</b> , LastName: <b>{{student.lastName}}</b>";
    var linkFunction = function($scope, element, attributes) {
        element.css("background-color", "#00ff00");
    }
    directive.link=linkFunction;
    return directive;
});

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