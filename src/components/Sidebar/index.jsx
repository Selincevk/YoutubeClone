import { Link } from "react-router-dom";
import { categories } from "../../constants";

const Sidebar = ({ selectedCat }) => {
  return (
    <aside>
      {categories.map((item, index) => (
        <Link to={`/?category=${item.path}`} key={index}>
          <div
            className={`flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition ${
              (item.path === selectedCat ||
                (item.path === "/" && !selectedCat)) &&
              "bg-[#242424]"
            }`}
          >
            <span className="max-md:text-2xl">{item.icon} </span>
            <span className="max-md:hidden">{item.name} </span>
          </div>
          {item.divider && <hr />}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
