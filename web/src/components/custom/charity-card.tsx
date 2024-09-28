import Link from "next/link";
import React from "react";

interface CharityCardProps {}

export const CharityCard: React.FC<CharityCardProps> = ({}) => {
    return (
        <div className="flex items-start space-x-3 mb-2 w-full border border-gray-200 p-2 rounded-md">
            <img
                src={"https://i.ibb.co/ZLw7SsS/icons8-test-account-96.png"}
                className="min-w-8 object-cover w-8 h-8 flex items-center justify-center rounded-full"
                height={20}
                width={20}
                alt="avatar"
            />
            <div className="flex-grow min-w-0">
                <Link
                    href={``}
                    className="text-sm font-semibold hover:underline cursor-pointer truncate block"
                >
                    Atlanta Community Food Bank
                </Link>
                <p className="text-xs text-gray-500 font-medium truncate">
                    Atlanta, GA
                </p>
                <p className="mt-0.5 text-sm font-medium whitespace-pre-wrap break-words">
                    Charity in Atlanta, GA
                </p>
            </div>
        </div>
    );
};
