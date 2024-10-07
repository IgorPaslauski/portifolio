import { Skeleton } from "@/components/ui/skeleton";

export function MainConteudoSkeleton() {
  return (
    <>
      <div className="w-full">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-40 my-4 w-full" />
      </div>
    </>
  );
}
