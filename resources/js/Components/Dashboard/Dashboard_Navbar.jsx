import {Link} from "@inertiajs/react";
import React from "react";

const Dashboard_Navbar = () => {
   return (
      <nav className="flex justify-end first-letter:text-base bg-slate-600 text-white border-white p-5">
         <ul className="flex gap-7">
            <li><Link href="/">Home</Link></li>
            <li><Link as="button" href="/logout">Logout</Link></li>
         </ul>
      </nav>
   );
};

export default Dashboard_Navbar;
