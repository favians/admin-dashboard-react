import React,{ memo } from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head'

const SagaLul = (props)=> {
  const {title, color} = props; 
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h2>SAGA LUL</h2>
      <h1>{color}</h1>
      <h3>{` ${process.env.REACT_APP_NAME}`}</h3>
    </>
  )
}

SagaLul.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "yellow",
    "cyan",
    "black"
  ])
};

SagaLul.defaultProps = {
  color: "yellow",
};

export default memo(SagaLul)