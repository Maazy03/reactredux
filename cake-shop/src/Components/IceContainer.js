import React from 'react'
import {connect } from 'react-redux'
import {buyIce} from '../redux'
function IceContainer(props) {
    return (
        <div>
            <h1>ICE CREAM CONTAINER -{props.numOfIce}</h1>
            <button onClick={props.buyIce}>BUY CAKE</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIce: state.Ice.noofIce
    }
}


const mapDispatchToProps = (dispatch) => {
    return { 
        buyIce: () => dispatch(buyIce())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceContainer)
