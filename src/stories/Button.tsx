import React from "react";
type Props = { 
    variant: 'green' | 'red' | 'black',
    size: 'sm' | 'md' | 'lg'
};

const Button = ({variant = 'black', size = 'md'}: Props) => {
  let scale = 1
  if (size == "sm") scale = 0.75
  if (size == "lg") scale = 1.5  
  return (
      <button style={{
        backgroundColor: variant,
        width: '40%',
        height: 60,
        padding: `${scale * 0.75}rem ${scale * 1.5}rem`,
        color: "white",
        textAlign: "center",
        borderRadius: 5,

      }}>
        Log Out
      </button>
  );
};

export default Button;
