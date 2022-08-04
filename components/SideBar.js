import {
  HomeIcon,
  HeartIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
  LibraryIcon,
} from "@heroicons/react/outline";

const SideBar = () => {
  return (
    <div>
      <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
        <div className="space-y-4">
          <button className="flex items-center space-x-2 hover:text-white">
            <HomeIcon className="h-5 w-5" />
            <p>Home</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <SearchIcon className="h-5 w-5" />
            <p>Search</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <LibraryIcon className="h-5 w-5" />
            <p>Your Play list</p>
          </button>
          <hr className="border-t-[0.1px] border-gray-900" />

          {/* second section*/}
          <button className="flex items-center space-x-2 hover:text-white">
            <PlusCircleIcon className="h-5 w-5" />
            <p>Create play List</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <HeartIcon className="h-5 w-5" />
            <p>Liked Songs</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <RssIcon className="h-5 w-5" />
            <p>your episodes</p>
          </button>
          <hr className="border-t-[0.1px] border-gray-900" />

          {/* dynamic playlist */}
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
          <p className="cursor-pointer hover:text-white">playlist</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
