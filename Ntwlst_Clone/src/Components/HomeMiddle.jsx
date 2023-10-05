const HomeMiddle = () => {
  return (
    <div>
      <div className=" flex justify-center content-center    items-center w-[100%] h-[80vh]  ">
        <div className="flex items-center justify-between w-[95%]  ">
          <div className="w-[110%]  ">
            <h1 className="font-semibold text-6xl text-[#FF3A2D] tracking-wider">
              Mine-To-Mill-To-Mine{" "}
            </h1>
            <h1 className="font-semibold text-6xl text-[#FF3A2D] tracking-wider">
              Optimization
            </h1>
            <p className="text-[21px] pt-4 mt-4 tracking-wide ">
              NTWIST’s newest product unlocks up to $250/oz in previously
              inaccessible value in open pit gold mines by connecting siloed
              data sources like block models, fleet management systems,
              stockpile surveys, and plant instruments. This allows your company
              to better track material flow, and feed properties, identify
              plan/production discrepancies, and correct resource models and
              production plans.
            </p>
            <button className="bg-[#FF3A2D] hover:bg-[#FF3A2D] px-10  py-3 mt-16 rounded-md text-white font-semibold text-xl">
              Read More
            </button>
          </div>
          <div className=" flex justify-end pr-7 items-center ">
            <img
              className="w-[86%]"
              src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="flex justify-center content-center    items-center w-[100%] h-[80vh]  ">
        <div className="flex items-center justify-between w-[95%]  ">
          <div className=" flex  items-center">
            <img
              className="w-[100%]"
              src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
              alt=""
            />
          </div>
          <div className="w-[99%]  pl-28 ">
            <h1 className="font-semibold text-6xl text-[#FF3A2D] tracking-wider">
              Sustainability{" "}
            </h1>

            <p className="text-[21px] pt-4 mt-4 tracking-wide ">
              Environmental stewardship is a priority for NTWIST. We help our
              customers to minimize their sustainability impact on the planet.
              Emissions or environmental targets are used alongside productivity
              targets to define success for our customers. With the increasing
              relevance of carbon accounting and emissions tracking, NTWIST
              offers a suite of tools to increase visibility into environmental
              performance and help processing plants track, manage, optimize,
              and report key metrics.
            </p>
            <button className="bg-[#FF3A2D] hover:bg-[#FF3A2D] px-10  py-3 mt-16 rounded-md text-white font-semibold text-xl">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* 4th */}
      <div className=" flex justify-center content-center    items-center w-[100%] h-[80vh]  ">
        <div className="flex items-center justify-between w-[95%]  ">
          <div className="w-[70%] ">
            <h1 className="font-semibold text-6xl text-[#FF3A2D] tracking-wider">
              Mineral Processing{" "}
            </h1>

            <p className="text-[21px] pt-4 mt-4 tracking-wide ">
              NTWIST offers a number of solutions for mills, concentrators, and
              leach plants. Our solutions help operations to reduce the effect
              of feed variability, avoid downtime and increase peak throughput
              while decreasing energy and reagent consumption.
            </p>
            <button className="bg-[#FF3A2D] hover:bg-[#FF3A2D] px-10  py-3 mt-16 rounded-md text-white font-semibold text-xl">
              Read More
            </button>
          </div>
          <div className=" flex justify-end pr-7 items-center  ">
            <img
              className="w-[90%]"
              src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 5rd */}
      <div className="flex justify-center content-center    items-center w-[100%] h-[80vh]  ">
        <div className="flex items-center justify-between w-[95%]  ">
          <div className=" flex  items-center ">
            <img
              className="w-[100%]"
              src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
              alt=""
            />
          </div>
          <div className="w-[75%]  pl-24 ">
            <h1 className="font-semibold text-6xl text-[#FF3A2D] tracking-wider">
              Oil & Gas
            </h1>

            <p className="text-[21px] pt-4 mt-4 tracking-wide ">
              Oil and Gas plants require a high level of control and robustness
              in their operation due to the high risks to people and
              environment. NTWIST helps Oil & Gas customers to analyze
              historical data, identify opportunities for process control
              improvements, and reduce variability in any part of the process,
              thus providing enhanced reliability and safety.
            </p>
            <button className="bg-[#FF3A2D] hover:bg-[#FF3A2D] px-10  py-3 mt-16 rounded-md text-white font-semibold text-xl">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
