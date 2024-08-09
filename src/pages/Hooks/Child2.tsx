import {memo} from "react";

interface child {
    value: Number,
    setValue: Function
}

const Child2 = ({value, setValue}: child) => {
    console.log("C2");

    return(
        <button onClick={() => setValue()}>
            Incrementando: { value.toString() }
        </button>
    )
}

export default memo(Child2);