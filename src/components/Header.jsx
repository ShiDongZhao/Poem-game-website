import { Link } from "react-router-dom";
import { navItems } from "../nav-items";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">诗韵游</h1>
        </div>
        
        {/* 导航标签 */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.to} 
              to={item.to}
              className="px-3 py-2 rounded-md hover:bg-teal-600 transition-colors duration-200 flex items-center gap-1"
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
        
        {/* 移动端菜单按钮 */}
        <button className="md:hidden p-2 rounded-md hover:bg-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
