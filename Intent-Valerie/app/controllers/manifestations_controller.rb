class ManifestationsController < ApplicationController
  before_action :set_manifestation, only: [:show, :edit, :update, :destroy]

  # GET /manifestations
  # GET /manifestations.json
  def index
    @manifestations = Manifestation.all
  end

  # GET /manifestations/1
  # GET /manifestations/1.json
  def show
  end

  # GET /manifestations/new
  def new
    @manifestation = Manifestation.new
  end

  # GET /manifestations/1/edit
  def edit
  end

  # POST /manifestations
  # POST /manifestations.json
  def create
    @manifestation = Manifestation.new(manifestation_params)

    respond_to do |format|
      if @manifestation.save
        format.html { redirect_to @manifestation, notice: 'Manifestation was successfully created.' }
        format.json { render :show, status: :created, location: @manifestation }
      else
        format.html { render :new }
        format.json { render json: @manifestation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manifestations/1
  # PATCH/PUT /manifestations/1.json
  def update
    respond_to do |format|
      if @manifestation.update(manifestation_params)
        format.html { redirect_to @manifestation, notice: 'Manifestation was successfully updated.' }
        format.json { render :show, status: :ok, location: @manifestation }
      else
        format.html { render :edit }
        format.json { render json: @manifestation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manifestations/1
  # DELETE /manifestations/1.json
  def destroy
    @manifestation.destroy
    respond_to do |format|
      format.html { redirect_to manifestations_url, notice: 'Manifestation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manifestation
      @manifestation = Manifestation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manifestation_params
      params.require(:manifestation).permit(:immediate, :short_term, :long_term)
    end
end
