/// <reference path="../typings/tsd.d.ts" />

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
  $scope.title = 'Yabadabadu';
}