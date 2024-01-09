''

  export const sideInFormLeft = {
    hidden: {
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 4,
      x: 500,
      opacity: 1,
      transition: {
        delay: .1
      }
    },

     
    }






export const variants = {
  visible: {opacity:1, x: 500, transition:{duration:2}},
  hidden:{opacity:0}
}