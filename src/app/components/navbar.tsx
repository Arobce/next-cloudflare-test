"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
    return (
        <nav>
           <div>
               <h1>Test App</h1>

               <LoginLink>Log in</LoginLink>
               <RegisterLink>Sign up</RegisterLink>
           </div>
        </nav>
    )
}

export default Navbar;