class Api::V1::UsersController < ApplicationController
  #GET /users
  def index
    @users = User.all 
    render json: @users
  end

  # GET /v1/users/:id
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  #POST /users
  def create
    @user = User.new(user_params)
    if @user.save
        render json: @user, status: 200
    else
        render error: {error: 'Unable to create User.'}, status: 400
    end
  end

  #PUT /api/v1/users/:id
  def update
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: @user.errors, status: 422
    end
  end

  def destroy
    if @user.nil?
      render json: {errors: 'User not found.'}, status: 200
    elsif @user.destroy
      render json: @user, status: 200
    else
      render error: {error: 'Unable to delete User.'}, status: 400
    end
  end

  def user_params
    params.require(:user).permit(:full_name,:birth_date,:gender,:image_url)
  end
end
