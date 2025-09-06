import React from 'react';

export default function Button({texto,funcionalidad}) 
{
  // const handleMouseDown = () => {
  //   setIsPressed(true);
  // }
  
  // const handleMouseUp = () => {
  //   setIsPressed(false);
  // }
  
  // const handleClick = () => {
  //   funcionalidad();
  // }

  return (
    <div>
      <button onClick={() => funcionalidad()} 
        className='bg-blue-950 text-3xl text-white p-6 m-4 rounded-lg'>{texto}</button>
    </div>

    // <div>
    //   <button
    //     onClick={handleClick} 
    //     onMouseDown={handleMouseDown}
    //     onMouseUp={handleMouseUp}
    //     onMouseLeave={() => setIsPressed(false)}
    //     className='bg-blue-950 text-3xl text-white p-6 m-4 rounded-lg transition-transform'>{texto}</button>
    // </div>
  );
}

