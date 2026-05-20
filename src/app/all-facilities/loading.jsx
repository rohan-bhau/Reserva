'use client'
import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className='mt-20 container mx-auto py-10 px-5'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm p-4 space-y-4">

            {/* Image skeleton */}
            <Skeleton className="h-52 w-full rounded-xl" />

            {/* Text skeleton */}
            <Skeleton className="h-5 w-3/4 rounded-lg" />
            <Skeleton className="h-4 w-1/2 rounded-lg" />
            <Skeleton className="h-4 w-2/3 rounded-lg" />

            {/* Button skeleton */}
            <Skeleton className="h-10 w-full rounded-lg" />

          </div>
        ))}

      </div>

    </div>
  );
}