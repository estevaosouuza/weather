select.onchange = function () {
    const selectedCityID = this.value;
    getLatLong(selectedCityID)
    getClima(select)
  }
  
  