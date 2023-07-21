import React from "react";

//icons
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-[100vh] bg-[#191A22] flex justify-center items-center">
      <form action="#" className="w-[400px]   rounded-lg bg-[#F6CA36]">
        <div className="flex justify-center mb-5 p-6">
          <img src="/img/logo.png" width="140px" alt="" />
        </div>
        <div className=" bg-[#2A2B38] rounded-tl-[6rem] px-10 py-4">
          <h2 className="text-center text-[#C9C8CF] text-3xl mb-10">ثبت نام</h2>
          <div className="bg-[#1F2029] flex justify-end items-center gap-3 p-1 rounded-md px-3">
            <input
              type="email"
              className="bg-transparent py-1 outline-none text-[#C9C8CF] text-right w-full text-sm"
              placeholder="ایمیل"
            />
            <FaUserAlt color="#C9C8CF" />
          </div>
          <div className="bg-[#1F2029] flex justify-end items-center gap-3 p-1 mt-5 rounded-md px-3">
            <input
              type="email"
              className="bg-transparent py-1 outline-none text-[#C9C8CF] text-right w-full text-sm"
              placeholder="نام کاربری"
            />
            <FaLock color="#C9C8CF" />
          </div>
          <div className="bg-[#1F2029] flex justify-end items-center gap-3 p-1 mt-5 rounded-md px-3">
            <input
              type="email"
              className="bg-transparent py-1 outline-none text-[#C9C8CF] text-right w-full text-sm"
              placeholder="کلمه عبور"
            />
            <FaLock color="#C9C8CF" />
          </div>
          <div className="flex justify-between items-center mt-5">
            <button className="bg-[#F6CA36] px-5 py-1 rounded-lg font-medium">
               ثبت نام
            </button>
            <div className="flex items-center gap-2">
              <label className="text-[#C9C8CF] text-[14px]">مرا بخاطر بسپار</label>
              <input
                className="accent-[#F6CA36] text-[#F6CA36] cursor-pointer"
                type="checkbox"
              />
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <hr className="w-[70%] bg-[#5F6066] border-none h-[1px]" />
          </div>
          <div className="flex justify-center items-center gap-1 text-[#C9C8CF] text-[13px] py-5">
            <Link to="/login">ورود </Link>
            <p>حساب کابری دارید؟ </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
