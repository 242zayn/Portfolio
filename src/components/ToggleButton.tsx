import { Close, Menu } from '@mui/icons-material'
import React, {FC, useState} from 'react'


interface setopenType {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleButton :FC<setopenType>  = ({setOpen}) => {

     const [hambarger,setHamberger]=useState(false)
     console.log(hambarger)
   
       const handleTogle = ()=>{
          setOpen((prev)=> !prev)
          setHamberger((prev)=> !prev)
       }
  return (
    <button onClick={handleTogle}  className=' w-[50px] h-[50px] rounded-[50%] fixed bg-transparent top-6 left-6 ' >
     {
        !hambarger ? <Menu /> : <Close />
     }
    </button>
  )
}

export default ToggleButton