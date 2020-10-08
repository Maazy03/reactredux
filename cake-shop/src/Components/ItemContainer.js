import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIce } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h1>ITEM CONTAINER{props.item}</h1>
            <button onClick={props.buyItem}>BUTTTTTTTT</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const ItemState = ownProps.cake ? state.Cake.noofCakes : state.Ice.noofIce
    return{
        item: ItemState
    }
}

const mapDispatchToProps=(dispatch, ownProps)=> {
    const ItemDispatch = ownProps.cake
    ? ()=>dispatch(buyCake())
    : ()=>dispatch(buyIce())

return{
    buyItem:ItemDispatch
}
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
