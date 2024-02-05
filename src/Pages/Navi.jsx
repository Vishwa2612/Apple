import React, { useState } from "react";
import  MenuOverlay  from "./MenuOverlay";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import AppleIcon from "../Images/Icons/AppleIcon";
import SearchIcon from "../Images/Icons/SearchIcon";
import ShoppingIcon from "../Images/Icons/ShoppingIcon";

const Navi = () => {
  const [toggle, setToggle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState([]);
  const menuList = [
    { id: 0, title: 'Store', contents:[{id:0, content:'Shop',
                                        con:[{id:0, cons:'Shop the Latest'},{id:1, cons:'Mac'},{id:2, cons:'iPad'},{id:3, cons:'iPhone'},{id:4, cons:'Apple Watch'},{id:5, cons:'Accessories'},]},
                                        {id:1, content:'Quick Links',
                                        con:[{id:0, cons:'Find a Store'},{id:1, cons:'Order Status'},{id:2, cons:'Ways to Buy'},]},
                                        {id:2, content:'Shop Special Stores',
                                        con:[{id:0, cons:'Education'},{id:1, cons:'Business'},]},]},
    { id: 1, title: 'Mac', contents:[{id:0, content:'Explore Mac',
                                        con:[{id:0, cons:'Explore All Mac'},{id:1, cons:'MacBook Air'},{id:2, cons:'MacBook Pro'},{id:3, cons:'iMac'},{id:4, cons:'Mac mini'},{id:5, cons:'Mac Studio'},{id:6, cons:'Mac Pro'},{id:7, cons:'Display'}],
                                          subcon:[{id:0, subcons:'Compare Mac'},{id:1, subcons:'Mac Does That'}]},
                                      {id:1, content:'Shop Mac',
                                        con:[{id:0, cons:'Shop Mac'},{id:1, cons:'Mac Accessories'},{id:2, cons:'Ways to Buy'},]},
                                      {id:2, content:'Music from Mac',
                                        con:[{id:0, cons:'Mac Support'},{id:1, cons:'AppleCare+ for Mac'},{id:2, cons:'macOS Sonoma'},{id:3, cons:'Apps by Apple'}]}] },
    { id: 2, title: 'iPad', contents:[{id:0, content:'Explore Pad',
                                        con:[{id:0, cons:'Explore All iPad'},{id:1, cons:'iPad Pro'},{id:2, cons:'iPad Air'},{id:3, cons:'iPad'},{id:4, cons:'iPad mini'},{id:5, cons:'Apple Pencil'},{id:6, cons:'Keyboards'}],
                                          subcon:[{id:0, subcons:'Compare iPad'},{id:1, subcons:'Why iPad'}]},
                                      {id:1, content:'Shop iPad',
                                        con:[{id:0, cons:'Shop iPad'},{id:1, cons:'iPad Accessories'},{id:2, cons:'Ways to Buy'},]},
                                      {id:2, content:'More from iPad',
                                        con:[{id:0, cons:'iPad Support'},{id:1, cons:'AppleCare+ for iPad'},{id:2, cons:'iPadOS 17'},{id:3, cons:'Apps by Apple'},{id:4, cons:'iCloud+'},{id:5, cons:'Education'}]}]},
    { id: 3, title: 'iPhone', contents:[{id:0, content:'Explore iPhone',
                                          con:[{id:0, cons:'Explore All iPhone'},{id:1, cons:'iPhone 15 Pro'},{id:2, cons:'iPhone 15'},{id:3, cons:'iPhone 14'},{id:4, cons:'iPhone 13'},{id:5, cons:'iPhone SE'}],
                                            subcon:[{id:0, subcons:'Compare iPhone'},{id:1, subcons:'Switch from Android'}]},
                                        {id:1, content:'Shop iPhone',
                                          con:[{id:0, cons:'Shop iPhone'},{id:1, cons:'iPhone Accessories'},{id:2, cons:'Apple Trade in'},{id:3, cons:'Ways to buy'}]},
                                        {id:2, content:'More from iPhone',
                                          con:[{id:0, cons:'iPhone Support'},{id:1, cons:'AppleCare+ for iPhone'},{id:2, cons:'iOS 17'},{id:3, cons:'Apps by Apple'},{id:4, cons:'iPhone Privacy'},{id:5, cons:'iCloud+'},{id:6, cons:'Wallet'},{id:7, cons:'Siri'}]}]},
    { id: 4, title: 'Watch', contents:[{id:0, content:'Explore Watch',
                                          con:[{id:0, cons:'Explore All Apple Watch'},{id:1, cons:'Apple Watch Series 9'},{id:2, cons:'Apple Watch Ultra 2'},{id:3, cons:'Apple Watch SE'},{id:4, cons:'Apple Watch Nike'}],
                                            subcon:[{id:0, subcons:'Compare Watch'},{id:1, subcons:'Why Apple Watch'}]},
                                        {id:1, content:'Shop Watch',
                                          con:[{id:0, cons:'Shop Apple Watch'},{id:1, cons:'Apple Watch Straps'},{id:2, cons:'Apple Watch Accessories'},{id:3, cons:'Ways to buy'}]},
                                        {id:2, content:'More from Watch',
                                          con:[{id:0, cons:'Apple Watch Support'},{id:1, cons:'AppleCare+'},{id:2, cons:'watchOS 10'},{id:3, cons:'Apps by Apple'}]}]},
    { id: 5, title: 'Airpods', contents:[{id:0, content:'Explore AirPods',
                                          con:[{id:0, cons:'Explore All AirPods'},{id:1, cons:'AirPods Pro 2nd generration'},{id:2, cons:'AirPods 3rd generation'},{id:3, cons:'AirPods Max'}],
                                            subcon:[{id:0, subcons:'Compare AirPods'}]},
                                        {id:1, content:'Shop AirPods',
                                          con:[{id:0, cons:'Shop AirPods'},{id:1, cons:'AirPods Accessories'}]},
                                        {id:2, content:'More from AirPods',
                                          con:[{id:0, cons:'AirPods Support'},{id:1, cons:'AppleCare+ for Headphones'},{id:2, cons:'Apple Music'}]}]},
    { id: 6, title: 'TV & Home', contents:[{id:0, content:'Explore TV & Home',
                                        con:[{id:0, cons:'Explore TV & Home'},{id:1, cons:'Apple TV 4K'},{id:2, cons:'HomePod'},{id:3, cons:'HomePod mini'}]},
                                        {id:1, content:'Shop TV & Home',
                                        con:[{id:0, cons:'Shop Apple TV 4K'},{id:1, cons:'Shop HomePod'},{id:2, cons:'Shop HomePod mini'},{id:3, cons:'Shop Siri Remote'},{id:4, cons:'TV & Home Accessories'}]},
                                        {id:2, content:'More from TV & Home',
                                        con:[{id:0, cons:'Apple TV Support'},{id:1, cons:'HomePod Support'},{id:2, cons:'AppleCare+'},{id:3, cons:'Apple TV app'},{id:4, cons:'Apple TV+'},{id:5, cons:'Home app'},{id:6, cons:'Apple Music'},{id:7, cons:'Siri'},{id:8, cons:'AirPlay'}]}]},
    { id: 7, title: 'Entertainment', contents:[{id:0, content:'Explore Entertainment',
                                        con:[{id:0, cons:'Explore Entertainment'},{id:1, cons:'Apple One'},{id:2, cons:'Apple TV+'},{id:3, cons:'Apple Music'},{id:4, cons:'Apple Arcade'},{id:5, cons:'Apple Podcasts'},{id:6, cons:'Apple Books'},{id:7, cons:'App Store'}]},
                                        {id:1, content:'Support',
                                        con:[{id:0, cons:'Apple TV+ Support'},{id:1, cons:'Apple Music Support'}]}]},
    { id: 8, title: 'Accessories', contents:[{id:0, content:'Explore Accessories',
                                        con:[{id:0, cons:'Shop All Accessories'},{id:1, cons:'Mac'},{id:2, cons:'iPad'},{id:3, cons:'iPhone'},{id:4, cons:'Apple Watch'},{id:5, cons:'AirPods'},{id:6, cons:'TV & Home'}]},
                                        {id:1, content:'Explore Accessories',
                                        con:[{id:0, cons:'Made by Apple'},{id:1, cons:'AirTag'}]}]},
    { id: 9, title: 'Support', contents:[{id:0, content:'Explore Support',
                                          con:[{id:0, cons:'iPhone'},{id:1, cons:'Mac'},{id:2, cons:'iPad'},{id:3, cons:'Watch'},{id:4, cons:'AirPods'},{id:5, cons:'Music'},{id:6, cons:'TV'}],
                                          subcon:[{id:0,subcons:'Explore Support'}]},
                                        {id:1, content:'Get Help',
                                          con:[{id:0, cons:'Community'},{id:1, cons:'Check Coverage'},{id:2, cons:'Repair'},{id:3, cons:'Contact Us'}]},
                                        {id:2, content:'Helpful Tpoiics',
                                          con:[{id:0, cons:'Get AppleCare+'},{id:1, cons:'Apple ID & Password'},{id:2, cons:'Billing & Subscriptons'},{id:3, cons:'Find My'},{id:4, cons:'Accessibility'}]}]},
  ];

  const handleRefreshClick = () => {
    window.location.reload();
  };

  const handleMenuHover = (content) => {
    if (content && content.length > 0) {
      setText(content);
      setShowContent(true);
    } else {
      setText([]);
      setShowContent(false);
    }
  
  };

  return (
    <div id="main" className="h-max m-0 p-0 fixed w-full">
      <nav className="flex items-center cus-lg:gap-11 cus-lg:justify-center cus-md:justify-around cus-sm:justify-between cus-md:gap-4 text-gray-300 text-md max-w-full h-12 bg-neutral-900  z-20">
        {toggle ? (
          <>
            <div className="cursor-pointer flex flex-row cus-lg:gap-10 cus-sm:gap-6 cus-sm:mr-3 items-center">
            </div>
            <div className="flex flex-row justify-evenly">
                <HiX onClick={() => setToggle(!toggle)} className='text-white text-[25px] cursor-pointer mr-3'/>
            </div>
          </>
        ) : (
          <>
            <div className="cus-md:ml-5 cus-sm:ml-4">
              <a className="cursor-pointer" onClick={handleRefreshClick}>
                <AppleIcon />
              </a>
            </div>
            <div className={`flex cus-sm:hidden cus-md:flex cus-lg:flex cus-lg:gap-10 cus-md:gap-6 cus-md:items-center`}>
              {menuList.map((item) => (
                <h2 key={item.id} className='text-white text-[13px] cursor-pointer' onMouseEnter={() => handleMenuHover(item.contents)}>{item.title}</h2>
              ))}
            </div>
            <div className="cursor-pointer flex flex-row cus-lg:gap-10 cus-sm:gap-6 cus-sm:mr-3 items-center">
              <div className="flex flex-row cus-lg:gap-10 cus-md:gap-5 cus-sm:gap-6  items-center">
                <a className="md:inline-block">
                  <SearchIcon />
                </a>
                <a className="md:inline-block cus-md:mr-2">
                  <ShoppingIcon />
                </a>
              </div>
              <div className="cus-lg:hidden cus-md:hidden">
                <HiMenuAlt4 onClick={() => setToggle(!toggle)} className='text-white text-[25px] cursor-pointer' />
              </div>
            </div>
          </>
        )}
      </nav>
      {showContent && (
        <div className="text-white w-full h-max bg-neutral-900 pl-[16%]" onMouseLeave={() => setShowContent(false)}>
        <div className="flex flex-row">
          {text.map((item) => (
            <div key={item.id} className="text-sm font-normal p-4 text-gray-500 pr-20 pt-10">
              {item.content}
              {item.con && (
                <div className="text-white pt-4">
                  {item.con.map((subItem) => (
                    <div key={subItem.id} className={`pt-3 font-bold ${item.id === 0 ? 'text-xl' : 'text-md'}`}>
                      {subItem.cons}
                    </div>
                  ))}
                </div>
              )}
              {item.subcon && (
                <div className="text-white pt-4">
                  {item.subcon.map((subconItem) => (
                    <div key={subconItem.id} className="text-sm font-semibold pt-2">
                      {subconItem.subcons}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      )}
      <div className="cus-md:hidden cus-lg:hidden">
        {toggle ? <MenuOverlay menuList={menuList} /> : null}
      </div>
    </div>
  );
};

export default Navi;