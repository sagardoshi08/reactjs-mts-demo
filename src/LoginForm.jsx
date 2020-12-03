import react, {useState} from 'react';

const LoginForm = () => {

    const [fullname,submitedname] = useState({
        fname: "",
        lname:"",
        email:"",
        phone:"",
    });

    const [name,formdata] = useState({
        ...fullname
    });

    const inputEvent = (event) => {
        const { name ,value }= event.target;
        submitedname((formvalue) => {
            return({
                ...formvalue,
                [name]: value,
            });
        });
       
    }

    const OnSubmits = (event) =>{
        event.preventDefault();
        formdata((name) => {
            return {
                ...fullname
            }
        });
    }

    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h4>Login Form Demo</h4>
                        </div>
                    </div>
                    <form onSubmit={OnSubmits}>
                        <div className="col-md-12"> 
                            <div className="form-group">
                                <h6>On Type Input Box Value- <b>{fullname.fname +' '+ fullname.lname+' '+ fullname.email+' '+ fullname.phone }</b></h6>
                                <h6>On Submit Input Box Value: <b>{name.fname +' '+ name.lname+' '+ name.email+' '+ name.phone }</b></h6>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="fname" onChange={inputEvent} value={fullname.fname} placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="lname" onChange={inputEvent} value={fullname.lname} placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" onChange={inputEvent} value={fullname.email} placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="phone" onChange={inputEvent} value={fullname.phone} placeholder="Phone" />
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;