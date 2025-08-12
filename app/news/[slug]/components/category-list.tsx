import React from "react";

const faculties = [
  "Student ",
  "Seminar",
  "Research",
  "Event Admission",
  "Admission",
];

const CategoryList = () => {
  return (
    <div className="shadow-md bg-[#ffffff] p-[50px] ">
      <div className="pb-[20px]">
        <h3 className="font-bold text-[#292929] leading-[30px] text-[30px] font-heading">
          Category List
        </h3>
      </div>
      <div className="flex items-center gap-8 pb-[10px]">
        <ul className="flex flex-col gap-[6px]">
          {faculties.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <img
                src="/arrow-right-icon.png"
                alt="tick"
                className="w-[14px] h-[14px] object-contain"
              />
              <span className="text-[15px] font-medium text-[#292929] leading-[22.5px] ">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
