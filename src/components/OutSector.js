import React from "react";
import { ReactDOM } from "react-dom";
import { useState } from "react";
import tickets from "../data/tickets.json"
import Sector from "./Sector"
import valSel from "./Menu";
import valK from "./Menu";


function OutSector(props) {
    const [ticks, setTicks] = useState(tickets);

    return (
        <>
            <div className="wrap1">
                <div className="items">

                    {tickets.tickets.map(elem =>

                        <Sector props={elem} key={elem.price + elem.carrier} />

                    )}
                </div>
            </div>

            {/* function SectionsShow(v, k, qs) {
                obj.tickets.forEach(elem => {

                    stopStr = elem.stops.toString();
                    if (qs.has(stopStr)) {
                        let sect = document.createElement('section');
                        let div11 = document.createElement('div');
                        div11.classList.add('wrap2');
                        div11.innerHTML = `<div class="itemspart">
            <div class="carrier">
            <img src="./img/${elem.carrier}.png" alt="">
            </div>
            <button class="buy">Купить <br>за <span class="itemprice">${Math.round(k * elem.price, -2)} ${v}</span></button>
            </div>
            <div class="depart itemspart">
            <p class="dep_time">
             ${elem.departure_time}</p>
            <p class="orig">${elem.origin}, <span class="orig">${elem.origin_name}</span</p>
            <p class="orig-date">${elem.departure_date}</p>
            </div>
            <div class="stop-ivent itemspart">
             ${elem.stops} пересадок<br>
             --------------&#9992;
            </div>
            <div class="arrive itemspart">
            <p class="arr_time">
            ${elem.arrival_time}</p>
            <p class="destin">${elem.destination}, <span class="destin">${elem.destination_name}</span></p>
            <p class="orig-date">${elem.arrival_date}</p>
            </div>`
                        sect.append(div11);

                        document.querySelector('div.items').append(sect);
                    };
                });
            buto();
}; */}


        </>
    )
}

export default OutSector;