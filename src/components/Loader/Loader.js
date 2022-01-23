import React from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Loader.module.css';

export const Spinner = ({ height = 70, width = 70 }) => {
  return (
    <section className={s.Loader}>
      <Oval
        color="#073963"
        strokeWidth={5}
        height={height}
        width={width}
        secondaryColor="rgb(150, 191, 224)"
      />
    </section>
  );
};

Spinner.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spinner;
