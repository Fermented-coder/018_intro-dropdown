import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";

import toDoList from "../images/icon-todo.svg";
import calendars from "../images/icon-calendar.svg";
import bell from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

import Herods from "../images/image-hero-desktop.png";
import Heromb from "../images/image-hero-mobile.png";

export const Header = () => {
  const [show1, setShow1] = useState(false);
  const onClick1 = () => setShow1(!show1);

  const [show2, setShow2] = useState(false);
  const onClick2 = () => setShow2(!show2);

  // mobile show
  const [show3, setShow3] = useState(false);
  const onClick3 = () => setShow3(!show3);

  return (
    // navBar
    <div className="w-full h-[80px]">
      <div className="px-2 flex items-center w-full h-full justify-between">
        <h1 className="text-4xl font-bold pl-8 pr-[80px] sm:text-4xl cursor-default ">
          snap
        </h1>

        <div className="hidden md:flex flex-grow pt-3 text-Medium_Gray">
          <div className="flex pr-12 hover:text-black cursor-default">
            <p>Features</p>
            <button className="pl-2 pt-1" onClick={onClick1}>
              {!show1 ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>
          <div className="flex pr-12 hover:text-black cursor-default">
            <p>Company</p>
            <button className="pl-2 pt-1" onClick={onClick2}>
              {!show2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>

          <p className="pr-12 hover:text-black cursor-pointer">Careers</p>
          <p className="pr-12 hover:text-black cursor-pointer">About</p>
        </div>
        <div className="px-8 hidden md:flex">
          <button className="px-5 text-Medium_Gray hover:text-black">
            Login
          </button>
          <button className="border border-Medium_Gray text-Medium_Gray rounded-xl px-5 h-10 hover:border-black hover:text-black">
            Register
          </button>
        </div>
        <div className="mt-5 flex justify-between md:hidden" onClick={onClick3}>
          {!show3 ? (
            <RxHamburgerMenu className="text-[40px]" />
          ) : (
            <FiX className="text-[45px]" />
          )}
        </div>
      </div>
      {/* Dropdown for Features */}
      {show1 && (
        <div className="absolute left-[150px] top-[80px] bg-white rounded-lg w-[170px] h-[200px] shadow-lg md:flex flex-col sm:hidden ">
          <div className="flex justify-center items-center py-5 text-Medium_Gray">
            <img className="size-[20px]" src={toDoList} alt="/" />
            <p className="pl-3 hover:text-black cursor-pointer">Todo List</p>
          </div>
          <div className="flex justify-center items-center pb-5 text-Medium_Gray hover:text-black cursor-pointer">
            <img className="size-[20px]" src={calendars} alt="/" />
            <p className="pl-3">Calendar</p>
          </div>
          <div className="flex justify-center items-center pb-5 text-Medium_Gray hover:text-black cursor-pointer">
            <img className="size-[20px]" src={bell} alt="/" />
            <p className="pl-3">Reminders</p>
          </div>
          <div className="flex justify-center items-center pb-5 text-Medium_Gray hover:text-black cursor-pointer">
            <img className="size-[20px]" src={planning} alt="/" />
            <p className="pl-3">Planning</p>
          </div>
        </div>
      )}
      {/* Dropdown for Company */}
      {show2 && (
        <div className="absolute left-[355px] top-[80px] bg-white rounded-lg w-[140px] h-[150px] shadow-lg flex flex-col sm:hidden md:flex">
          <div className="flex flex-col justify-center pl-8 py-5 text-Medium_Gray">
            <p className="pb-5 hover:text-black cursor-pointer">History</p>
            <p className="pb-5 hover:text-black cursor-pointer">Our Team</p>
            <p className="pb-5 hover:text-black cursor-pointer">Blog</p>
          </div>
        </div>
      )}
      {/* Mobile menu */}
      {show3 && (
        <>
          <div className="absolute top-0 right-0 w-[60%] h-full bg-white shadow-lg flex flex-col items-start p-5 space-y-5 md:hidden z-10">
            <div className="self-end mb-5" onClick={onClick3}>
              <FiX className="text-[45px]" />
            </div>
            <div className="flex flex-col w-full space-y-5">
              <div className="flex justify-between items-center w-full">
                <p className="text-lg font-semibold">Features</p>
                <button onClick={onClick1}>
                  {!show1 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </button>
              </div>
              {show1 && (
                <div className="flex flex-col pl-5 space-y-3">
                  <div className="flex items-center text-Medium_Gray hover:text-black cursor-pointer">
                    <img className="size-[20px]" src={toDoList} alt="/" />
                    <p className="pl-3">Todo List</p>
                  </div>
                  <div className="flex items-center text-Medium_Gray hover:text-black cursor-pointer">
                    <img className="size-[20px]" src={calendars} alt="/" />
                    <p className="pl-3">Calendar</p>
                  </div>
                  <div className="flex items-center text-Medium_Gray hover:text-black cursor-pointer">
                    <img className="size-[20px]" src={bell} alt="/" />
                    <p className="pl-3">Reminders</p>
                  </div>
                  <div className="flex items-center text-Medium_Gray hover:text-black cursor-pointer">
                    <img className="size-[20px]" src={planning} alt="/" />
                    <p className="pl-3">Planning</p>
                  </div>
                </div>
              )}
              <div className="flex justify-between items-center w-full">
                <p className="text-lg font-semibold">Company</p>
                <button onClick={onClick2}>
                  {!show2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </button>
              </div>
              {show2 && (
                <div className="flex flex-col pl-5 space-y-3">
                  <p className="hover:text-black cursor-pointer">History</p>
                  <p className="hover:text-black cursor-pointer">Our Team</p>
                  <p className="hover:text-black cursor-pointer">Blog</p>
                </div>
              )}
              <p className="hover:text-black cursor-pointer">Careers</p>
              <p className="hover:text-black cursor-pointer">About</p>
              <div className="flex flex-col justify-center items-center just pt-5 ">
                <button className="w-[200px] text-center px-5 text-Medium_Gray hover:text-black">
                  Login
                </button>
                <button className="w-[200px] text-center  px-5 border border-Medium_Gray text-Medium_Gray rounded-xl h-10 hover:border-black hover:text-black">
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-[40%] h-full bg-black opacity-50 md:hidden"></div>
        </>
      )}

      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-left mx-[50px]">
          <h1 className=" hidden md:block  md:text-8xl font-bold">
            Make remote work
          </h1>
          <p className="px-5 text-Medium_Gray hidden md:block py-10">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className=" hidden md:flex justify-center items-center bg-black text-white rounded-xl h-[40px] w-[120px] mt-5">
            Learn more
          </button>
          <div className="md:flex w-30 pt-10 hidden   ">
            <img className="pr-2 " src={databiz} alt="/" />
            <img src={audiophile} alt="/" />
            <img src={meet} alt="/" />
            <img src={maker} alt="/" />
          </div>
        </div>
        <div>
          <img
            className="hidden md:block mt-5"
            src={Herods}
            alt="hero-desktop "
          />

          <img className="md:hidden" src={Heromb} alt="hero-mobile" />
          <div className="md:hidden flex items-center justify-center flex-col ">
            <h1 className=" text-4xl  font-bold  pt-7 mb-5 ">
              Make remote work
            </h1>
            <p className="px-5 text-Medium_Gray">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-black text-white rounded-xl h-[40px] w-[120px] mt-5">
              Learn more
            </button>
            <div className="flex w-30 pt-10 ">
              <img className="pr-2 " src={databiz} alt="/" />
              <img src={audiophile} alt="/" />
              <img src={meet} alt="/" />
              <img src={maker} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
