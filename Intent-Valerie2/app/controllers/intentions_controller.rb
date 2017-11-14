class IntentionsController < ApplicationController
  before_action :set_intention, only: [:show, :edit, :update, :destroy]

  # GET /intentions
  # GET /intentions.json
  def index
    @intentions = Intention.all
  end

  # GET /intentions/1
  # GET /intentions/1.json
  def show
  end

  # GET /intentions/new
  def new
    @intention = Intention.new
  end

  # GET /intentions/1/edit
  def edit
  end

  # POST /intentions
  # POST /intentions.json
  def create
    @intention = Intention.new(intention_params)

    respond_to do |format|
      if @intention.save
        format.html { redirect_to @intention, notice: 'Intention was successfully created.' }
        format.json { render :show, status: :created, location: @intention }
      else
        format.html { render :new }
        format.json { render json: @intention.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /intentions/1
  # PATCH/PUT /intentions/1.json
  def update
    respond_to do |format|
      if @intention.update(intention_params)
        format.html { redirect_to @intention, notice: 'Intention was successfully updated.' }
        format.json { render :show, status: :ok, location: @intention }
      else
        format.html { render :edit }
        format.json { render json: @intention.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /intentions/1
  # DELETE /intentions/1.json
  def destroy
    @intention.destroy
    respond_to do |format|
      format.html { redirect_to intentions_url, notice: 'Intention was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_intention
      @intention = Intention.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def intention_params
      params.fetch(:intention, {})
    end
end
