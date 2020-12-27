import React, { useEffect } from 'react';
import styles from 'resources/styles/Home.module.css';
import { req } from 'reduxjs/actions/requestActions';
import { connect } from 'react-redux';

function request(props) {
  const { loginStatus, imagesData, DoRequest } = props;

  useEffect(async () => {
    DoRequest();
  }, []);

  return (
    <div className={styles.container}>
      {imagesData.map((value) => (
        <img key={value.id} src={value.avatar} alt="Italian Trulli" />
      ))}
      <h1>
        login Status:
        {loginStatus.toString()}
      </h1>
      <h1>try to open your console, and you will see all the REQUEST that called.</h1>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loginStatus: state.request.loginStatus,
  imagesData: state.request.imagesData,
});

const mapDispatchToProps = (dispatch) => ({
  DoRequest: (params, data) => dispatch(req(params, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(request);
