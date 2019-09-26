class Api::PostsController < ApplicationController
  # only have to worry about the CRUD 

  def index
    render json: Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: { errors: @post.erros }, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.erros }, status: :unprocessable_entity
    end
  end

  def destroy
    Post.find(params[:id]).destroy
    render json: { message: 'post deleted' }
  end

  private
    def post_params
      # { post: {title: '', body: ''}}  this is what is being permitted
       params.require(:post).permit(:title, :body) 
    end

end
