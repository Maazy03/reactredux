import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


function NewCakeContainer(props) {
    const [number,setNumber] = useState(1)

    return ( <div>
            <h2>CAKE OCNTAINER {props.numOfCakes}</h2>
            <input type="text" value={number}  onChange={e=>setNumber(e.target.value)}/>
    <button onClick={()=>props.buyCake(number)} style={{color:"black"}}>BUY {number}CAKE</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.Cake.noofCakes
    }
}


const mapDispatchToProps = (dispatch) => {
    return { 
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect( mapStateToProps,mapDispatchToProps )(NewCakeContainer)
