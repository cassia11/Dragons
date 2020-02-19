import React from 'react';
import './css/Loading.scss'
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <div className="loading">
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
);

export default Loading;