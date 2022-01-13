import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavPhoneBook = () => {
  const isloggedInUser = useSelector((state) => state.auth.isloggedInUser);
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            {isloggedInUser &&
            <li>
              <NavLink exact to="/contacts">
                Contacts
              </NavLink>
            </li>}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavPhoneBook;
//////
// const NavPhoneBook = () => {
//   return (
//     <>
//       <nav className={s.section}>
//         <div className={s.container}>
//           <ul className={s.list}>
//             <li className={s.item}>
//               <NavLink to="/login" activeClassName={s.activeLink}>
//                 Login
//               </NavLink>
//             </li>
//             <li className={s.item}>
//               <NavLink to="/register" activeClassName={s.activeLink}>
//                 Registration
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavPhoneBook;