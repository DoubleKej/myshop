import React, { Component } from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import axios from 'axios';
import { stringify } from 'querystring';
import {browserHistory} from 'react-router';



class AddCategoryPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      nameValue: '',
      desValue: ''
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDes = this.handleChangeDes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ nameValue: event.target.value });    // this.setState({ desValue: event.target.value });
    
  }
  handleChangeDes(event) {
    this.setState({ desValue: event.target.value });    // this.setState({ desValue: event.target.value });
    
  }
  
  handleSubmit(event) {
    console.log('input1:',this.state.nameValue)
    console.log('input2:',this.state.desValue)
    axios.post('http://localhost:8000/post/categories', stringify({
      categoryName: this.state.nameValue,
      description: this.state.desValue
    })
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    event.preventDefault();
  }
//   handleClick = () => {
//     browserHistory.push('/category');
// };


  render(){
    const styles = {
      toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100
      },
      buttons: {
        marginTop: 30,
        float: 'right'
      },
      saveButton: {
        marginLeft: 5
      }
    };
  
    return (
      <PageBase title="Add Category Page"
                navigation="Add Category Page">
        <form action="/category" onSubmit={this.handleSubmit}>
  
          <TextField
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
            value={this.state.nameValue}
            onChange={ (e) => {this.handleChangeName(e, 'name')}}
          />
          <TextField
            hintText="Description"
            floatingLabelText="Description"
            fullWidth={true}
            value={this.state.desValue}
            onChange = {this.handleChangeDes}
          />
          
          <Divider/>
  
          <div style={styles.buttons}>
            <Link to="/category">
              <RaisedButton label="Cancel"/>
            </Link>
  
            <Link to="/category">
            <RaisedButton 
                          label="Save"
                          type="submit"
                          // onClick={this.handleClick}
                          primary={true}/>
                          
            </Link>
          </div>
        </form>
      </PageBase>
    );
  }
  
  
};

export default AddCategoryPage;
