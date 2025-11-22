import { Skeleton } from "./ui/skeleton";

export default function LoadingInvoices({ count }) {
  return (
    <div className="flex flex-col gap-4 container mx-auto px-5">
      {Array.from({ length: count })
        .map((_, index) => index + 1)
        .map((el) => {
          return <Skeleton className={"w-full h-[76px] rounded-xl"} key={el} />;
        })}
    </div>
  );
}
