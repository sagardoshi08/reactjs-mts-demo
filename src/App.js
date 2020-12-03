import React from 'react';
import Card from './Card';
import Sdata from './Seriasdata';
import './App.css';

function App() {
  return (
    <>
      <div>
        <div className="row">
          <div className="container">
            <div className="col-md-12 text-center">
              <h4>List of top five netfilx series in 2020</h4>
            </div>
            {Sdata.map((val,index) => {
                return (<Card key={val.id} imgsrc={val.imgsrc} title={val.title} seriasname={val.sname} link={val.link} />)
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
