'use client'
import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="mt-20 container mx-auto px-5">

      <div>
      <Skeleton className="h-5 w-1/6 mb-2 rounded-lg" />
      <Skeleton className="h-5 w-1/5 mb-10 rounded-lg" />
      </div>

      <div className="space-y-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white border rounded-2xl p-5 flex gap-5 shadow-sm">

            {/* image */}
            <Skeleton className="w-[160px] h-[120px] rounded-xl" />

            {/* content */}
            <div className="flex-1 space-y-3">
              <Skeleton className="h-5 w-1/3 rounded-lg" />
              <Skeleton className="h-4 w-1/2 rounded-lg" />
              <Skeleton className="h-4 w-2/3 rounded-lg" />

              <div className="flex justify-between mt-4">
                <Skeleton className="h-5 w-20 rounded-lg" />
                <Skeleton className="h-8 w-20 rounded-lg" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}