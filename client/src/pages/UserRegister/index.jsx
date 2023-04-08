const UserRegister = () => {
    return(
    <div>
        <div class="w-full flex justify-end">
                <a href="login" class = "h-8 w-8 mt-4 mr-4">
                    <img src=".../../../assets/x-icon.png" alt="Return" class="" />
                </a>
        </div>
        <div class = "my-20 flex flex-col items-center">
            <div>
                <button class = "h-36 w-36">
                    <img src=".../../../assets/user-placeholder.png" alt="Profile Placeholder" class="" />
                </button>
            </div>
            <div class = "my-6 w-3/4 h-1 bg-[#F4A4A4]"></div>
            <div class = "w-3/4">
                <form class = "flex flex-col">
                    <div class = "flex justify-between my-2">
                        <input type="text" placeholder="First Name*" class="w-2/3 bg-none"/>
                        <input type="text" placeholder="Second Name*" class="w-2/3 bg-none"/>
                    </div>

                    <div class = "flex justify-between my-2">
                        <input type="text" placeholder="Username*" class="w-2/3 bg-none"/>
                        <input type="text" placeholder="Email*" class="w-2/3 bg-none"/>
                    </div>

                    <div class = "my-2 w-auto flex justify-between">
                        <input type="date" class="
                        p-4 pr-[40px] bg-[#D9D9D9] text-[#77728D] mx-8
                        rounded-[10px] h-[50px] w-[512px]
                        "/>
                        <input type="phone" placeholder="Phone" class="
                        p-4 pr-[40px] bg-[#D9D9D9] text-[#77728D] mx-8
                        rounded-[10px] h-[50px] w-[512px]
                        "/>
                    </div>

                    <input type="text" placeholder="Location" class="w-auto my-2 bg-none"/>

                    <div class = "flex justify-center">
                        <input type="submit" value="Register" className="my-2 w-[217px] h-[47px] bg-[#F4A4A4] text-white" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default UserRegister

// width: 1006px;
//     height: 50px;
//     padding: 1rem;
//     color: #77728D;
//     background: #D9D9D9;
//     border-radius: 10px;
//     margin: 0 2rem;
//     padding-right: 40px;
//     background-image: url('../../../../public/assets/search-icon.svg');
//     background-repeat: no-repeat;
//     background-position: right 10px center;
//     background-size: 20px 20px;