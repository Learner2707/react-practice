export const getPetsData = async () => {
  const petsData = [];
  await fetch(
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      petsData.push(...response);
    })
    .catch((err) => {
      return console.log(err);
    });
    console.log('petsData', petsData)
  return petsData;
};
