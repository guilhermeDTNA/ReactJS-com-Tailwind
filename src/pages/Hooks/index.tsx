import React from "react";
import { useMemo, useState, useEffect, useCallback } from "react";

import Child1 from "./Child1";
import Child2 from "./Child2";

const Hooks = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    useEffect(() => {
        console.log("chamou o effect")
    }, [n1])

    const setNumber1 = useCallback(() => {
        console.log("renderizou função n1")
        setN1(n1 + 1);
    }, [n1])

    const setNumber2 = useCallback(() => {
        console.log("renderizou função n2")
        setN2(n2 + 1);
    }, [n2])

    const changeColor = useMemo(() => {
        //console.log("CHAMOU A FUNÇÃO")
        for(let i = 0; i < 10 ** 9; i++){
              
        }

        if(n1 % 2){
            return 'green';
        } else if(n1 % 3){
            return 'red';
        }

        return 'yellow'; 
    }, [n1]);

    return(
        <>
            <Child1 value={n1} setValue={setNumber1} color={changeColor} />

            <Child2 value={n2} setValue={setNumber2} />
        </>
    )
}

export default Hooks;