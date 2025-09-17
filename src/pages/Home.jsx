import { Link } from "react-router-dom";
import ReadyToCookSmarter from "../components/ReadyToCookSmarter";

function Home() {
  return (
    <header>
      <div className="container">
        <div className="flex flex-col items-center justify-center max-[768px]:items-start max-[768px]:text-start text-center gap-6 max-[375px]:gap-0 my-25">
          <div className="relative flex flex-col items-center justify-center max-[768px]:items-start p-0 m-0">
            <h1 className="relative z-10 text-[72px] max-[480px]:text-[42px] max-[768px]:text-6xl font-bold text-n900">
              <span
                className="absolute left-0 bottom-3 max-[768px]:bottom-1 max-[1070px]:left-10 max-[990px]:left-6 max-[950px]:left-0 max-[1070px]:bottom-33 z-0 h-[39px] w-[270px] max-[768px]:w-[220px] max-[768px]:h-[32px] bg-o500 opacity-70
                max-[750px]:bottom-15 max-[480px]:w-[160px] max-[480px]:bottom-10 max-[910px]:left-10 max-[830px]:left-5 max-[800px]:left-0
              "
              ></span>
              <span className="relative z-10">Healthy meals, zero fuss</span>
            </h1>
            <p className="text-n800 text-xl mt-4 max-w-[540px] max-[450px]:text-[16px]">
              Discover eight quick, whole-food recipes that you can cook
              tonight—no processed junk, no guesswork.
            </p>
          </div>
          <Link to="/about">
            <button className="p z-10 mt-6 fbb btn w-[167px] h-[52px] hover:opacity-95 transition-all duration-200 ease-out active:opacity-85 active:scale-95">
              Start exploring
            </button>
          </Link>
          <img
            className="mt-15 max-[375px]:mt-10 rounded-lg max-w-full"
            src="../../assets/images/image-home-hero-large.webp"
            alt="hero-img"
          />
        </div>
        <div className="flex flex-col justify-between gap-20 max-[375px]:gap-8 max-[940px]:text-start text-center w-full my-40">
          <h3 className="text-[48px] font-bold mb-5 max-[940px]:mb-0 max-[940px]:text-[42px]">
            What you’ll get
          </h3>
          <ul className="flex max-[940px]:flex-col justify-between gap-10 text-start">
            <li>
              <ul className="flex flex-col gap-2">
                <li>
                  <img
                    src="../../assets/images/icon-whole-food-recipes.svg"
                    alt="img"
                    className="mb-3"
                  />
                </li>
                <li>
                  <h4 className="text-[22px] font-semibold">
                    Whole-food recipes
                  </h4>
                </li>
                <li>
                  <p className="max-[375px]:mr-6">
                    Each dish uses everyday, unprocessed ingredients.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-2">
                <li>
                  <img
                    src="../../assets/images/icon-minimum-fuss.svg"
                    alt="img"
                    className="mb-3"
                  />
                </li>
                <li>
                  <h4 className="text-[22px] font-semibold">Minimum fuss</h4>
                </li>
                <li>
                  <p className="max-[375px]:mr-6">
                    All recipes are designed to make eating healthy quick and
                    easy.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-2">
                <li>
                  <img
                    src="../../assets/images/icon-search-in-seconds.svg"
                    alt="img"
                    className="mb-3"
                  />
                </li>
                <li>
                  <h4 className="text-[22px] font-semibold">
                    Search in seconds
                  </h4>
                </li>
                <li>
                  <p className="max-[375px]:mr-6">
                    Filter by name or ingredient and jump straight to the recipe
                    you need.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex max-[1280px]:flex-col max-[1280px]:items-start items-center justify-between gap-15 max-[1280px]:gap-10 mb-25">
          <div className="flex flex-col gap-5 max-[1280px]:gap-[6px] max-w-[500px] max-[1280px]:mr-4">
            <h2 className="text-4xl font-bold max-[1280px]:mb-2">
              Built for real life
            </h2>
            <p>
              Cooking shouldn’t be complicated. These recipes come in under 30
              minutes of active time, fit busy schedules, and taste good enough
              to repeat.
            </p>
            <p>
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>
          <img
            src="../../assets/images/image-home-real-life-small.webp"
            alt="img"
            className="rounded-lg max-w-full"
          />
        </div>
        <ReadyToCookSmarter />
      </div>
    </header>
  );
}

export default Home;
