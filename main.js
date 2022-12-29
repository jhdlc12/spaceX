//fetch data of space X API
fetch(" https://api.spacexdata.com/v4/launches/")
  .then((data) => data.json())
  .then((launches) => generateHtml(launches));

// display the list of all launches from space X
const generateHtml = (data) => {
  let html = ``;
  console.log(data[0]);
  data.forEach((element) => {
    html += `<div class=launch>
    
    
    <span>Flight Number ${element.flight_number}: </span>
    <span>${element.name}(${element.date_utc})</span>
    <div class="details">Details:${element.details}</div>
    </div>`;
  });

  document.getElementById("launches").innerHTML = html;
};
