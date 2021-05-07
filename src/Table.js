import './Table.css';

const Table = ({calories,td_Fat,td_Saturated,td_Cholestrol,td_Sodium,td_CH,td_fiber,td_protein,td_VitaD,td_Calcium,td_Iron,td_Pottasium,
    tn_Fat,tn_Saturated,tn_transFat,tn_Cholestrol,tn_Sodium,tn_CH,tn_fiber,tn_sugars,tn_protein,tn_VitaD,tn_Calcium,tn_Iron,tn_Pottasium}) => {
    return(
        <div className="col-sm-5">
            <section className="box"> 
                <div style={{display:"-webkit-inline-flex"}}>
                    <h1 style={{borderBottom:"5px solid black"}}>Nutrition Facts</h1>
                </div>
                <table style={{marginBottom:"20px"}}>
                    <thead>
                        <tr >
                            <th>Amount per serving</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <th colSpan="2" id="size" >
                                <b>Calories</b>
                            </th>
                            <td>{calories}</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black",textAlign:'end'}}>
                            <td>% Daily Value*</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">
                                <b>Total Fat</b> {tn_Fat}
                            </td>
                            <td>{td_Fat} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Staurated Fat {tn_Saturated}</td>
                            <td>{td_Saturated} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Trans Fat {tn_transFat}</td>
                                <td></td>
                            </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">
                                <b>Cholestrol</b> {tn_Cholestrol}
                            </td>
                            <td>{td_Cholestrol} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">
                                    <b>Sodium</b> {tn_Sodium}
                                </td>
                                <td>{td_Sodium} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                                <td colSpan="2">
                                    <b>Total Carbohydrate</b> {tn_CH}
                                </td>
                                <td>{td_CH} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Dietary Fiber {tn_fiber}</td>
                            <td>{td_fiber} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Total Sugars {tn_sugars}</td>
                            <td></td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Includes - Added Sugars</td>
                            <td></td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                                <td colSpan="2">
                                    <b>Protein</b> {tn_protein}
                                </td>
                                <td>{td_protein} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">Vitamin D {tn_VitaD}</td>
                            <td>{td_VitaD} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">Calcium {tn_Calcium}</td>
                            <td>{td_Calcium} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">Iron {tn_Iron}</td>
                            <td>{td_Iron} %</td>
                        </tr>
                        <tr >
                            <td colSpan="2">Potassium {tn_Pottasium}</td>
                            <td>{td_Pottasium} %</td>
                        </tr>

                    </tbody>
                </table>
                <div>*Percent Daily Values are based on a 2000 calorie diet</div>
            </section>
        </div>
    )
}

export default Table;