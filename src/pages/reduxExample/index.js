import styles from 'resources/styles/Home.module.css';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from 'reduxjs/actions/counterActions';

function ReduxExample(props) {
  const { count } = props;

  return (
    <div className={styles.container}>
      <h1>
        value :
        {count}
      </h1>
      <form>
        <button type="button" onClick={() => props.incrementCounterFromRedux()}>Increment</button>
        <button type="button" onClick={() => props.decrementCounterFromRedux()}>Decrement</button>
      </form>
      <h1>try to open your console, and you will see all the REDUX that has been set before.</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  decrementCounterFromRedux: () => dispatch(decrementCounter()),
  incrementCounterFromRedux: () => dispatch(incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
