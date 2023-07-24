const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);
function PortfolioItem({ title, imgUrl, stack, link, githubRep }) {
  return (
    <div
      className="border-2 border-stone-900 dark:border-white
        rounded-md overflow-hidden"
    >
      <a href={link ? link : githubRep} target="_blank" rel="noreferrer">
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover
         cursor-pointer"
        />
      </a>
      <div className="w-full p-4 ">
        <h3
          className="text-lg md:text-xl mb-2
            md:mb-3 font-semibold dark:text-white"
        >
          {title}
        </h3>
        <p
          className="flex flex-wrap gap-2 flex-row
            items-center justify-start text-xs md:text-sm dark:text-white"
        >
          {stack.map((item, index) => (
            <span
              className="inline-block px-2
                    py-1 font-semibold border-2 border-stone-900 
                    dark:border-white
                    rounded-md"
              key={index}
            >
              {item}
            </span>
          ))}

          <a href={githubRep} target="_blank" rel="noreferrer noopener">
            <span
              className="inline-block px-2
                    py-1 font-semibold border-2 border-stone-900 
                    dark:border-white
                    rounded-md"
            >
              <span className="flex">
                <span className="pr-1">Github Repository</span>{" "}
                <span>{icon}</span>
              </span>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
