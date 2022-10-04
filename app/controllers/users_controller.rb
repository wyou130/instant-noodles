class UsersController < ApplicationController

    skip_before_action :authenticated_user, only: [:create]

    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created 
    end

    def show
        # using same action for different route 
        if params[:id]
            render json: User.find(params[:id]), status: :ok
        else
            render json: @current_user, status: :ok
        end
        # only need the instance variable because current_user is found by the authorize method in application controller
    end

    def index
        render json: User.all, status: :ok
    end

    def update
        render json: User.find(params[:id]).update!(user_params), status: :accepted
    end

    def destroy
        render json: User.find(params[:id]).destroy!
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :password, :location, :image, :email)
    end

    def not_found
        render json: { error: "User not found" }, status: :not_found
    end

end
