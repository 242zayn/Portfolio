// import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import {motion} from "framer-motion"
// import { Close } from "@mui/icons-material";

// const SidebarMenu = () => {
 
//      const [open , setOpen]=useState(false)


//   return (
//     <motion.div className=" z-[999] dark:text-black text-white fixed dark:bg-white bg-black" animate={open ? 'opens': 'closed'} >
//       <motion.div className= {` fixed top-0 left-0   bg-white ${ open ? " w-[400px] h-screen " : " rounded-full"}  `}  >

        
//           {
//             open ? <span className="flex cursor-pointer items-center justify-start   " onClick={()=> setOpen(false)}><Close className=" h-[70px] w-[70px] p-3 " /> </span> : <span className="flex cursor-pointer items-center justify-start   " onClick={()=> setOpen(true)}> <MenuIcon className=" h-[70px] w-[70px] p-3   rounded-full  top-12 left-[70px] " />  </span>
            
//           }
      

//       </motion.div>
//     </motion.div>
//   );
// };

// export default SidebarMenu;

{
  /* <span   className="flex cursor-pointer items-center justify-start   "  >
<MenuIcon  className=" h-[70px] w-[70px] p-3   rounded-full  top-12 left-[70px] "   />
</span> */
}


import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {motion} from "framer-motion"
import { Close } from "@mui/icons-material";
import ToggleButton from "./ToggleButton";

const SidebarMenu = () => {
 
     const [open , setOpen]=useState(false)
    //  alert(open)
 
      const variants = {
        open:{
          clipPath: "circle(1200px at 50px 50px)",
          stiffiness: 20,
          type: "spring"
        },
        closed : {
          clipPath: "circle(30px at 50px 50px)",
          
          transition: {
            delay: 0.5 ,
            type: "spring",
            stiffness: 400,
            damping:40
          }
        }
      }

  return (
    <motion.div  animate={ open ? "open": "closed"} className={` z-[999] sidebar flex flex-col items-center justify-center bg-white text-black `}>
      <motion.div variants={variants} className={` bg fixed top-0 left-0 bottom-0 w-[400px] bg-white `}  >
       <h1>link</h1>
      

      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
};

export default SidebarMenu;
