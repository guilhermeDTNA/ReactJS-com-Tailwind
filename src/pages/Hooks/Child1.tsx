import {memo, useContext} from "react";
import UserContext from "../../contexts/UserContext";

interface child {
    value: Number,
    setValue: Function,
    color: String
}

const Child1 = ({value, setValue, color}: child) => {
    console.log("C1");
    console.log(typeof setValue)

    const { user } = useContext(UserContext);

    return(
        <>
            <button className="block mr-[10px]" onClick={() => setValue()} style={{color: `${color}`}}>
                Incrementando: { value.toString() }
            </button>
            <strong className="block mr-[10px]">{user}</strong>
        </>
        
    )
}

export default memo(Child1);