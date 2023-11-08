import aus from "../assets/aus.svg";
import { Select, MenuItem } from "@mui/material";
import "../App.css";

const Form = () => {
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-0 md:flex-row lg:flex-row  space-x-2 my-2 mx-2 items-center w-full mb-5">
        <div className="w-full">
          <p className="text-sm">Financial Year</p>
        </div>
        <div className="w-full">
          <Select value="fy23" className="bg-white h-10 w-full">
            <MenuItem value="fy23">FY 2023-24</MenuItem>
          </Select>
        </div>
        <div className="w-full">
          <p className="text-sm">Country</p>{" "}
        </div>
        <div className="w-full">
          <Select value="aus" className=" bg-white h-10 w-full">
            <MenuItem value="aus" className="h-10 text-xl ">
              {/* <img src={aus} className="" /> */}
              Australia
            </MenuItem>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Form;
