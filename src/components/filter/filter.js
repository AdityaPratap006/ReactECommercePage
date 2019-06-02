import React from 'react';
import { ListGroup, ListGroupItem, Collapse, CardBody, Card 
, Form, FormGroup,CustomInput } from 'reactstrap';

import './filter.css';

 
export default class Filter extends React.Component {

   constructor(props) {
    super(props);
    this.state = { 
      collapse1: false,
      collapse2: false,
      collapse3: false,
      collapse4: false
     
    };
  }

  toggle1=()=> {
    this.setState(state => ({ collapse1: !state.collapse1,
      collapse2: false,
      collapse3: false,
      collapse4: false
     }));
  }

  toggle4=()=> {
    this.setState(state => ({ collapse4: !state.collapse4,
      collapse2: false,
      collapse3: false,
      collapse1: false
     }));
  }

  toggle2=()=> {
    this.setState(state => ({ collapse2: !state.collapse2,
      collapse1: false,
      collapse3: false,
      collapse4: false
     }));
  }

  toggle3=()=> {
    this.setState(state => ({ collapse3: !state.collapse3,
      collapse2: false,
      collapse1: false,
      collapse4: false,
      
     }));
  }

  

  

  render() {
    
    
    return (
      <div className="filter-cont">
        
        <h3>Filters </h3>
        <ListGroup>
          <ListGroupItem    tag="button" action>
            <div>
              <h5 onClick={this.toggle1}>Brand</h5>
              <Collapse isOpen={this.state.collapse1}>
                <Card>
                  <CardBody>
                    <Form>
                      <FormGroup>
                         
                        <div className="checkbox-list">
                          <CustomInput type="switch" id="BrandCheckbox" label="Bose" value="bose" onChange= {this.props.onBrandChange}/>
                          <CustomInput type="switch" id="BrandCheckbox2" label="Sennheiser" value="sennheiser" onChange= {this.props.onBrandChange} />
                          <CustomInput type="switch" id="BrandCheckbox3" label="JBL"  value="jbl" onChange= {this.props.onBrandChange} />
                          <CustomInput type="switch" id="BrandCheckbox4" label="Sony"  value="sony" onChange= { this.props.onBrandChange}/>
                        </div>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </ListGroupItem>
          <ListGroupItem  tag="button" action>
            <div>
              <h5 onClick={this.toggle2} >Headphone Type</h5>
              <Collapse isOpen={this.state.collapse2}>
                <Card>
                  <CardBody>
                  <Form>
                      <FormGroup>
                         
                        <div className="checkbox-list">
                          <CustomInput type="switch" id="TypeCheckbox" label="In the Ear" value="In the Ear" onChange={this.props.onTypeChange}/>
                          <CustomInput type="switch" id="TypeCheckbox2" label="On the Ear" value="On the Ear" onChange={this.props.onTypeChange}/>
                          <CustomInput type="switch" id="TypeCheckbox3" label="Over the Ear" value="Over the Ear" onChange={this.props.onTypeChange}/>
                          
                        </div>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </ListGroupItem>
          <ListGroupItem  tag="button" action>
            <div>
              <h5 onClick={this.toggle3} >Connectivity</h5>
              <Collapse isOpen={this.state.collapse3}>
                <Card>
                  <CardBody>
                  <Form>
                      <FormGroup>
                         
                        <div className="checkbox-list">
                          <CustomInput type="switch" id="ConnectivityCheckbox" label="Bluetooth" value="bluetooth" onChange={this.props.onConnecChange} />
                          <CustomInput type="switch" id="ConnectivityCheckbox2" label="Wired"  value="wired" onChange={this.props.onConnecChange} />
                          
                        </div>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </ListGroupItem>
          <ListGroupItem  tag="button" action>
            <div>
              <h5 onClick={this.toggle4} >Microphone Present</h5>
              <Collapse isOpen={this.state.collapse4}>
                <Card>
                  <CardBody>
                 <Form>
                      <FormGroup>
                         
                        <div className="checkbox-list">
                          <CustomInput type="switch" id="MicrophoneCheckbox" label="Yes" value="Yes" onChange={this.props.onMicChange} />
                          <CustomInput type="switch" id="MicrophoneCheckbox2" label="No" value="No" onChange={this.props.onMicChange}/>
                          
                        </div>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </ListGroupItem>
      
        </ListGroup>
      </div>
    );
  }
}


