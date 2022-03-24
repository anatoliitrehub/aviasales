
var peresad = new Set();  //combination changes
var ValSel = "p"; //valute selector
var ValK = 1;  // multiply valute
var stopStr = "4";  // quantity stops
peresad.add(stopStr);  // default combination


var obj = JSON.parse(tick, function (k, v) {
    return k, v;
});

ItemCheck();
SectionsShow(ValSel, ValK, peresad);
ValChange('div.rub');  //default  valute RUB

function SectionsShow(v, k, qs) {
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
};

// valute select
document.querySelectorAll('div.val-sel').forEach(elem =>
    elem.addEventListener('click', function () {
        elem.classList.forEach(item => {
            switch (item) {
                case "rub":
                    ValChange('div.rub');
                    ValSel = " p";
                    ValK = 1;
                    break;


                case "usd":
                    ValChange('div.usd');
                    ValSel = " $";
                    ValK = 0.3;
                    break;

                case "eur":
                    ValChange('div.eur');
                    ValSel = " Euro";
                    ValK = 0.35;
                    break;
            }
            //clear page
            document.querySelector('div.items').innerHTML = "";
            SectionsShow(ValSel, ValK, peresad);

        })
    }))

// stops combination
document.querySelector('div.q-chang').onchange = () => {
    document.querySelector('div.items').innerHTML = "";
    ItemCheck();
    SectionsShow(ValSel, ValK, peresad);

}

function ValChange(out) {
    document.querySelector('div.rub').removeAttribute("style");
    document.querySelector('div.usd').removeAttribute("style");
    document.querySelector('div.eur').removeAttribute('style');
    document.querySelector('div.rub').style.color = "blue";
    document.querySelector('div.usd').style.color = "blue";
    document.querySelector('div.eur').style.color = "blue";
    document.querySelector(out).setAttribute('style',
        'background-color: blue; color: white;');
}


function ItemCheck() {
    let t = document.querySelectorAll('input.item');
    for (let i = 1; i < t.length; i++) {

        if (t[0].checked) {
            t[i].checked = true;
            peresad.add(t[i].value)
        }

        if (t[i].checked && !t[0].checked) peresad.add(t[i].value);
        else if (!t[i].checked && !t[0].checked) peresad.delete(t[i].value);

    }
    peresad.delete("4"); // clear trigger "all"
}

// Modal window
var modal = document.getElementById("myModal");

// Button BUY
function buto() {
    let but = document.querySelectorAll('section');
    but.forEach(el =>
        el.addEventListener('click', function () {
            this.querySelectorAll('button.buy').forEach(item => {
                modal.style.display = "block";
            })
            this.querySelectorAll('span.itemprice').forEach(item => document.querySelector('span.out').textContent = item.innerHTML);
        }))
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
