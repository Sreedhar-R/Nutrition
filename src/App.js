import './App.css';
import React from 'react';
import Textbox from './Textbox';
import Table from './Table';


class App extends React.Component {

  stringInput;
  url;

  constructor(){
    super();
    this.state = {
      input:'',
      reset:false,

      calories:'',
      td_Fat:'',
      td_Saturated:'',
      td_Cholestrol:'',
      td_Sodium:'',
      td_CH:'',
      td_fiber:'',
      td_protein:'',
      td_VitaD:'',
      td_Calcium:'',
      td_Iron:'',
      td_Pottasium:'',

      tn_Fat:'',
      tn_Saturated:'',
      tn_transFat:'',
      tn_Cholestrol:'',
      tn_Sodium:'',
      tn_CH:'',
      tn_fiber:'',
      tn_sugars:'',
      tn_protein:'',
      tn_VitaD:'',
      tn_Calcium:'',
      tn_Iron:'',
      tn_Pottasium:''

    }
  }

  onSearchChange = (event) => {
    this.setState({input:event.target.value});
    // console.log(event.target.value);
  }

  addUrl = () => {
      this.setState({reset:true});
      this.stringInput = this.state.input;
      console.log(this.stringInput);
      let string = this.stringInput;
      string = string.replace(/ /g, '%20');
      console.log(string);
      let string1 = "https://api.edamam.com/api/nutrition-data?app_id=94498e85&app_key=da54be459e878c011ee5758bb3ac8f35&ingr=" + string ;
      console.log(string1);
      this.url = string1;
      this.getData();
  }

  onReset = () => {
    this.setState({reset:false});
  }

  getData(){
    console.log("fetching data")
    fetch(this.url)
  .then(resolve =>{
    return resolve.json()
  })
  .then(data2 =>{
    this.setState({calories:data2.totalNutrientsKCal.ENERC_KCAL.quantity});
    this.setState({td_Fat:Math.round(data2.totalDaily.FAT.quantity)});
    this.setState({td_Saturated:Math.round(data2.totalDaily.FASAT.quantity)});
    this.setState({td_Cholestrol:Math.round(data2.totalDaily.CHOLE.quantity)});
    this.setState({td_Sodium:Math.round(data2.totalDaily.NA.quantity)});
    this.setState({td_CH:Math.round(data2.totalDaily.CHOCDF.quantity)});
    this.setState({td_fiber:Math.round(data2.totalDaily.FIBTG.quantity)});
    this.setState({td_protein:Math.round(data2.totalDaily.PROCNT.quantity)});
    this.setState({td_VitaD:Math.round(data2.totalDaily.VITD.quantity)});
    this.setState({td_Calcium:Math.round(data2.totalDaily.CA.quantity)});
    this.setState({td_Iron:Math.round(data2.totalDaily.FE.quantity)});
    this.setState({td_Pottasium:Math.round(data2.totalDaily.K.quantity)});

    this.setState({tn_Fat:Math.round(data2.totalNutrients.FAT.quantity * 10)/10+" "+ data2.totalNutrients.FAT.unit});
    this.setState({tn_Saturated:Math.round(data2.totalNutrients.FASAT.quantity * 10)/10+" "+ data2.totalNutrients.FASAT.unit});
    this.setState({tn_transFat:Math.round(data2.totalNutrients.FATRN.quantity * 10)/10+" "+ data2.totalNutrients.FATRN.unit});
    this.setState({tn_Cholestrol:Math.round(data2.totalNutrients.CHOLE.quantity * 10)/10+" "+ data2.totalNutrients.CHOLE.unit});
    this.setState({tn_Sodium:Math.round(data2.totalNutrients.NA.quantity * 10)/10+" "+ data2.totalNutrients.NA.unit});
    this.setState({tn_CH:Math.round(data2.totalNutrients.CHOCDF.quantity * 10)/10+" "+ data2.totalNutrients.CHOCDF.unit});
    this.setState({tn_fiber:Math.round(data2.totalNutrients.FIBTG.quantity * 10)/10+" "+ data2.totalNutrients.FIBTG.unit});
    this.setState({tn_sugars:Math.round(data2.totalNutrients.SUGAR.quantity * 10)/10+" "+ data2.totalNutrients.SUGAR.unit});
    this.setState({tn_protein:Math.round(data2.totalNutrients.PROCNT.quantity * 10)/10+" "+ data2.totalNutrients.PROCNT.unit});
    this.setState({tn_VitaD:Math.round(data2.totalNutrients.VITD.quantity * 10)/10+" "+ data2.totalNutrients.VITD.unit});
    this.setState({tn_Calcium:Math.round(data2.totalNutrients.CA.quantity * 10)/10+" "+ data2.totalNutrients.CA.unit});
    this.setState({tn_Iron:Math.round(data2.totalNutrients.FE.quantity * 10)/10+" "+ data2.totalNutrients.FE.unit});
    this.setState({tn_Pottasium:Math.round(data2.totalNutrients.K.quantity * 10)/10+" "+ data2.totalNutrients.K.unit});

    console.log(data2);
    console.log(data2.totalNutrientsKCal.ENERC_KCAL.quantity);
    console.log(Math.round(data2.totalNutrients.NA.quantity * 10)/10+" "+ data2.totalNutrients.NA.unit);
    // console.log(data2.weather[0].description);
    // console.log(data2);
    
    })
    
  }


  render(){
    return (
      <div style={{width:'60%',border:'1px solid black',margin:'30px 0 0 60px'}}>
        <div style={{margin:'30px 20px',borderBottom:'3px solid black'}}>
          <h1 style={{textAlign:'center'}}>Nutritional Analysis</h1>
        </div>
        <p style={{textAlign:'center'}}>Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
            Enter each ingredient on a new line.</p>
      <div className="col-md-12">
      <div style={{display:'flex'}}>
          <Textbox searchChange={this.onSearchChange} addUrl={this.addUrl} reset={this.onReset} removebtn={this.state.reset}/>
          {this.state.reset?
          <Table 
          calories={this.state.calories}
          td_Fat={this.state.td_Fat}
          td_Saturated={this.state.td_Saturated}
          td_Cholestrol={this.state.td_Cholestrol}
          td_Sodium={this.state.td_Sodium}
          td_CH={this.state.td_CH}
          td_fiber={this.state.td_fiber}
          td_protein={this.state.td_protein}
          td_VitaD={this.state.td_VitaD}
          td_Calcium={this.state.td_Calcium}
          td_Iron={this.state.td_Iron}
          td_Pottasium={this.state.td_Pottasium}

          tn_Fat={this.state.tn_Fat}
          tn_Saturated={this.state.tn_Saturated}
          tn_transFat={this.state.tn_transFat}
          tn_Cholestrol={this.state.tn_Cholestrol}
          tn_Sodium={this.state.tn_Sodium}
          tn_CH={this.state.tn_CH}
          tn_fiber={this.state.tn_fiber}
          tn_sugars={this.state.tn_sugars}
          tn_protein={this.state.tn_protein}
          tn_VitaD={this.state.tn_VitaD}
          tn_Calcium={this.state.tn_Calcium}
          tn_Iron={this.state.tn_Iron}
          tn_Pottasium={this.state.tn_Pottasium}
          />:''}
      </div>
      </div>
      </div>
      
    )
  }
  
}

export default App;
