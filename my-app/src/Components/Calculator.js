import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onhandleClear, onhandleClick, onhandleEval } from '../redux/calculator.slice';

const Calculator = () => {
    let dispatch = useDispatch();
    const {Input}  = useSelector((state)=> state.calculator)
   


    const handleClick = (value) => {
        dispatch(onhandleClick({value}))
        console.log(value)
        

    }

    const handleClear = () => {

        dispatch(onhandleClear())
        // setInput('');
       

    }
    const handleEval  = () => {
        dispatch(onhandleEval())
    }

  
    return (
        <div>
            <section>
                <div className='container mt-5 '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-md-4">
                            <div className="card"></div>
                            <div className='card-body' >
                                <h5 className='card-title text-center text-primary'>
                                    <i className="fa fa-calculator" aria-hidden="true"></i>Calculator</h5>
                                <input
                                    type="text"
                                    className="form-control mb-3 mt-4"
                                    value={Input}
                                    readOnly
                                />
                               
                                <div className='d-grid gap-2 mb-3'>
                                    <button className='btn btn-outline-danger' onClick={handleClear}>clear</button>
                                </div>
                                {/* Buttons */}

                                <div className='p-3'>
                                    <div className='row p-2 '>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('1')}>
                                                1
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('2')}>
                                                2
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('3')}>
                                                3
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('+')}>
                                                +
                                            </button>
                                        </div>

                                    </div>
                                    <div className='row p-2'>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('4')}>
                                                4
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('5')}>
                                                5
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('6')}>
                                                6
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('-')}>
                                                -
                                            </button>
                                        </div>

                                    </div>
                                    <div className='row p-2'>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('7')}>
                                                7
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('8')}>
                                                8
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('9')}>
                                                9
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('*')}>
                                                *
                                            </button>
                                        </div>

                                    </div>
                                    <div className="row mb-3 p-2">
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('0')}>
                                                0
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('.')}>
                                                .
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-secondary w-100" onClick={() => handleClick('/')}>
                                                /
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-primary w-100" onClick={handleEval}>
                                                =
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>





                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </div>
    )
}

export default Calculator
