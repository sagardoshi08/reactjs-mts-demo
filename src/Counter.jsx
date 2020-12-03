import react, {useState} from 'react';
import Clock from 'react-digital-clock';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const Counter = () => {
    
    const [Currentval,UpdateCurVal] = useState(0);
    const IncreaseCounter = (event) =>  UpdateCurVal(parseInt(Currentval)+1);
    const DecreaseCounter = (event) => parseInt(Currentval) != 0 ? UpdateCurVal(parseInt(Currentval)-1) : 0;  

    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <div className="jumbotron"><h4>Increment / Decrement Counter & Digital Clock Demo</h4></div>
                    </div>
                    <div className="col-md-offset-4 col-md-4 form-group text-center">
                        <h1>{Currentval}</h1>
                    </div>
                    <div className="col-md-4 form-group"></div>

                    <div className="col-md-offset-4 col-md-4 form-group text-center">

                        <Tooltip title="Add">
                            <Button className="btn btn-success" onClick={IncreaseCounter}>
                                <AddIcon />
                            </Button>
                        </Tooltip> 
                        &nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <Tooltip title="Remove">
                            <Button className="btn btn-danger" onClick={DecreaseCounter}>
                                <DeleteIcon />
                            </Button> 
                        </Tooltip>
                    </div>
                    <div className="col-md-4 form-group"></div>
                    
                    <div className="col-md-offset-4 col-md-4 form-group text-center">
                        <h1><Clock /></h1>
                    </div>
                    <div className="col-md-4 form-group"></div>
                   
                </div>
            </div>
        </>
    );
};
export default Counter;