class ProductsController < ApplicationController
  respond_to :json, :html

  def index
    @products = Product.all
    # respond_with @products
    render json: { data: @products }
  end
end
