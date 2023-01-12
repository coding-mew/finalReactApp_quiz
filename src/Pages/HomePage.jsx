import React from 'react'

function HomePage() {
  return (

       <div className="Homepage">
      <h1 data-text="Enter the Quiz Universe" className="home_animation">
       
       <span>Enter the Quiz Universe</span>
     
       </h1>
    </div>
  )
}

export default HomePage

// function Demo() {
//   // For fun, try swapping out 'rising-pops' with:
//   // - fanfare
//   // - dun-dun-dun
//   // - guitar-loop
//   const soundUrl = '/sounds/rising-pops.mp3';

//   const [play, { stop }] = useSound(
//     soundUrl,
//     { volume: 0.5 }
//   );

//   const [isHovering, setIsHovering] = React.useState(
//     false
//   );

//   return (
//     <Button
//       onMouseEnter={() => {
//         setIsHovering(true);
//         play();
//       }}
//       onMouseLeave={() => {
//         setIsHovering(false);
//         stop();
//       }}
//     >
//       <ButtonContents isHovering={isHovering}>
//         Hover over me!
//       </ButtonContents>
//     </Button>
//   );
// }