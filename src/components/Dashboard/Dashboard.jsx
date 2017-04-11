import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import chart from '../../data/scatter';
import gauge from '../../charts/guage';
import {muscleDonut, typeDonut, equipmentDonut} from '../../charts/donut';
import { Table, Grid, Image, Button, Message, Menu, Segment } from 'semantic-ui-react'
import combination from '../../charts/combination';
import C3Chart from 'react-c3js';
import Navbar from '../NavBar/NavBar'
import MenuExampleVerticalPointing from '../Menu/Menu';
import MenuExampleSubMenu from '../SubMenu/SubMenu';
import 'c3/c3.css';
import '../../App.css';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
      const data1 = {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ],
        'stroke-width': '5px'
      };

      const data = {
            xs: {
                setosa: 'setosa_x',
                versicolor: 'versicolor_x',
            },
            // iris data from R
            columns: [
                ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ],
            type: 'scatter'
      };
      const axis = {
          x: {
              label: 'Sepal.Width',
              tick: {
                  fit: false
              }
          },
          y: {
              label: 'Petal.Width'
          }
      }
      console.log(muscleDonut.data);
        return (
        <Table celled structured>
          <Table.Body>
            <Table.Row>
              <Table.Cell rowSpan='3'>
                <Segment raised='true' textAlign='center'>
                  <Image src='../../images/profiles/elyse.png' size='small' shape='circular'/>
                  <Message header={'HERE IT IS'} list={['hello', 'goodbye']} />
                </Segment>
                <MenuExampleSubMenu />
                <MenuExampleVerticalPointing />
              </Table.Cell>
              <Grid centered columns={4}>
                <Grid.Row centered columns={2}>
                  <Grid.Column><C3Chart className='chart' data={data} axis={axis} /></Grid.Column>
                  <Grid.Column><C3Chart data={data1} /></Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={3}>
                  <Grid.Column><C3Chart data={muscleDonut.data} /></Grid.Column>
                  {/* <div className="large-4 columns"><C3Chart data={gauge.data} gauge={gauge.gauge} color={gauge.color} size={gauge.size} /></div> */}
                  <Grid.Column><C3Chart data={typeDonut.data} /></Grid.Column>
                  <Grid.Column><C3Chart data={equipmentDonut.data} /></Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={1}>
                  <Grid.Column><C3Chart data={combination.data} /></Grid.Column>
              </Grid.Row>
            </Grid>
            </Table.Row>
          </Table.Body>
        </Table>
        );
    }
}

export default connect()(Dashboard);
