import { CharityCard } from "@/components/custom/charity-card";
import { Navbar } from "@/components/custom/navbar";
import { RestaurantCard } from "@/components/custom/restaurant-card";
import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { RiOrganizationChart } from "react-icons/ri";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="max-w-[76rem] mx-auto mt-10 flex items-start space-x-5">
                <div className="w-7/12 flex items-start">
                    <BiRestaurant className="text-3xl pt-1 mr-2 text-primary-color" />
                    <div className="w-full">
                        <p className="text-2xl gara font-medium mb-2">
                            Restaurants
                        </p>
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                    </div>
                </div>
                <div className="w-5/12 flex items-start">
                    <RiOrganizationChart className="text-3xl pt-1 mr-2 text-primary-color" />
                    <div className="w-full">
                        <p className="text-2xl gara font-medium mb-2">
                            Charities
                        </p>
                        <CharityCard />
                        <CharityCard />
                        <CharityCard />
                        <CharityCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
