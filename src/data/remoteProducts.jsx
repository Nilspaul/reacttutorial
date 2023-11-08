/**
 * Ankommende Daten aufbereiten, um sie weiterzuverarbeiten
 * 
 * @param [] data 
 * @returns 
 */
function prepareProductsData(data) {
  let tmp = [];
  data.forEach((value, index) => {
    tmp.push(
      {
        key: value.idCategory,
        title: value.strCategory,
        desc: value.strCategoryDescription,
        image: value.strCategoryThumb
      }
    )
  });
  return tmp;
}

const remoteProducts = async () => {
  try {
    // Await the response of the fetch call
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    // Rückgabe als JSON-Speichern
    let json = await response.json();

    // Daten aufbereiten
    return prepareProductsData(json.categories);
  } catch (error) {
    console.error('Fehler bei der Anfrage:', error);
    return [];
  }
};

export default remoteProducts