import { Input } from "@heroui/react";
import { MdOutlineCameraAlt } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="w-full flex justify-end px-5">
      <Input
        radius="full"
        label="Search items or find with picture"
        variant={"bordered"}
        endContent={
          <button type="button" className="my-auto">
            <MdOutlineCameraAlt className="text-2xl pointer-events-none" />
          </button>
        }
        className="sm:w-full lg:w-2/3"
      />
    </div>
  );
}
