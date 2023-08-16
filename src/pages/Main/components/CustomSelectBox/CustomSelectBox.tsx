import React, { useState } from 'react';
import './CustomSelectBox.scss'

interface CustomSelectBoxInputs {
    selectSorted: string;
}

interface CustomSelectBoxOutputs {
    onSelect: (selectSorted: string) => void;
}

type FormParseCaloriesProps = CustomSelectBoxInputs & CustomSelectBoxOutputs;

export const CustomSelectBox = ({onSelect, selectSorted}:FormParseCaloriesProps) =>  {
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Порядок: сперва новые', 'Порядок: сперва дешевле', 'Порядок: сперва дороже'];

    return (
        <div className="custom-select-box">
            <div className="custom-select-box__selected" onClick={() => setIsOpen(!isOpen)}>
                {selectSorted}
                <div className={`select-triangle ${isOpen ? 'active' : ''}`}> </div>
            </div>
            <div className={`custom-select-box__options ${isOpen ? 'active' : ''}`}>
                {options.map(option => (
                    <div
                        className={`custom-select-box__option ${selectSorted === option ? 'active' : ''}`}
                        key={option}
                        onClick={() => {
                            onSelect(option);
                            setIsOpen(false);
                        }}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}
