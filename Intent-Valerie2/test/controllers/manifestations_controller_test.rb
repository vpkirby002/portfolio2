require 'test_helper'

class ManifestationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifestation = manifestations(:one)
  end

  test "should get index" do
    get manifestations_url
    assert_response :success
  end

  test "should get new" do
    get new_manifestation_url
    assert_response :success
  end

  test "should create manifestation" do
    assert_difference('Manifestation.count') do
      post manifestations_url, params: { manifestation: { immediate: @manifestation.immediate, long_term: @manifestation.long_term, short_term: @manifestation.short_term } }
    end

    assert_redirected_to manifestation_url(Manifestation.last)
  end

  test "should show manifestation" do
    get manifestation_url(@manifestation)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifestation_url(@manifestation)
    assert_response :success
  end

  test "should update manifestation" do
    patch manifestation_url(@manifestation), params: { manifestation: { immediate: @manifestation.immediate, long_term: @manifestation.long_term, short_term: @manifestation.short_term } }
    assert_redirected_to manifestation_url(@manifestation)
  end

  test "should destroy manifestation" do
    assert_difference('Manifestation.count', -1) do
      delete manifestation_url(@manifestation)
    end

    assert_redirected_to manifestations_url
  end
end
