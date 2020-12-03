import react from 'react';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
    const deleteKeep = (event) =>{
        const id = event.target.id;
        props.removeNote(id);
    }
    return (
        <>
            {props.noteList.map((value,index) =>{
                return (
                    <div className="col-md-3 Note">
                        <div className="well">
                            <h5>{value.title}</h5>
                            <hr/>
                            <br/>
                            <p>{value.content}</p>
                            <div className="text-right"><DeleteOutline className="deleteIcon" id={index} onClick={deleteKeep} /></div>
                        </div>
                    </div>
                );
            })}
            
        </>
    );
}
export default Note;