import React from 'react';
import './Preloader.scss';

const Preloader = props => {
    const {color, width, height} = props;
    const styles = {
        wrapper: {
            justifyContent: 'center',
            display: 'flex',
            flexGrow: 1,
            marginTop: `calc(50vh - ${height ? height/2 : '40px'}`
        },
        base: {
            width: width ? width : '80px',
            height: height ? height : '80px',
        },
        child: {
            background: color ? color : '#85929E',
        }
    }
    return (
        <div style={styles.wrapper}>
            <div className="lds-ellipsis" style={styles.base}>
                <div style={styles.child}></div>
                <div style={styles.child}></div>
                <div style={styles.child}></div>
                <div style={styles.child}></div>
            </div>
        </div>
    );
}

export default Preloader;