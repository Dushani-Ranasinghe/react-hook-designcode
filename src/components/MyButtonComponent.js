import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function MyButtonComponent() {
    const [count,setCounter] = useState(0)

    useEffect(() => {
        document.title = `clicked ${count} times`;
      },[count]);

  return <div>
    <Button onClick={()=>{setCounter(count+1)}}>You clicked {count}</Button>
  </div>;
}
const Button = styled.button`
background: ${(props) => props.disabled ? "grey" : "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)"};
  /* background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%); */
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
`;
