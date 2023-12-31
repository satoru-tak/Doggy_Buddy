class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  private

  def sign_up_params
    params.permit(:name, :email, :password, :password_confirm)
  end

  def account_update_params
    params.permit(:name, :email, :password)
  end
end
