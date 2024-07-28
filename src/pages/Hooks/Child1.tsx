import React, {memo} from "react";

interface child {
    value: Number,
    setValue: Function,
    color: String
}

const Child1 = ({value, setValue, color}: child) => {
    console.log("C1");
    console.log(typeof setValue)

    return(
        <button onClick={() => setValue()} style={{color: `${color}`}}>
            Incrementando: { value.toString() }
        </button>
    )
}

export default memo(Child1);