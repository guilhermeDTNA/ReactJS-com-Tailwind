import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";

export default class Home extends React.Component{
    render(): React.ReactNode {

        return(
            <Show />
        )   
    }
}

const Show = () => {
    const [test, setTest] = useState<Boolean>(false);

    return <>
        <button onClick={() => setTest(!test)}>Show</button>
        
        {test ? <Dropdown /> : ''}
    </>
}