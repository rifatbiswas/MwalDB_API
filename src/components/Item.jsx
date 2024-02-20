/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Item = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => (
            <div key={item.id} className="w-[200px] rounded-lg bg-black p-2" onClick={()=>{navigate(`/${item.idMeal}`)}}>
              <img
                src={item.strMealThumb}
                alt=""
                className="w-full rounded-xl"
              />
              <h3 className="font-semibold text-[18px] text-white">
                {item.strMeal}
              </h3>
            </div>
          ))}
    </>
  );
};

export default Item;
