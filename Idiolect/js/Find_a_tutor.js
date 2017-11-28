

const APIKey = "b02f47db-6c8f-4622-ab83-cb558e4b02f0";


axios.get(`https://data.wyzant.com/feeds/downloadFeed?apiKey=b02f47db-6c8f-4622-ab83-cb558e4b02f0&feedFormat=JSON&maxResults=100`).then(function(response){
  response.data.forEach(function(tutor){
    document.getElementById("main").innerHTML = `
        <div class="tutor">
        <h3>${tutor.Name}</h3>
        <h4><span class="city">${tutor.City}</span>, <span class="state">${tutor.State}</span>
        <p>Available for $${tutor.FeePerHour}/hr</p>
        <img src="${tutor.TutorPictures && tutor.TutorPictures[0]}" />
        </div>
      `;
  });
  
});

