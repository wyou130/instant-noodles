class UsersController < ApplicationController

    skip_before_action :authenticated_user, only: [:create]

    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end

    def show
        render json: @current_user, status: :ok
        # only need the instance variable because current_user is found by the authorize method in application controller
    end

    private

    def user_params
        params.permit(:name, :password, :location, :image, :email)
    end

end
