import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useRecipes } from "../hooks/useRecipes";

function Recipes() {
  const [searchValue, setSearchValue] = useState("");
  const [obj, setObj] = useState({});
  const [openPrep, setOpenPrep] = useState(false);
  const [selectedPrep, setSelectedPrep] = useState("");
  const [openCook, setOpenCook] = useState(false);
  const [selectedCook, setSelectedCook] = useState("");
  const labelPrep = "Max Prep Time";
  const optionsPrep = ["0", "5", "10"];
  const labelCook = "Max Cook Time";
  const optionsCook = ["0", "5", "10", "15", "20"];
  const { recipes, loading, error } = useRecipes(obj);
  console.log("Recipes:", recipes);

  useEffect(() => {
    setObj({
      search: searchValue,
      prepMinutes: selectedPrep,
      cookMinutes: selectedCook,
    });
  }, [selectedPrep, selectedCook, searchValue]);

  return (
    <div className="container">
      <div className="relative flex flex-col items-center justify-center text-center max-[768px]:text-start max-[768px]:items-start p-0 my-25">
        <h1 className="relative z-10 text-[42px] font-bold max-[375px]:text-[36px] max-[375px]:leading-[38px] max-[375px]:mb-2 text-n900">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-n800 text-xl mt-4 max-w-[540px] max-[450px]:text-[16px] max-[375px]:mr-4">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
      <div className="w-full flex max-[560px]:flex-col max-[560px]:gap-4 max-[560px]:items-start items-center justify-between">
        <div className="flex max-[940px]:flex-col p gap-4">
          <div className="relative inline-block p text-left">
            <button
              onClick={() => setOpenPrep(!openPrep)}
              className={`
                inline-flex p items-center justify-between w-[170px] rounded-md border border-transparent hover:border-green-900 focus-visible:border-green-900 transition-all duration-200 shadow-[0px_0px_2px_0.1px_black] ease-out px-4 py-2 text-green-900 font-medium hover:bg-green-50 focus:outline-none
              `}
            >
              {selectedPrep || labelPrep}
              <FiChevronDown
                className={`ml-2 transition-transform duration-150 ease-in-out p ${
                  openPrep ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`
                  absolute p w-[170px] rounded-md shadow-lg bg-white border z-10 transition-all duration-150 ease-in-out
                  ${
                    openPrep
                      ? "scale-y-100 mt-2 p-4 translate-y-[0px] *:text-green-900"
                      : "translate-y-[-70px] scale-y-0 mt-0 p-0 *:text-white"
                  }
                `}
            >
              <div className="flex p flex-col gap-3">
                {optionsPrep.map((o) => (
                  <label
                    key={o}
                    className="checkbox-labelPrep p flex items-center gap-2"
                  >
                    <input
                      className="checkbox p"
                      type="radio"
                      name={labelPrep}
                      value={o}
                      checked={selectedPrep === o}
                      onChange={() => {
                        setSelectedPrep(o);
                        setOpenPrep(false);
                      }}
                    />
                    <span className="check p"></span>
                    <span className="p">{o}</span>
                  </label>
                ))}

                <button
                  onClick={() => {
                    setSelectedPrep("");
                    setOpenPrep(false);
                  }}
                  className="text-sm p text-red-600 hover:underline text-left mt-2"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="relative inline-block p text-left">
            <button
              onClick={() => setOpenCook(!openCook)}
              className={`
                  inline-flex p items-center z-20 relative justify-between w-[170px] rounded-md border border-transparent hover:border-green-900 focus-visible:border-green-900 transition-all duration-200 shadow-[0px_0px_2px_0.1px_black] ease-out px-4 py-2 text-green-900 font-medium hover:bg-green-50 focus:outline-none
              `}
            >
              {selectedCook || labelCook}
              <FiChevronDown
                className={`ml-2 transition-transform duration-150 ease-in-out p ${
                  openCook ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`
      absolute p w-[170px] rounded-md shadow-lg bg-white border z-10 transition-all duration-150 ease-in-out
      ${
        openCook
          ? "scale-y-100 mt-2 p-4 translate-y-[0px] *:text-green-900"
          : "translate-y-[-120px] scale-y-0 mt-0 p-0 *:text-white"
      }
    `}
            >
              <div className="flex p flex-col gap-3">
                {optionsCook.map((o) => (
                  <label
                    key={o}
                    className="checkbox-labelPrep p flex items-center gap-2"
                  >
                    <input
                      className="checkbox p"
                      type="radio"
                      name={labelCook}
                      value={o}
                      checked={selectedCook === o}
                      onChange={() => {
                        setSelectedCook(o);
                        setOpenCook(false);
                      }}
                    />
                    <span className="check p"></span>
                    <span className="p">{o}</span>
                  </label>
                ))}

                <button
                  onClick={() => {
                    setSelectedCook("");
                    setOpenCook(false);
                  }}
                  className="text-sm p text-red-600 hover:underline text-left mt-2"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[310px]">
          <img
            src="../../assets/images/icon-search.svg"
            alt="search"
            className="absolute inset-y-0 left-0 my-auto ml-3 h-5 w-5 text-gray-500"
          />
          <input
            className="
            w-[310px] h-[47px] rounded-md border-2 border-transparent shadow-[0px_0px_2px_0.1px_black] py-2 pl-10 pr-4
          text-gray-700 placeholder-gray-500 hover:border-green-900 focus:border-green-900 outline-none transition-all duration-200 ease-out !cursor-text
            [appearance:textfield] [&::-webkit-search-cancel-button]:hidden
          "
            placeholder="Search everthing..."
            type="search"
            onChange={(e) => {
              if (e.target.value === "") {
                setSearchValue("");
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchValue(e.target.value);
              }
            }}
          />
        </div>
      </div>
      <div className="relative w-full min-h-[300px]">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-80 h-20 bg-white shadow-[0px_0px_2px_0.1px_black] rounded-lg">
              <h2 className="text-3xl tracking-[10px]">Loading...</h2>
            </div>
          </div>
        ) : (
          <>
            {recipes && recipes.data?.length > 0 ? (
              <ul className="grid grid-cols-3 gap-8 my-16 max-[1200px]:grid-cols-2 max-[900px]:grid-cols-1 items-center justify-center p">
                {recipes.data.map((recipe, index) => {
                  return (
                    <li
                      key={index}
                      className="my-8 p-2 shadow-[0px_0px_2px_0.1px_black] rounded-xl hover:scale-[1.01] p transition-transform duration-200 ease-out"
                    >
                      <picture>
                        <source
                          media="min-width:780px"
                          srcSet={recipe.image.large}
                        />
                        <source
                          media="max-width:780px"
                          srcSet={recipe.image.small}
                        />
                        <source />
                        <img
                          src={recipe.image.small}
                          alt={recipe.title}
                          className="max-w-full rounded-xl w-full p"
                        />
                      </picture>
                      <div className="flex flex-col items-start gap-4 justify-start mt-4 p">
                        <h2 className="p pl-2 font-bold text-[15px]">
                          {recipe.title}
                        </h2>
                        <p className="p pl-2 text-[13px]">{recipe.overview}</p>
                        <div className="w-full">
                          <span className="p pl-2 flex items-center justify-start gap-2 mb-2">
                            <img
                              src="../../assets/images/icon-servings.svg"
                              alt="img"
                            />
                            {recipe.servings} servings
                          </span>
                          <div className="flex gap-4 pl-2">
                            <span className="p flex items-center justify-center gap-2 mb-2">
                              <img
                                src="../../assets/images/icon-cook-time.svg"
                                alt="img"
                              />
                              {recipe.cookMinutes} mins
                            </span>
                            <span className="p flex items-center justify-center gap-2 mb-2">
                              <img
                                src="../../assets/images/icon-prep-time.svg"
                                alt="img"
                              />
                              {recipe.prepMinutes} mins
                            </span>
                          </div>
                          <button className="btn fbb-2 w-full h-12 p">
                            View Recipe
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No recipes found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Recipes;
