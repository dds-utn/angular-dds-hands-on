describe("MainCtrl", function() {
  var scope = {}, ctrl = null;

  beforeEach(module("handson-dds"));

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl', { $scope: scope });
  }));

  it('should inicializar datos dummy de las casas', inject(function($controller) {
    var casasEsperadas = [
      {
        nombre: "Bolton",
        patrimonio: 12343,
        fundada_en: 130
      },
      {
        nombre: "Lannister",
        patrimonio: 35205,
        fundada_en: 529
      },
      {
        nombre: "Baratheon",
        patrimonio: 38980,
        fundada_en: 166
      }
    ];

    expect(scope.casas).toEqual(casasEsperadas);
  }));
});
