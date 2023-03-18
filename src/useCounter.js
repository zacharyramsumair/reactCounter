import { useState } from "react";

export const useCounter =(initalValue =0)=>{
    const [count, setCount] = useState(initalValue);


    function plus() {
		setCount((prevCount) => prevCount + 1);
	}

	function subtract() {
		setCount((prevCount) => prevCount - 1);
	}

  function zero() {
		setCount(initalValue);
	}


    return {count, plus, subtract, zero , initalValue}
}