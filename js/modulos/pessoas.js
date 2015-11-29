angular

    .module('pessoas', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'listar.html',
                controller: 'CtrlPessoas'
            })
            .when('/pessoa/adicionar', {
                templateUrl: 'adicionar.html',
                controller: 'CtrlAdicionar'
            });
    }])

    .controller('CtrlPessoas', ['$scope', function($scope){

        $scope.pessoas = [
            {nome : 'Maria', cidade: 'São Paulo'},
            {nome : 'Pedro', cidade: 'Rio de Janeiro'},
            {nome : 'João', cidade: 'Vitória'},
            {nome : 'Marta', cidade: 'Vila Velha'}
        ];
    }])


    .controller('CtrlAdicionar', ['$scope', function($scope){

        $scope.add = function(){

            $scope.pessoas.push($scope.pessoa);

            //$scope.pessoa.nome = '';
            //$scope.pessoa.cidade = '';
            $scope.pessoa = '';

            $scope.result = 'Registro adicionado';
        };
    }]);


