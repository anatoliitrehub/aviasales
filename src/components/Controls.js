
import React from "react";

const Controls = ({ onIncrement, onChangeUsd, onChangeEur }) => (
    <div>
        <button type="button" onClick={onIncrement}>меняем</button>
        <button type="button" onClick={onChangeUsd}>USD</button>
        <button type="button" onClick={onChangeEur}>EUR</button>
    </div>
);

export default Controls;