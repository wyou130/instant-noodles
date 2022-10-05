class NoodlesController < ApplicationController

    skip_before_action :authenticated_user, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index 
        render json: Noodle.all, status: :ok
    end

    def show
        render json: Noodle.find(params[:id]), status: :ok, serializer: NoodleReviewsSerializer
    end

    def create
        render json: Noodle.create!(noodle_params), status: :created
    end

    def update
        render json: Noodle.find(params[:id]).update!(noodle_params), status: :accepted
    end

    private

    def noodle_params
        params.permit(:brand, :flavor, :image, :birthplace, :style)
    end

    def not_found
        render json: { error: "Noodle not found" }, status: :not_found
    end

end
