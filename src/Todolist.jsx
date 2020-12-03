import react, {useState} from 'react';
const Todolist = () => {
    const [Inputlist,setInputList] = useState("");
    const [Items,setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        if(Inputlist != ""){
            setItems((olditems) => {
                return [...olditems,Inputlist];
            })
            setInputList(""); 
        }else{
            alert('Please enter to do item...');
        }
    };

    const DeleteItem = (event) => {
        const id = parseInt(event.target.id);
        setItems((olditems) => {
            return olditems.filter((arrElem,index)=>{
                return id !== parseInt(index);
            });
        })
    };

    return (
        <>
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h4>To Do List</h4>
                        </div>
                    </div>
                    <div className="col-md-11 form-group">
                        <input type="text" className="form-control" placeholder="Add an item" onChange={itemEvent} value={Inputlist} />
                    </div>
                    <div className="col-md-1 form-group">
                        <button type="button" className="btn btn-success" onClick={listOfItems}><i className="fa fa-plus"></i></button>
                    </div>

                    <div className="col-md-12 form-group">
                        <ol className="list-group">
                            {Items.map((itemval,index) => {
                                return <li className="list-group-item">{itemval}<span className="badge bg bg-danger"><i className="fa fa-times" onClick={DeleteItem} id={index}></i></span></li>
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todolist;