import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { to: "/", icon: FiBarChart2, label: "Home" },
    { to: "/properties", icon: FiPackage, label: "Properties" },
    { to: "/dashboard/add-product", icon: FiPlusCircle, label: "Add Product" },
    { to: "/dashboard/categories", icon: FiTag, label: "Categories" },
    {
      to: "/dashboard/add-category",
      icon: FiPlusCircle,
      label: "Add Category",
    },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "/dashboard/reviews", icon: FiStar, label: "Reviews" },
    { to: "/dashboard/profile", icon: FiUsers, label: "Profile" },
  ];

  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="drawer-toggle"
        className="drawer-overlay"
        aria-label="close sidebar"
      ></label>
      <aside className="w-64 min-h-full bg-base-200 p-4 flex flex-col">
        {/* Sidebar header */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <FiShoppingCart className="h-6 w-6 text-[#fd390e]" />
          <h1 className="text-xl font-bold text-[#091E22]">
            <NavLink to="/">House Rent</NavLink>
          </h1>
        </div>

        {/* Menu */}
        <ul className="menu gap-1 flex-grow">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 relative ${
                    isActive
                      ? "bg-[#fd390e]/15 text-[#fd390e] font-semibold shadow-[0_0_10px_rgba(253,57,14,0.3)]"
                      : "text-gray-700 hover:bg-base-300 hover:text-[#fd390e]"
                  }`
                }
              >
                <item.icon
                  className={`h-5 w-5 transition-colors duration-300 ${"group-hover:text-[#fd390e]"}`}
                />
                {item.label}

                <span
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-md bg-[#fd390e] ${"opacity-100"}`}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="text-xs text-base-content/70 pt-4 border-t mt-6 select-none">
          © 2025 HouseRent Admin
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
