import {useState} from "react";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";


const Dropdown = () => {
    const [selected, setSelected] = useState<String>("Item 1");
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    function handleSelected(value: String | null){
        value ? setSelected(value) : setSelected("Item 1");
        setIsOpen(false);
    }

    return (
        <div className={`bg-sky-500`}>
            <div className="flex items-center" onClick={() => setIsOpen(true)}>
                <span>{selected}</span>

                {isOpen ? <BsCaretUp /> : <BsCaretDown />}
            </div>

            <ul className={isOpen ? `block` : 'hidden'}>
                <li data-value="Item 1" onClick={(e) => handleSelected(e.currentTarget.getAttribute('data-value'))}>Item 1</li>
                <li data-value="Item 2" onClick={(e) => handleSelected(e.currentTarget.getAttribute('data-value'))}>Item 2</li>
                <li data-value="Item 3" onClick={(e) => handleSelected(e.currentTarget.getAttribute('data-value'))}>Item 3</li>
                <li data-value="Item 4" onClick={(e) => handleSelected(e.currentTarget.getAttribute('data-value'))}>Item 4</li>
            </ul>
        </div>
    );
}

export default Dropdown;