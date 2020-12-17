import styles from 'resources/styles/Home.module.css'
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from 'reduxjs/actions/counterActions';

function ReduxExample(props) {
  return (
    <div className={styles.container}>
      <h1>value : {props.count}</h1>
      
      <button onClick={()=>(props.incrementCounter())}>Increment</button>
      <button onClick={()=>(props.decrementCounter())}>Decrement</button>
      <h1>try to open your console, and you will see all the REDUX that has been set before.</h1>
    </div>
  )
}



const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => {
  return{
    decrementCounter: () => dispatch(decrementCounter()),
    incrementCounter: () => dispatch(incrementCounter()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
