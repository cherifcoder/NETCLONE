import React from "react"
import logo from "../assets/logo.png"
import bannerbg from "../assets/bannerbg.jpg"
import { IoLanguage } from "react-icons/io5";
function Nav() {

    return (
        <div className="text-white bg-black w-screen ">
           <div className=" bg-cover opacity-80 px-4 md:px-30 md:text-2xl py-5 flex-col h-screen  w-screen "style={{ backgroundImage: `url(${bannerbg})` }}>
        
            <div className="nav flex justify-between items-center" >
                <img className="w-30 h-16 md:w-64" src={logo} alt="netflix logo" />
                <div className="flex md:gap-5 gap-1 items-center ">
                    <div className="border-2 flex items-center">
                        <IoLanguage className="" />
                        <select name="language" id="language" className="md:pr-10 md:py-2.5">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                    </div>
                    <button type="button" className=" bg-red-600 p-1 md:p-2.5 rounded">Sing in</button>
                </div>

            </div>
            <div className="align-center justify-center items-center text-center py-32">
                <p className="align-center justify-center items-center font-bold ">
                    <h1 className="md:text-8xl text-2xl font-bold text-center py-5 ">
                        Unlimited films, <br /> series and more
                    </h1>
                    Starts at NOK 99. Cancel at any time.
                </p>

                <p className="md:py-4 py-1">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                <div className="flex md:gap-3 gap-1 text-center align-center justify-center md:py-5 py-2">
                    < input type="text" placeholder="Email Address" className="border-2 text-white border-gray-500 px-3" />
                    <button type="button" className="bg-red-600 p-2 rounded text-bold text-xl ">
                        Get Started
                    </button>
                </div>

            </div>
        </div>  
        </div>
       
    )
}

export default Nav