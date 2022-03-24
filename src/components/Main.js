import React from 'react';
import { ReactDOM } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'; // импортируем все actions как локал объекты
import Menu from './Menu';
import Modal from './Modal';
import store from '../redux/Store';
import OutSector from './OutSector';
import Controls from './Controls';

function Main({ onChangeUah, onChangeUsd, onChangeEur, onFilter0, onFilter1, onFilter2, onFilter3, onFilter4 }) {

    // console.log(store.getState());


    return (
        <>
            <div className='container'>
                <div className='aero'>
                    <img src={require("../img/fly.png")} alt="" />
                </div>
                {/* <Controls onIncrement={onIncrement} onChangeUsd={onChangeUsd} onChangeEur={onChangeEur} /> */}
                <Menu onChangeUsd={onChangeUsd} onChangeEur={onChangeEur} onChangeUah={onChangeUah} onFilter4={onFilter4} onFilter0={onFilter0} onFilter1={onFilter1} onFilter2={onFilter2} onFilter3={onFilter4} onFilter0={onFilter0} />
                {/* <Modal /> */}
                <OutSector />
            </div>


        </>
    )
}

const mapStateToProps = state => { //собирает свойства и возвращает объект
    return {
        // value: state.counterValue, // объект value со значением counterValue то что в Store
        value: state, // объект value со значением valuta то что в Store
        // value: state.sector.koef // объект value со значением valuta то что в Store
    }

};

const mapDispatchToProps = dispatch => {
    return {
        // onIncrement: () => dispatch(actions.increment(7)),
        onChangeUsd: () => dispatch(actions.changeval("USD", 0.3)),
        onChangeEur: () => dispatch(actions.changeval("EUR", 0.25)),
        onChangeUah: () => dispatch(actions.changeval("UAH", 1)),
        onFilter4: () => dispatch(actions.filter(4)),
        onFilter0: () => dispatch(actions.filter(0)),
        onFilter1: () => dispatch(actions.filter(1)),
        onFilter2: () => dispatch(actions.filter(2)),
        onFilter3: () => dispatch(actions.filter(3)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main); //связка действий и пропсов