function weather() {
  var location = document.getElementById("location");
  var apiKey = "ce4206500db0e67c73e3e4d2112e2687";
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?lang=da&units=auto",
      function(data) {
        let summary = data.currently.summary;
        $("#minutely").html(`${summary}`);
      }
    );
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

weather();
