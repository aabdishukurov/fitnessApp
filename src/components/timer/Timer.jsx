import React, { useEffect, useState } from 'react';
import styles from "./timer.module.scss" 


const Timer = () => {

    const initialState = 5*60
    const [timer, setTimer] = useState(initialState)
    const [isCounting, setIsCounting] = useState(false)


    const minutes = (Math.floor(timer/60)).toString().padStart('2', '0')
    const seconds = (timer - minutes * 60).toString().padStart('2', '0')


    useEffect(()=>{
        const interval = setInterval(()=>{
            isCounting &&
                setTimer((timer) => (timer >=1 ? timer -1: 0)) 
        }, 1000)
        if (timer === 0) {
            setIsCounting(false)
        }
        return () => {
            clearInterval(interval)
        }
    },[timer, isCounting])


    const handleStart = () =>{
        setIsCounting(true)
    }

    const handleStop = () =>{
        setIsCounting(false)
    }

    const handleReset = () =>{
        setIsCounting(false)
        setTimer(initialState)
    }

    return (
        <div className='container'>
            <div className={styles.timerComponent}>
                <div className={styles.timer}>
                    <span>{minutes}</span>
                    <span>:</span>
                    <span>{seconds}</span>
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default Timer;
=======
export default Timer;
>>>>>>> 32828fa07c53bad885685dd4fa2a1a7e32952ed7
