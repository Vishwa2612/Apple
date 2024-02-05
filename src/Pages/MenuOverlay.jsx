import React from 'react';

const MenuOverlay = ({ menuList }) => {
  return (
    <div className="bg-zinc-900 h-screen">
      {menuList.map((item) => (
        <h1 key={item.id} className=' text-white text-[20px] justify-center py-3 px-10 font-bold'>{item.title}</h1>
      ))}
    </div>
  );
};

export default MenuOverlay;