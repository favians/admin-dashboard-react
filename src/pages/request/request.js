import React, { useEffect, useState } from 'react'
import styles from 'resources/styles/Home.module.css'
import { GetListUser } from 'helpers/request/User'

export default function JustCallDotENv() {
  const [user, setUser] = React.useState([])

  useEffect(async () => {
    const result = await GetListUser("username", "password")
    if (result){
      setUser(result.data)
    }
  }, []);

   return (
    <div className={styles.container}>
        {user.map((value, index) => (
          <img key={index} src={value.avatar} alt="Italian Trulli"/>
      ))}
      <h1>try to open your console, and you will see all the REQUEST that called.</h1>
    </div>
  )
}
