"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { Button } from '.';

const ShowMore = ({ page, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (page + 1) * 10;
    router.push(updateSearchParams('limit', `${newLimit}`), { scroll: false })
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button 
          title="Show More"
          type="button"
          styles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
};

export default ShowMore;