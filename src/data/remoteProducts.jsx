/**
 * Ankommende Daten aufbereiten, um sie weiterzuverarbeiten
 * 
 * @param [] data 
 * @returns 
 */
function prepareProductData(data) {
  if(!data) {
    return [];
  }
  let tmp = [];
  data.forEach((value, index) => {
    tmp.push(
      {
        key: value.idMeal,
        title: value.strMeal,
        image: value.strMealThumb
      }
    )
  });
  return tmp;
}

const remoteProducts = async (category) => {
  try {
    // Await the response of the fetch call
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category);

    // Rückgabe als JSON-Speichern
    let json = await response.json();

    // Daten aufbereiten
    return prepareProductData(json.meals);
  } catch (error) {
    console.error('Fehler bei der Anfrage:', error);
    return [];
  }
};

export default remoteProducts