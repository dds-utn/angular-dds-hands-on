describe("MainCtrl", function() {
  var scope = {}, ctrl = null;

  beforeEach(module("handson-dds"));

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl', { $scope: scope });
  }));

  it('should agregar un mensaje de bienvenida al scope', inject(function($controller) {
    expect(scope.mensajeBienvenida).toBe("Bienvenido a GOT");
  }));
});
