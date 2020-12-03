import react,{useState} from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
const Keepnote = () => {
    const [addItem,setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((oldData)=>{
            return [...oldData,note];
        });
    };

    const deleteNote = (id) => {
        id = parseInt(id);
        setAddItem((oldData)=>{
            return oldData.filter((value,index) =>{
              return id !== parseInt(index);
            });
        });
    }


    return (
        <div className="row border">
            <div className="container">
                <div className="col-md-12">
                    <div className="jumbotron"><h3>Keep Note Demo</h3></div>
                </div>
                <div className="col-md-12">
                    <Header />
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <CreateNote passNote={addNote} />
                    </div>
                    <div className="row">
                        <Note noteList={addItem} removeNote={deleteNote} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keepnote;