import react,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {
    const [note, setNote] = useState({title:"",content:""});
    const InputEvent = (event) => {
        const { name,value } = event.target;
        setNote((oldData)=>{
            return {
                ...oldData,
                [name]:value,
            };
        });
    }

    const AddEvent = () => {
        props.passNote(note);
        setNote({title:"",content:""});
    };

    const [expand,setExpand] = useState(false);

    const expandIt = () => {
        expand == false ? setExpand(true) : setExpand(false);
    }

    return (
        <>
            <div className="col-md-offset-4 col-md-4 main_note" onClick={expandIt}>
                <form className="well">
                    { expand?
                        <div className="form-group">
                            <input type="text" placeholder="Title" className="form-control" autoComplete="off" name="title" value={note.title} onChange={InputEvent} />
                        </div>
                    : null}
                        <div className="form-group">
                            <textarea rows="" column="" placeholder="Write a note..." className="form-control" name="content" value={note.content} onChange={InputEvent} ></textarea>
                        </div>
                        <div className="form-group text-right">
                            <Button type="button" variant="contained" color="link" onClick={AddEvent}><AddIcon className="text text-success"/></Button>
                        </div>
                </form>
            </div>
        </>
    );
}
export default CreateNote;