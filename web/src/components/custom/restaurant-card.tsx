import React from "react";

interface RestaurantCardProps {}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({}) => {
    return (
        <div className="flex items-start space-x-5 w-full border border-gray-200 rounded-md p-2.5 mb-2.5">
            <img
                src={"https://i.ibb.co/ZLw7SsS/icons8-test-account-96.png"}
                className="min-w-9 object-cover w-9 h-9 flex items-center justify-center rounded-full border border-gray-100"
                height={20}
                width={20}
                alt="avatar"
            />
            <div>
                <p className="text-sm font-semibold w-max hover:underline cursor-pointer">
                    Moe's Southwest Grill
                </p>
                <div className="mt-0.5 flex items-center">
                    <p className="text-xs line-clamp-1 font-medium text-gray-500">
                        Atlanta, GA
                    </p>
                    <span className="text-xs mx-1 text-gray-500">•</span>
                    <p className="text-xs line-clamp-1 font-medium text-gray-500">
                        2h
                    </p>
                </div>
                <div className="my-2 h-px bg-gray-100" />
                <pre className="text-sm font-medium whitespace-pre-wrap break-words">
                    How does a spacecraft know where to go after it launches?
                    Meet Andres Rivera, a cruise phase systems engineer who
                    helps make sure Europa Clipper will safely make its
                    1.8-billion-mile journey to Jupiter's ocean moon after it
                    launches next month. Rivera shares his inspiring story of
                    determination and how he worked his way to NASA after
                    immigrating to the United States as a teenager.
                </pre>
                <img
                    src="https://japroz.me/img/flight-software-night-sky.png"
                    className="w-auto h-auto max-h-72 rounded-md border border-gray-100 mt-5"
                />
            </div>
        </div>
    );
};
