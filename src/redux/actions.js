// функция совершения действия над пришедшим значением value

// export const increment = value => ({
//     type: 'valuta/uah',
//     payload: value, //выходящее значение
// });


export const changeval = (value, koef) => ({
    type: 'valuta',
    valuta: value,
    koef: koef //выходящее значение
});

export const filter = (value) => ({
    type: 'filter',
    one: value,
})



