import React from "react";

const ChangePassword = () => {

  return (
    <div class="h-screen flex flex-col justify-center items-center">
      <div class="h-24 w-24">
        <img src=".../../../assets/logo.svg" alt="Logo" class="object-cover h-24 w-24"/>
      </div>
      <div class="bg-[#77728D] w-1/4 h-4/6 rounded-lg flex flex-col items-center">

        <div className="flex flex-col items-center">
          <h1 class="my-16 text-3xl text-white font-lato">
            Set Your New Password
          </h1>
        </div>

        <form class="w-full h-1/2 flex flex-col items-center justify-around">
          <div class="w-full h-4/6 flex flex-col items-center justify-around">
            <input type="text" placeholder="Email" class="w-2/3 m-1"/>
            <input type="text" placeholder="Token" class="w-2/3 m-1"/>
            <input type="text" placeholder="New Password" class="w-2/3 m-1"/>
            <input type="text" placeholder="Repeat New Password" class="w-2/3 m-1"/>
          </div>
          
          <input type="submit" value="Change Password" class="mt-10 bg-[#F4A4A4] w-1/2 h-1/5 text-white rounded-lg"/>
        </form>
      </div>

    </div>
  );
};

export default ChangePassword;