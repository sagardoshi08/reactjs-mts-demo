import react, {useState} from 'react';

const Formdemo = () => {
    const [name,updatedname] = useState("");
    const [fullname,submitedname] = useState("");
    const inputEvent = (event) => {
        updatedname(event.target.value);
    }

    const submitData = () =>{
        submitedname(name);
    }

    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h4>Form Demo</h4>
                        </div>
                    </div>
                    <div className="col-md-12"> 
                        <div className="form-group">
                            <h6>Input Box Value: <b>{fullname}</b></h6>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={inputEvent} value={name} />
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-primary" onClick={submitData}>Click Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Formdemo;