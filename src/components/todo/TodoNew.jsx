import { useState } from "react";

const TodoNew = (props) => {

    const { addNewTodo } = props;

    //useState hook
    // const valueInput = "thuan"; - js
    const [valueInput, setValueInput] = useState("thuan");

    const handleOnClick = () => {
        addNewTodo(valueInput);
        setValueInput(""); // reset input value
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div>
            <input
                type="text"
                placeholder='Enter your task'
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput} // băt buộc input phải có giá trị
            />
            <button onClick={handleOnClick}>Add</button>

            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;
