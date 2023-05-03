import React from "react";

const RecoverBox = () => {
    return(
        <div class="h-screen flex flex-col justify-center items-center">
        <div class="bg-amber-400 h-48 w-48">
            <img src=".../../../assets/logo.svg" alt="Logo" class="object-cover h-48 w-48"/>
        </div>
        <div class="bg-[#77728D] w-1/4 h-3/6 rounded-lg flex flex-col items-center justify-center">

            <div className="flex flex-col items-center">
            <h1 class="text-4xl text-white font-lato">
                Recover Password
            </h1>
            
            <h2 class="text-white"
            >More instructions will be sent to your e-mail
            </h2>
            </div>

            <form class="w-full h-1/2 flex flex-col items-center justify-around">
            <div class="w-full h-4/6 flex flex-col items-center justify-around">
                <input type="text" placeholder="Email" class="w-2/3"/>
            </div>
            
            <input type="submit" value="Send Email" class="bg-[#F4A4A4] w-1/2 h-1/5 text-white rounded-lg"/>
            </form>

        </div>

        </div>
    );
};

export default RecoverBox;