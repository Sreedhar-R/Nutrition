import './Textbox.css';

const Textbox = ({searchChange,addUrl,reset,removebtn}) => {
    return(
        <div className="col-sm-7" style={{marginTop:'40px'}}>
            <p>
                <textarea cols="30" rows="10" className="form-control" onChange={searchChange} ></textarea>
            </p>
            <p className="buttons">
                <button type="button" className="btn btn-primary button1" onClick={addUrl}>Analyze</button>
                {removebtn?<button type="button" className="btn btn-primary button2" onClick={reset}>New Recipe</button>:''}
            </p>
        </div>
    )
}

export default Textbox;