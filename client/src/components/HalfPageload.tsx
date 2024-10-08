const HalfpageSpinner = () => {
  return (

      <div className="w-1/2 h-full flex items-center  flex-col content-between justify-center overflow-hidden absolute bg-white  ">
        <svg
          className=" animate-spin rounded-full border-4 border-blue-500 border-t-transparent h-8 w-8 "
          viewBox="0 0 24 24"
        ></svg>
        <p> Processing...</p>
        <p>  Please note this project is ran on a free instance so the loading time can take upto 50 secs or more</p>
      </div>

  );
};

export default HalfpageSpinner;
