import React, { useState } from 'react';
import { Home, Smile, BookOpen, Lightbulb, Star, Heart, Trophy, Menu } from "lucide-react";
import { NavLink,Link, Outlet } from 'react-router-dom';

function App() {
  const [menuSize, setMenuSize] = useState("20%");
  const [isMenuOpen, setOpenMenu] = useState(false);

  const menu = () => {
    setMenuSize(prev => (prev === "20%" ? "90%" : "20%"));
    setOpenMenu(prev => !prev);
  };

  const menuItems = [
    { path: "inspiration", label: "Inspiration", icon: <Lightbulb size={35}/> },
    { path: "humor", label: "Humor", icon: <Smile size={35}/> },
    { path: "philosopy", label: "Philosopy", icon: <BookOpen size={35}/> },
    { path: "wisdom", label: "Wisdom", icon: <Star size={35}/> },
    { path: "sucess", label: "Sucess", icon: <Trophy size={35}/> },
    { path: "love", label: "Love", icon: <Heart size={35}/> },
  ];

  return (
    <div className='w-screen h-screen flex gap-3'>
      {/* left */}
      <div
        className={`bg-white lg:w-[20%] h-screen absolute lg:relative flex flex-col justify-start items-center py-5 gap-3 z-50`}
        style={{ width: menuSize }}
      >
        {/* top div */}
        <div className='w-full pl-5 flex justify-start items-center gap-3'>
          <Menu onClick={menu} size={35} className='lg:hidden' />
          <Link to="/">
            <div className='bg-black w-[50px] h-[50px] rounded-full lg:block hidden'></div>
          </Link>
          <div className='lg:block hidden'>
            <h1 className='text-2xl'>Quote</h1>
            <p>inspiring Quotes</p>
          </div>

          {isMenuOpen && <h1 className='text-xl mr-5'>Quotes</h1>}
        </div>

        <div className='w-full h-[80%] py-5 flex flex-col justify-start items-center gap-10'>
          <ul className='h-[90%] w-[90%] flex flex-col justify-start items-center gap-5 text-xl'>
            {menuItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `w-full pl-5 py-2 px-3 shadow rounded-md flex gap-3 items-center ${
                    isActive ? "text-indigo-400" : "text-black"
                  }`
                }
              >
                {item.icon}
                <h1 className='lg:block hidden'>{item.label}</h1>
                {isMenuOpen && <h1>{item.label}</h1>}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* right */}
      <div className='bg-white lg:w-[80%] w-full h-full flex justify-end'>
        <div className='lg:w-full w-[80%] h-full lg:p-5 p-2 overflow-y-scroll overflow-x-hidden bg-linear-to-br from-indigo-400 to-slate-500 via-pink-400'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
