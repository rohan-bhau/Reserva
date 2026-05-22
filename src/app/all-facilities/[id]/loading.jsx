'use client'
import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="mt-20 container mx-auto py-15">

      {/* Back button */}
      <Skeleton className="h-5 w-40 rounded mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-5">

          {/* Image */}
          <Skeleton className="h-[320px] w-full rounded-2xl" />

          {/* Title */}
          <Skeleton className="h-8 w-3/4 rounded-lg" />

          {/* Author */}
          <Skeleton className="h-4 w-1/2 rounded-lg" />

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>

        </div>

        {/* RIGHT SIDE (Booking Card) */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">

          <Skeleton className="h-6 w-1/2 rounded" />
          <Skeleton className="h-4 w-2/3 rounded" />

          {/* Inputs */}
          <Skeleton className="h-10 w-full rounded-lg" />
          <Skeleton className="h-10 w-full rounded-lg" />
          <Skeleton className="h-10 w-full rounded-lg" />
          <Skeleton className="h-10 w-full rounded-lg" />

          {/* Price box */}
          <Skeleton className="h-16 w-full rounded-lg" />

          {/* Button */}
          <Skeleton className="h-12 w-full rounded-lg" />

        </div>

      </div>
    </div>
  );
}