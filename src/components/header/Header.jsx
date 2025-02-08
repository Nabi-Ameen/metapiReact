import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { menuItems } from '../../assets/menus';

const Header = () => {
    // const pathName = useLocation();
    // console.log("pathName", pathName)
    return (
        <div className='bg-gray-200 p-2 flex items-center gap-5'>
            {
                menuItems?.map((item, index) => {
                    return (
                        <NavLink key={index} to={item?.route} className={({ isActive }) => isActive ? "text-green-500 font-bold" : ""}>
                            {item?.routeName}
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Header