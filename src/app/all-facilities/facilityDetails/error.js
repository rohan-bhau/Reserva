"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <div className="text-center max-w-md">

        <div className="flex justify-center mb-6">
          <div className="bg-red-100 text-red-600 p-4 rounded-full">
            <FiAlertTriangle size={32} />
          </div>
        </div>


        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Something went wrong
        </h2>


        <p className="text-gray-500 mb-6">
          The facility you’re looking for might not exist or something went
          wrong. Please try again or go back to explore other facilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <Button
            onClick={() => reset()}
            className="bg-[#0EA5A4] text-white px-5 py-2 rounded-lg hover:bg-[#0B7C7B] transition duration-300"
          >
            Try Again
          </Button>


          <Link href="/all-facilities">
            <Button variant="bordered" className="px-5 py-2 rounded-lg">
              Back to Facilities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
