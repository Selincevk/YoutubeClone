import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";

const Header = () => {
  // Navigate kurulumu
  const navigate = useNavigate();
  // form gönderildiğinde form gönderimi yapmak için formun onSubmit eventini yazın.
  const handleSubmit = (event) => {
    event.preventDefault();
    // formdaki veriye eriş
    const text = event.target[0].value;
    // result sayfasına yönlendirme yapılacak ve formdan gelen veriyi >URLe parametre olarak gönderin.
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="px-2 sm:px-4 py-[17px] flex justify-between items-center">
      <Link className="flex gap-1.5" to="/">
        <img
          src="/youtube.png"
          alt="youtube-logo"
          className="w-[41px] sm:w-12"
        />
        <h1 className="text-[21px] sm:text-2xl">Youtube &trade; </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="search"
          className="bg-[#0f0f0f] px-2 sm:px-5 py-1 sm:py-2 border border-transparent rounded-l-[20px]"
          placeholder="Ara"
        />
        <button className="px-3 sm:px-4 sm:text-2xl bg-zinc-800 hover:bg-zinc-600 cursor-pointer transition duration-300">
          {" "}
          <CiSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition" />

        <MdVideoLibrary className="hover:text-gray-400 transition" />

        <IoIosVideocam
          className="hover:text-gray-400 transition
    "
        />
      </div>
    </header>
  );
};

export default Header;
