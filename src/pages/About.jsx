import ReadyToCookSmarter from "../components/ReadyToCookSmarter";

function About() {
  return (
    <header>
      <div className="container">
        <div className="flex max-[1280px]:flex-col max-[1280px]:items-start items-center justify-between gap-15 max-[1280px]:gap-10 my-25">
          <div className="flex flex-col gap-5 max-[1280px]:gap-[6px] max-w-[500px] max-[1280px]:mr-4">
            <span className="bg-o500 w-[90px] flex items-center justify-center rounded-sm">
              Our mission
            </span>
            <h2 className="text-4xl font-bold max-[1280px]:mb-2">
              Help more people cook nourishing meals, more often.
            </h2>
            <p>
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p>
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <img
            src="../../assets/images/image-about-our-mission-small.webp"
            alt="img"
            className="rounded-lg max-w-full"
          />
        </div>
        <div className="flex relative max-[1180px]:flex-col max-[1180px]:items-start items-center justify-between gap-15 max-[1180px]:gap-10 my-25">
          <h2 className="text-4xl absolute max-[1180px]:relative left-0 top-0 font-bold max-[1280px]:mb-2">
            Why we exist
          </h2>
          <ul className="flex flex-col ml-[35%] max-[1180px]:ml-0 gap-10 max-[1280px]:gap-[6px] max-[1280px]:mr-4">
            <li>
              <div className="flex items-center translate-x-[-73.5px] max-[1180px]:translate-x-0 gap-4">
                <img
                  src="../../assets/images/icon-bullet-point.svg"
                  alt="img"
                />
                <h4 className="text-[22px] font-semibold">
                  Cut through the noise.
                </h4>
              </div>
              <p className="max-[1180px]:translate-x-[73.5px] max-[380px]:translate-x-[50px] max-[380px]:max-w-[245px] max-[380px]:text-xs max-[1180px]:max-w-[600px]">
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
              </p>
            </li>
            <li>
              <div className="flex items-center translate-x-[-73.5px] max-[1180px]:translate-x-0 gap-4">
                <img
                  src="../../assets/images/icon-bullet-point.svg"
                  alt="img"
                />
                <h4 className="text-[22px] font-semibold">
                  Empower home kitchens.
                </h4>
              </div>
              <p className="max-[1180px]:translate-x-[73.5px] max-[380px]:translate-x-[50px] max-[380px]:max-w-[245px] max-[380px]:text-xs max-[1180px]:max-w-[600px]">
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
              </p>
            </li>
            <li>
              <div className="flex items-center translate-x-[-73.5px] max-[1180px]:translate-x-0 gap-4">
                <img
                  src="../../assets/images/icon-bullet-point.svg"
                  alt="img"
                />
                <h4 className="text-[22px] font-semibold">
                  Make healthy look good.
                </h4>
              </div>
              <p className="max-[1180px]:translate-x-[73.5px] max-[380px]:translate-x-[50px] max-[380px]:max-w-[245px] max-[380px]:text-xs max-[1180px]:max-w-[600px]">
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex relative max-[1180px]:flex-col max-[1180px]:items-start items-center justify-between gap-15 max-[1180px]:gap-10 my-25">
          <h2 className="text-[32px] absolute max-[1180px]:relative left-0 top-0 font-bold max-[1280px]:mb-2">
            Our food philosophy
          </h2>
          <ul className="flex flex-col ml-[35%] max-[1180px]:ml-0 gap-10 max-[1280px]:gap-[6px] max-[1280px]:mr-4">
            <li>
              <div className="flex items-center translate-x-[-73.5px] max-[1180px]:translate-x-0 gap-4">
                <img
                  src="../../assets/images/icon-bullet-point.svg"
                  alt="img"
                />
                <h4 className="text-[22px] font-semibold">
                  Whole ingredients first.
                </h4>
              </div>
              <p className="max-[1180px]:translate-x-[73.5px] max-[380px]:translate-x-[50px] max-[380px]:max-w-[245px] max-[380px]:text-xs max-[1180px]:max-w-[600px]">
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </li>
            <li>
              <div className="flex items-center translate-x-[-73.5px] max-[1180px]:translate-x-0 gap-4">
                <img
                  src="../../assets/images/icon-bullet-point.svg"
                  alt="img"
                />
                <h4 className="text-[22px] font-semibold">
                  Flavor without compromise.
                </h4>
              </div>
              <p className="max-[1180px]:translate-x-[73.5px] max-[380px]:translate-x-[50px] max-[380px]:max-w-[245px] max-[380px]:text-xs max-[1180px]:max-w-[600px]">
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </li>
            <li>
              <div className="flex items-center translate-x-[-73.5px] max-[1180px]:translate-x-0 gap-4">
                <img
                  src="../../assets/images/icon-bullet-point.svg"
                  alt="img"
                />
                <h4 className="text-[22px] font-semibold">Respect for time.</h4>
              </div>
              <p className="max-[1180px]:translate-x-[73.5px] max-[380px]:translate-x-[50px] max-[380px]:max-w-[245px] max-[380px]:text-xs max-[1180px]:max-w-[600px]">
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </li>
            <li>
              <div className="flex items-center translate-x-[-73.5px] max-[1180px]:translate-x-0 gap-4">
                <img
                  src="../../assets/images/icon-bullet-point.svg"
                  alt="img"
                />
                <h4 className="text-[22px] font-semibold">
                  Sustainable choices.
                </h4>
              </div>
              <p className="max-[1180px]:translate-x-[73.5px] max-[380px]:translate-x-[50px] max-[380px]:max-w-[245px] max-[380px]:text-xs max-[1180px]:max-w-[600px]">
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex max-[1280px]:flex-col max-[1280px]:items-start items-center justify-between gap-15 max-[1280px]:gap-10 my-25">
          <div className="flex flex-col gap-5 max-[1280px]:gap-[6px] max-w-[500px] max-[1280px]:mr-4">
            <h2 className="text-4xl font-bold max-[1280px]:mb-2">
              Beyond the plate
            </h2>
            <p>
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="list-disc pl-5">
              <li>Encourage family dinners and social cooking.</li>
              <li>
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li>
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
          <img
            src="../../assets/images/image-about-beyond-the-plate-small.webp"
            alt="img"
            className="rounded-lg max-w-full"
          />
        </div>
        <ReadyToCookSmarter />
      </div>
    </header>
  );
}

export default About;
