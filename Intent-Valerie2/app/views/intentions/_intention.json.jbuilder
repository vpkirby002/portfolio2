json.extract! intention, :id, :created_at, :updated_at
json.url intention_url(intention, format: :json)


$('#calendar').fullCalendar();