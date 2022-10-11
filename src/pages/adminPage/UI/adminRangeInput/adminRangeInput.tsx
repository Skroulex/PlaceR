import React, {useState} from 'react';
import classes from "./adminRangeInput.module.scss"
;

const AdminRangeInput = () => {

    const [value, setValue] = useState("1")

    const [active, setActive] = useState()

    return (
        <div className={classes.inputWrapper}>
            <div className={classes.numbers}>
                <span className={
                    `${value === "1" ? classes.valueSpan : ""}`
                }>x1</span>
                <span className={
                    `${value === "2" ? classes.valueSpan : ""}`
                }>x2</span>
                <span className={
                    `${value === "3" ? classes.valueSpan : ""}`
                }>x3</span>
            </div>
            <input max={3} min={1} className={classes.input} type="range"

                   value={value}
                   style={{background: `linear-gradient(to right, rgba(255,176,59,1) 0%, rgba(255,176,59,1) ${(+value - 1) * 50}%, rgb(200, 200, 200) ${(+value - 1) * 50}%, rgba(153,153,153,1) 100%)`}}
                   onChange={(e) => setValue(e.target.value)}
            />
        </div>

    );
};

export default AdminRangeInput;
