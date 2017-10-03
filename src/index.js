/* eslint-disable import/default */

import 'babel-polyfill' ;
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Router';

render(
 <Root />,
 document.getElementById('main')
);
