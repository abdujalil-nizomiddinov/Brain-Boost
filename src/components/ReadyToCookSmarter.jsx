import { Link } from "react-router-dom";

function ReadyToCookSmarter() {
  return (
    <div
      className="
        bg-n200 relative overflow-hidden max-[940px]:gap-2
        h-[396px] max-[560px]:h-[285px] rounded-lg flex flex-col justify-center items-center gap-4 text-center
    "
    >
      <h2 className="z-10 text-5xl font-bold text-n900 max-[940px]:text-3xl max-[560px]:text-2xl mx-6">
        Ready to Cook Smarter ?
      </h2>
      <p className="z-10 text-xl text-n800 max-[940px]:text-[16px] max-[560px]:text-xs mx-6">
        Hit the button, pick a recipe, and get dinner on the table—fast.
      </p>
      <Link to="/recipes" className="z-10 w-full p ">
        <button className="p z-10 mt-6 fbb btn w-[167px] h-[52px] hover:opacity-95 transition-all duration-200 ease-out active:opacity-85 active:scale-95">
          Browse recipes
        </button>
      </Link>
      <div className="z-0">
        <img
          className="absolute bottom-0 left-0 w-60 translate-x-[-10%] translate-y-[10%]
          max-[768px]: max-[940px]:w-40 max-[560px]:w-25
          "
          src="../../assets/images/pattern-fork.svg"
          alt="pattern-fork"
        />
        <img
          className="absolute top-0 right-0 w-60 translate-x-[15%] translate-y-[-10%]
          max-[768px]: max-[940px]:w-40 max-[560px]:w-25
          "
          src="../../assets/images/pattern-knife.svg"
          alt="pattern-knife"
        />
      </div>
    </div>
  );
}

export default ReadyToCookSmarter;
