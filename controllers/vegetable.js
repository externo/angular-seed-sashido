'use strict';

angular
  .module('app')
  .controller('VegetableController', VegetableController);

function VegetableController(VegetableService) {

  var Vegetable = this;

  VegetableService.findAll(function (response) {
    Vegetable.vegetables = response.data.results;
    console.log(response);
  });

}
