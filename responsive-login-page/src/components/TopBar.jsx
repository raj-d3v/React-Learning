import { Input } from "@/components/ui/input";
import { Bell, Settings, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function TopBar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 ">
      {/* Right Section: Search + Icons */}
      <div className="flex items-center gap-4 pb-5 border-b-1">
        <div className="flex items-center gap-3 bg-white w-250">
          <Search className="h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search anything here"
            className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Settings className="h-5 text-gray-600 cursor-pointer" />
        <Bell className="h-5 text-gray-600 cursor-pointer" />
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png "
            className="cursor-pointer"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default TopBar;
