'use client'
import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="mt-20 container mx-auto px-5">

      {/* header*/}
      <div className="md:flex items-center md:justify-between space-y-5 mb-10">
        <div className="space-y-3">
          <Skeleton className="h-8 w-64 rounded-lg" />
          <Skeleton className="h-4 w-80 rounded-lg" />
        </div>

        <Skeleton className="h-10 w-32 rounded-lg" />
      </div>

      {/* card*/}
      <div className="space-y-5">
        {[1,2,3].map((item) => (
          <div key={item} className="bg-white border rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-5 shadow-sm">

            {/* image */}
            <Skeleton className="w-full md:w-[160px] h-[180px] md:h-[120px] rounded-xl" />

            {/* content */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div className="space-y-3 w-full">
                <Skeleton className="h-5 w-48 rounded-lg" />
                <Skeleton className="h-4 w-64 rounded-lg" />
                <Skeleton className="h-4 w-40 rounded-lg" />
              </div>

              {/* buttons */}
              <div className="flex md:flex-col gap-3">
                <Skeleton className="h-9 w-20 rounded-lg" />
                <Skeleton className="h-9 w-20 rounded-lg" />
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}