/// <reference path="../typings/angularjs/angular.d.ts" />

class Animal {
  constructor(public name: string) {

  }

  move(meters: number) {
    console.log(this.name, " moved ", meters, "m.");
  }
}

interface ICustomScope extends ng.IScope {
  title: string;
}

function Controller($scope: ICustomScope) {
  $scope.$broadcast('myEvent');
  $scope.title = 'Here\'s a title!';
}

var app: ng.IModule = angular.module('testApp', [])
  .controller('testCtrl', ['$scope', Controller]);