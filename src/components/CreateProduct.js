import React, {Component} from 'react';

import {browserHistory} from 'react-router';

import MyGlobleSetting from './MyGlobleSetting';


class CreateProduct extends Component {

  constructor(props){

    super(props);

    this.state = {productTitle: '', productDescription: '', productPrice};


    this.handleChange1 = this.handleChange1.bind(this);

    this.handleChange2 = this.handleChange2.bind(this);

    this.handleChange3 = this.handleChange3.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange1(e){

    this.setState({

      productTitle: e.target.value

    })

  }

  handleChange2(e){

    this.setState({

      productDescription: e.target.value

    })

  }
  handleChange3(e){

    this.setState({

      productPrice: e.target.value

    })

  }

  handleSubmit(e){

    e.preventDefault();

    const products = {

      title: this.state.productTitle,

      description: this.state.productDescription,

      price: this.state.productPrice

    }

    let uri = MyGlobleSetting.url + '/api/products';

    axios.post(uri, products).then((response) => {

      browserHistory.push('/display-item');

    });

  }


    render() {

      return (

      <div>

        <h1>Create Product</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="row">

            <div className="col-md-6">

              <div className="form-group">

                <label>Product Title:</label>

                <input type="text" className="form-control" onChange={this.handleChange1} />

              </div>

            </div>

            </div>

            <div className="row">

              <div className="col-md-6">

                <div className="form-group">

                  <label>Product Description:</label>

                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>

                </div>

              </div>

            </div><br />

             <div className="row">

              <div className="col-md-6">

                <div className="form-group">

                  <label>Product Price:</label>

                  <input type="text" className="form-control" onChange={this.handleChange3} />

                </div>

              </div>

            </div><br />

            <div className="form-group">

              <button className="btn btn-primary">Add Product</button>

            </div>

        </form>

  </div>

      )

    }

}

export default CreateProduct;