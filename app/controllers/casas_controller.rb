class CasasController < ApplicationController

  def index
    @casas = Casa.all
    # sleep(2.0)

    respond_with(@casas)
  end

  def create
    @casa = Casa.create(casas_params)

    respond_with(@casa)
  end

  def casas_params
    params.require(:casa).permit(
      :nombre,
      :patrimonio,
      :fundada_en
    )
  end
end
