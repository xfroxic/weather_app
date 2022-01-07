const DOM_Elements = {
  weather_table: '.weather-table'
}

const create_row = (forecast, high, low, humidity) => {
  const html =
      `<tr class="remove">
        <td>${forecast}</td>
        <td>${high}</td>
        <td>${low}</td>
        <td>${humidity}</td>
      </tr>`;
  
      document.querySelector(DOM_Elements.weather_table).insertAdjacentHTML('beforeend', html)
}

const load_data = async () => {
  removeArr = document.getElementsByClassName("remove");
  if (removeArr.length > 0) {
      removeArr[0].remove();
  }
  let city = document.querySelector('#city');
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=210bd89c9bef633706a4a6a0f3181de5&units=imperial`)
      .then(response => response.json())
      .then(data => {
          create_row(data.main.temp_max, data.main.temp_min, data.weather[0].main, data.main.humidity)
      })
}

const form = document.querySelector('#locationDataForm')

form.addEventListener('submit', ( e ) => {
  e.preventDefault();
  load_data();
} )