import React from "react";
import { useState } from "react";
import { ReactDOM } from "react-dom";
import store from "../redux/Store";
import { useSelector, useDispatch } from 'react-redux';

import bra from "../img/ba.png"
import se7 from "../img/s7.png"
import seu from "../img/su.png"
import tuk from "../img/tk.png"

function Sector(ticks) {

    const [imag, setImag] = useState('');
    let image1 = '';
    const im = ticks.props.carrier.toString().toLowerCase();
    {
        (() => {
            switch (im) {
                case 'ba':
                    return image1 = bra;
                case 's7':
                    return image1 = se7;
                case 'su':
                    return image1 = seu;
                case 'tk':
                    return image1 = tuk;
            }
        })()
    }

    const state = store.getState(); //получаем данные Стор

    return (
        <>

            {/* function SectionsShow(v, k, qs) {
                obj.tickets.forEach(elem => { */}

            <section>
                <div className="wrap2">
                    <div className="itemspart">

                        <div className="carrier">
                            <img src={image1} alt="" />
                        </div>
                        <button className="buy">Купить <br />за <span className="itemprice">{state.sector.koef * Math.round(1 * ticks.props.price, -2)} {state.sector.valuta}</span></button>
                    </div>
                    <div className="depart itemspart">
                        <p className="dep_time">
                            {ticks.props.departure_time}</p>
                        <p className="orig">{ticks.props.origin}, <span className="orig">{ticks.props.origin_name}</span></p>
                        <p className="orig-date">{ticks.props.departure_date}</p>
                    </div>
                    <div className="stop-ivent itemspart">
                        {ticks.props.stops} пересадок<br />
                        --------------&#9992;
                    </div>
                    <div className="arrive itemspart">
                        <p className="arr_time">
                            {ticks.props.arrival_time}</p>
                        <p className="destin">{ticks.props.destination}, <span className="destin">{ticks.props.destination_name}</span></p>
                        <p className="orig-date">{ticks.props.arrival_date}</p>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Sector;