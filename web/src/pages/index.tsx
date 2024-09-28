import { Navbar } from "@/components/custom/navbar";
import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { RiOrganizationChart } from "react-icons/ri";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="max-w-[76rem] mx-auto mt-10 flex items-start">
                <div className="w-7/12 flex items-start">
                    <BiRestaurant className="text-3xl pt-1 mr-2 text-primary-color" />
                    <div>
                        <p className="text-2xl gara font-medium">Restaurants</p>
                    </div>
                </div>
                <div className="w-5/12 flex items-start">
                    <RiOrganizationChart className="text-3xl pt-1 mr-2 text-primary-color" />
                    <div>
                        <p className="text-2xl gara font-medium">Charities</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
