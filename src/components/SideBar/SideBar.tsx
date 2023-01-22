import Menu from "../Ui/Menu/Menu";
import MenuItem from "../Ui/Menu/MenuItem";
import { SlNotebook } from "react-icons/sl";
import { BiUserCircle } from "react-icons/bi";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { BsGearFill } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
export interface SideBarProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
function SideBar(props: SideBarProps) {
  return (
    <div
      className={`flex flex-col transition-[width] ease-linear duration-300  ${
        props.expanded ? "w-1/6" : "w-[3%]"
      } h-full small:w-1/12`}
    >
      <div
        className={`flex flex-row h-fit p-2 items-start text-white ${
          props.expanded ? "justify-between" : "justify-center"
        }`}
      >
        <span className={`text-lg ${!props.expanded ? "hidden" : ""}`}>
          Notes
        </span>
        <div className="flex items-center">
          {props.expanded ? (
            <HiOutlineChevronDoubleLeft
              size={28}
              className="cursor-pointer"
              onClick={() => props.setExpanded((v) => !v)}
            />
          ) : (
            <HiOutlineChevronDoubleRight
              size={28}
              className="cursor-pointer"
              onClick={() => props.setExpanded((v) => !v)}
            />
          )}
        </div>
      </div>
      <Menu>
        <MenuItem
          title={"Notebooks"}
          icon={<SlNotebook size={28} />}
          expanded={props.expanded}
        />
      </Menu>
      <div
        className={`text-white h-1/10 p-4 flex flex-col bg-eerie-black-500 ${
          props.expanded ? "justify-around" : "justify-center"
        }`}
      >
        {props.expanded ? (
          <>
            <span>Rassaa Wael</span>
            <div className="flex items-center gap-1">
              <BsFillCircleFill className=" text-green-600" />
              <span>Online</span>
            </div>
          </>
        ) : (
          <BiUserCircle size={28} />
        )}
      </div>
    </div>
  );
}

export default SideBar;
