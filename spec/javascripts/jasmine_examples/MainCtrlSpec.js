describe("MainCtrl", function() {
  var scope = {}, ctrl = null;

  beforeEach(module("handson-dds"));

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl', { $scope: scope });
  }));

  it('should traer las casas de la API al inicializar', inject(function($httpBackend) {
    $httpBackend.expectGET("/casas.json").respond(200, {
      casas: [
        {
          nombre: "Bolton",
          fundada_en: 130,
          patrimonio: 12343
        }
      ]
    });

    $httpBackend.flush();

    expect(scope.casas).toEqual([
        {
          nombre: "Bolton",
          fundada_en: 130,
          patrimonio: 12343
        }
    ]);
  }));
});
