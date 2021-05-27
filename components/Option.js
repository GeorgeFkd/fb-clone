import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function Option({ Icon, prompt }) {
  return (
    <div className="flex space-x-4 rounded-md   hover:bg-gray-300 items-center cursor-pointer ">
      <Icon
        className="text-gray-500 rounded-full cursor-pointer p-1 bg-gray-700"
        fontSize="large"
      />

      <p className={` text-white font-semibold flex-grow-1`}>{prompt}</p>
      <ArrowForwardIosIcon
        className=" text-gray-500 rounded-full cursor-pointer p-1 bg-gray-700"
        style={{ marginLeft: "auto" }}
        fontSize="large"
      />
    </div>
  );
}

export default Option;
