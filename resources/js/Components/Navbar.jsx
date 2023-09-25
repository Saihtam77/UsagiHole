import {Link, usePage} from "@inertiajs/react";
import React from "react";

const Navbar = () => {
   const {auth} = usePage().props;
   return (
      <header className="flex justify-between p-5 sticky top-0 z-50 bg-slate-300 lg:mb-5 ">
         <section className="flex">
            <ul className="flex gap-3">
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href={route("contact")}>Contact</Link>
               </li>
               <li>
                  <Link href="/catalogue">Catalogue</Link>
               </li>
               <li>
                  <Link href="/blogs">Blogs</Link>
               </li>
            </ul>
         </section>
         <section className="flex gap-3">
            {!auth.user && (
               <ul className="flex gap-3">
                  <li>
                     <Link href="/register">Register</Link>
                  </li>

                  <li>
                     <Link href="/login">Login</Link>
                  </li>
               </ul>
            )}

            {auth.user && (
               <ul className="flex gap-3">
                  <li>
                     <Link href={route("dashboard")}>Dashboard</Link>
                  </li>

                  <li>
                     <Link as="button" method="post" href="/logout">
                        Logout
                     </Link>
                  </li>
               </ul>
            )}
         </section>
      </header>
   );
};

export default Navbar;
