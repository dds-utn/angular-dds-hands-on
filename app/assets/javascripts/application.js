// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular.min
//= require_tree .

var Naval = function() {
  this.tipo = "Naval";
};
Naval.prototype.poder = function() {
  return 900;
};

var Aerea = function(cantidadDragones) {
  this.tipo = "Aerea";
  this.cantidadDragones = cantidadDragones;
};
Aerea.prototype.poder = function() {
  return this.cantidadDragones * 100;
};

var Terrestre = function(cantidadSoldados) {
  this.tipo = "Terrestre";
  this.cantidadSoldados = cantidadSoldados;
};
Terrestre.prototype.poder = function() {
  return this.cantidadSoldados * 50;
};

var convertToFuerza = function(json) {
  switch (json.type) {
    case "Naval":
      return new Naval();

    case "Aerea":
      return new Aerea(json.cantidad_dragones);

    case "Terrestre":
      return new Terrestre(json.cantidad_soldados);

    default:
      throw new Error("No se como crear una fuerza de tipo " + json.type)
  }
}

var app = angular.module("handson-dds", []);

app.controller("MainCtrl", function ($scope, $http) {
  $scope.isLoading = true;

  $http.get("/casas.json").success(function (response) {
    $scope.casas = response.casas;
    $scope.isLoading = false;
  });

  $scope.cargarFuerzas = function(casa) {
    $http.get("/fuerzas.json?casa=" + casa.id).success(function (response) {
      $scope.casaSeleccionada = casa;
      $scope.fuerzas = response.fuerzas.map(convertToFuerza);
    })
  }
});
