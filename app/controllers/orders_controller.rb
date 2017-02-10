class OrdersController < ApplicationController

  def create
    razorpay_pmnt_obj = Razorpay::Payment.fetch(params[:payment_id])
    status = razorpay_pmnt_obj.status
    if status == "authorized"
        razorpay_pmnt_obj.capture({amount: 100})
        razorpay_pmnt_obj = Razorpay::Payment.fetch(params[:payment_id])
        @order = Order.create(product_id: params[:product_id])
        redirect_to '/'
      else
        raise StandardError, "UNable to capture payment"
      end
  end
end
