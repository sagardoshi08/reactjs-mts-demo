import React from 'react';
function Card(props){
    return (
        <>
            <div className="col-md-4 text-center">
                <div className="card well">
                    <img src={props.imgsrc} height="250" width="250"/>
                    <div className="card__info">
                        <p className="card__category">{ props.title }</p>
                        <h5>{props.sname}</h5>
                        <a href="{props.link}" target="_blank" className="btn btn-success">Wathc Now</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;