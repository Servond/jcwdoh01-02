import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 my-10">
      <Skeleton className="w-[150px] h-10 bg-gray-500" />
      <Skeleton className="w-[150px] h-10 bg-gray-500" />
      <Skeleton className="w-[150px] h-10 bg-gray-500" />
    </div>
  );
}
