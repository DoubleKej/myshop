import React, { Component } from 'react';

import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import axios from 'axios';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCategory: []
    }
  }
  getCategory() {
    axios.get('http://localhost:8000/get/products', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then((response) => {
        console.log('response:', response);
        this.setState({
          listCategory: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    console.log("function had been run!")
    this.getCategory();
  }

  render() {
    const { classes } = this.props;
    const styles = {
      floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
      },
      editButton: {
        fill: grey500
      },
      columns: {
        id: {
          width: '10%'
        },
        category: {
          width: '50%'
        },
        description: {
          width: '40%'
        },

        edit: {
          width: '10%'
        }
      }
    };
    return (
      <div>
        <PageBase title="Category Page"
          navigation="Application / Category Page">

          <div>
            <Link to="/form" >
              <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
                <ContentAdd />
              </FloatingActionButton>
            </Link>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.category}>Cate gory</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.description}>Description</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listCategory.map(item =>
                  <TableRow key={item.id}>
                    <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                    <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>
                    <TableRowColumn style={styles.columns.description}>{item.description}</TableRowColumn>
                    <TableRowColumn style={styles.columns.edit}>
                      <Link className="button" to="/form">
                        <FloatingActionButton zDepth={0}
                          mini={true}
                          backgroundColor={grey200}
                          iconStyle={styles.editButton}>
                          <ContentCreate />
                        </FloatingActionButton>
                      </Link>
                    </TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </PageBase>

      </div>
    )
  }
}

export default Category;
