import React,{ memo } from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head'

const Kelpo = (props)=> {
  const {title, color} = props; 
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h2>KELPO</h2>
      <h1>{color}</h1>
      <h3>{` ${process.env.REACT_APP_NAME}`}</h3>
    </>
  )
}

Kelpo.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "red",
    "blue",
    "green"
  ])
};

Kelpo.defaultProps = {
  color: "red",
};

export default memo(Kelpo)