import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";

const MemberDetail = () => {
  const [status, setStatus] = useState("Pending");
  const navigate = useNavigate();
  const [renew, setRenew] = useState(false);

  const handleSwitchBtn = () => {
    let statuss = status === "Active" ? "Pending" : "Active";
    setStatus(statuss);
  };

  return (
    <div className="w-3/4 text-black p-5">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="border-2 w-fit text-xl font-sans text-white p-2 rounded-xl bg-slate-900 cursor-pointer"
      >
        <ArrowBackIcon /> Go Back
      </div>
      <div className="mt-10 p-2">
        <div className="w-[100%] h-fit flex">
          <div className="w-1/3 mx-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8r3cLJO3ebUubsrxGrPwEOz_K_8bl3UkhjOmv2Vxl6zuOydodksh7wiYbfbYPV2GW_s&usqp=CAU"
              className="w-full mx-auto"
            />
          </div>
          <div className="w-2/3 mt-5 text-xl p-5">
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Name : Deepak
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Mobile : 9369560031
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Address : Kushinagar
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              JoinedDate : 01/01/2025
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              NextBillDate : 01/01/2025
            </div>
            <div className="mt-0 mb-2 flex gap-4 text-2xl font-semibold">
              Status :{" "}
              <Switch
                onColor="#6366F1"
                checked={status === "Active"}
                onChange={() => {
                  handleSwitchBtn();
                }}
              />
            </div>
            <div
              onClick={() => {
                setRenew((prev) => !prev);
              }}
              className={`mt-1 p-2 rounded-lg border-2 border-slate-900 text-center ${
                renew && status === "Active"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : null
              } w-full md:w-1/2 cursor-pointer hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
            >
              Renew
            </div>

            {renew && status === "Active" ? (
              <div className="rounded-lg p-3 mt-5 mb-5 h-fit bg-slate-50 md:w-[100%]">
                <div className="w-full">
                  <div className="my-5">
                    <div>MemberShip</div>
                    <select className="w-full border-2 p-2 rounded-lg">
                      <option>1 Month Plant</option>
                      <option>2 Month Plant</option>
                    </select>
                    <div
                      className={`mt-3 rounded-lg p-3 border-2 border-slate-900 text-center w-1/2 mx-auto cursor-pointer hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                    >
                      Save
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
