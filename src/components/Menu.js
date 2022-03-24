import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import store from "../redux/Store";
import OutSector from "./OutSector";

function Menu({ onIncrement, onChangeUah, onChangeUsd, onChangeEur, onFilter0, onFilter1, onFilter2, onFilter3, onFilter4 }) {
    const [valStyleUah, setValStyleUah] = useState({ color: "white", background: "blue" });
    const [valStyleUsd, setValStyleUsd] = useState({ color: "blue", background: "white" });
    const [valStyleEur, setValStyleEur] = useState({ color: "blue", background: "white" });
    const [valSel, setValSel] = useState("грн");
    const [valK, setValK] = useState(1);

    // console.log(store.getState());

    const state = store.getState(); //получаем данные Стор


    function ValChange(event) {
        let cl = event.target.getAttribute('class')
        if (cl.includes('uah')) {
            // event.target.removeAttribute("style");
            // event.target.style.backgroundColor = "blue";
            // event.target.style.color = "white";
            // event.target.style = { color: "white", background: "blue" };
            // setValStyle({ color: "blue", backgroundColor: "green" })
            // console.log(valStyle)
            // event.target.classList.add("val-activ");
            setValStyleUah({ color: "white", background: "blue" });
            setValStyleUsd({ color: "blue", background: "white" });
            setValStyleEur({ color: "blue", background: "white" });
            // setValSel('грн');
            // setValK(1);

            // console.log(event.target.getAttribute('style'))

        }
        if (cl.includes('usd')) {
            setValStyleUah({ color: "blue", background: "white" });
            setValStyleUsd({ color: "white", background: "blue" });
            setValStyleEur({ color: "blue", background: "white" });
            setValSel('$');
            setValK(0.3);

        }

        if (cl.includes('eur')) {
            setValStyleUah({ color: "blue", background: "white" });
            setValStyleUsd({ color: "blue", background: "white" });
            setValStyleEur({ color: "white", background: "blue" });


        }
        // event.target.style = { color: "blue" }
        // document.querySelector('div.rub').removeAttribute("style");
        // document.querySelector('div.usd').removeAttribute("style");
        // document.querySelector('div.eur').removeAttribute('style');
        // document.querySelector('div.rub').style.color = "blue";
        // document.querySelector('div.usd').style.color = "blue";
        // document.querySelector('div.eur').style.color = "blue";
        // document.querySelector(out).setAttribute('style',
        //     'background-color: blue; color: white;');
    }

    function FilterChange(event) {
        console.log(event.target.name, event.target.checked);

        console.log(store.getState())
        switch (event.target.value) {
            case '4': onFilter4();
            case '0': onFilter0();
            case '1': onFilter1();
            case '2': onFilter2();
            case '3': onFilter3();
        }

    }

    const { one, two, three, noone, all } = state

    return (
        <>

            <div className="wrapMenu">
                <div className="wrap">
                    {state.filter.one}

                    <h3>ВАЛЮТА</h3>
                    <div className="valuta" onClick={ValChange}>
                        <div className="val-sel item-val uah" style={valStyleUah} onClick={onChangeUah}>UAH</div>
                        <div className="val-sel item-val usd" style={valStyleUsd} onClick={onChangeUsd}>USD</div>
                        <div className="val-sel item-val eur" style={valStyleEur} onClick={onChangeEur}>EUR</div>

                    </div>
                    <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
                    <div className="q-chang" onChange={FilterChange}>
                        <input type="checkbox" className="item all" name="4" defaultChecked checked={all} />Все<br />
                        <input type="checkbox" className="item" name="0" checked={noone} />Без пересадок<br />
                        <input type="checkbox" className="item" name="1" checked={one} />1 пересадка<br />
                        <input type="checkbox" className="item" name="2" checked={two} />2 пересадки<br />
                        <input type="checkbox" className="item" name="3" checked={three} />3 пересадки<br />
                    </div>
                </div>
            </div>
            {/* <OutSector props={ValSel, ValK} /> */}


        </>
    )
}



export default Menu;

