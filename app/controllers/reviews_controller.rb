class ReviewsController < ApplicationController

    skip_before_action :authenticated_user, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Review.all, status: :ok
    end

    def show
        render json: Review.find(params[:id]), status: :ok
    end

    def create
        render json: Review.create!(review_params), status: :created
    end

    def update
        render json: Review.find(params[:id]).update!(review_params), status: :accepted
    end

    def destroy
        render json: Review.find(params[:id]).destroy!
        head :no_content
    end

    private

    def review_params
        params.permit(:noodle_rating, :noodle_comment, :toppings_rating, :toppings_comment, :spice_rating, :spice_comment, :overall_rating, :overall_comment, :user_id, :noodle_id)
    end

    def not_found
        render json: { error: "Review not found" }, status: :not_found
    end

end
