import { Link, useParams } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipes";
import { useState } from "react";

function Details() {
  const { id } = useParams();
  const { recipes, loading, error } = useRecipes({});
  console.log("Recipes:", recipes);

  return (
    <div className="container">
      <div className="relative flex p-0 mt-25">
        <h2 className="relative z-10 text-[42px] font-bold max-[375px]:text-[36px] max-[375px]:leading-[38px] max-[375px]:mb-2 text-n900">
          More recipes
        </h2>
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
              <ul className="grid grid-cols-3 gap-8 my-6 max-[1200px]:grid-cols-2 max-[900px]:grid-cols-1 items-center justify-center p">
                {recipes.data
                  .filter((recipe) => recipe.id != id)
                  .slice(0, 3)
                  .map((recipe, index) => {
                    const url = recipe.image.small.replace("./", "../../");
                    return (
                      <li
                        key={index}
                        className="my-8 p-2 shadow-[0px_0px_2px_0.1px_black] rounded-xl hover:scale-[1.01] p transition-transform duration-200 ease-out"
                      >
                        <picture>
                          <source media="min-width:780px" srcSet={url} />
                          <source media="max-width:780px" srcSet={url} />
                          <source />
                          <img
                            src={url}
                            alt={recipe.title}
                            className="max-w-full rounded-xl w-full p"
                          />
                        </picture>
                        <div className="flex flex-col items-start gap-4 justify-start mt-4 p">
                          <h2 className="p pl-2 font-bold text-[15px] truncate max-w-full">
                            {recipe.title}
                          </h2>
                          <p className="p pl-2 text-[13px]">
                            {recipe.overview}
                          </p>
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
                            <Link
                              to={`/details/${recipe.id}`}
                              className="w-full p"
                            >
                              <button className="btn fbb-2 w-full h-12 p">
                                View Recipe
                              </button>
                            </Link>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-90 h-20 bg-white shadow-[0px_0px_2px_0.1px_black] rounded-lg">
                  <h2 className="text-xl tracking-[8px]">No recipes found.</h2>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Details;
