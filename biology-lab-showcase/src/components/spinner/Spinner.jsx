import React from 'react';
import style from './spinner.module.css'

const Spinner = () => {
  return <div className={style.loading_page}><div className={style.spinner}></div></div>;
}

export default Spinner
