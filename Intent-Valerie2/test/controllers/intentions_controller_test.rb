require 'test_helper'

class IntentionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @intention = intentions(:one)
  end

  test "should get index" do
    get intentions_url
    assert_response :success
  end

  test "should get new" do
    get new_intention_url
    assert_response :success
  end

  test "should create intention" do
    assert_difference('Intention.count') do
      post intentions_url, params: { intention: {  } }
    end

    assert_redirected_to intention_url(Intention.last)
  end

  test "should show intention" do
    get intention_url(@intention)
    assert_response :success
  end

  test "should get edit" do
    get edit_intention_url(@intention)
    assert_response :success
  end

  test "should update intention" do
    patch intention_url(@intention), params: { intention: {  } }
    assert_redirected_to intention_url(@intention)
  end

  test "should destroy intention" do
    assert_difference('Intention.count', -1) do
      delete intention_url(@intention)
    end

    assert_redirected_to intentions_url
  end
end
