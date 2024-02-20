import { useEffect, useState } from "react";
import Item from "./Item";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  const [item, setItem] = useState();

  const [show, setShow] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  const searchRecipe = (event) => {
    if (event.key === "Enter") {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="items-center my-auto mt-0 text-center w-">
          <div className="heading">
            <h1 className="pt-8 m-4 text-3xl font-bold">
              Seasch Your Food Recipe
            </h1>
            <h4 className="mt-5 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              nulla ratione nam aliquam optio ipsa atque alias eum est corrupti
              laudantium voluptate, dolorum quae architecto illo omnis dolor!
              Voluptas, illum.
            </h4>
          </div>
          <div>
            <input
              type="search"
              className=" mt-4 w-[400px] h-10 border-none outline-none rounded-2xl px-4 py-2"
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchRecipe}
            />
          </div>
          <div className="container w-[80%] mt-[25px] mx-auto grid grid-flow-row grid-cols-1 sm:grid-cols-2 sm:justify-center sm:items-center md:grid-cols-3 lg:grid-cols-4 gap-8">
            {show ? <Item data={item} /> : <p>Not Found</p>}
          </div>

          <div className="flex my-8 ">
            <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
