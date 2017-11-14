require 'test_helper'

class ModelControllerTest < ActionDispatch::IntegrationTest
<<<<<<< HEAD
  test "should get first_name:string" do
    get model_first_name:string_url
    assert_response :success
  end

  test "should get last_name:string" do
    get model_last_name:string_url
    assert_response :success
  end

  test "should get email:string" do
    get model_email:string_url
    assert_response :success
  end

  test "should get password:string" do
    get model_password:string_url
    assert_response :success
  end

=======
  # test "the truth" do
  #   assert true
  # end
>>>>>>> 8010b3e7275ea12c0b15f7c642b86625aa377715
end
