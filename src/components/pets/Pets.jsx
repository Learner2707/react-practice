import { useEffect, useState } from "react";
import "./pets.css";
function Pets() {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
      .then((resp) => resp.json())
      .then((resp) => setPetsData(resp))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="petsWrapper">
      {/* <> */}
        {petsData.map((item, index) => {
          return (
            <div className="pet" key={index}>
              {item.id}
            </div>
          );
        })}
      {/* </> */}
    </div>
  );
}

export default Pets;

// function Pets() {
//   const [pet,setPet]=useState();
//   useEffect(()=>{
//   let p = fetch(
//     "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
//   );
//   p.then((response) => {
//     return response.json();
//   })
//     .then((response) => {
//       // petsData.push(...response);
//       setPet(response)
//     })
//     .catch((err) => {
//       return console.log(err);
//     });
//  },[])
//   return (
//     <div className="petsWrapper">
//       <>
//         {pet?.map((item) => {
//           console.log(item);
//           return <div className="pet">{item.id}</div>;
//         })}
//       </>
//     </div>
//   );
// }
