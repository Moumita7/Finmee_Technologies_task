import LeftScrol from "./LeftScrol";
import RideSide from "./RideSide";

const Main = () => {
  return (
    <div className="border border-black w-[100%] h-[100vh] flex bg-[#0D1117]">
    {/* left slide */}
      <div className="w-[25%] border">
        <LeftScrol />
      </div>
      {/* right slide */}
      <div className="w-[75%] border flex text-white">

      <RideSide/>
      </div>
     
    </div>
  );
};

export default Main;
