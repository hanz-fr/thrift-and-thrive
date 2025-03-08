import { Input } from "@heroui/react";
import { MdOutlineCameraAlt } from "react-icons/md";

export default function CustomSearchBar() {
  return (
    <Input
      radius="full"
      label="Search items or find with picture"
      variant={"bordered"}
      endContent={
        <button type="button" className="my-auto">
          <MdOutlineCameraAlt className="text-2xl pointer-events-none" />
        </button>
      }
      className="w-1/2"
    />
  );
}
