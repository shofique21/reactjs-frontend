import React, {Component} from 'react';

import axios from 'axios';

import { Link } from 'react-router';

import MyGlobleSetting from './MyGlobleSetting';


class UpdateProduct extends Component {

  constructor(props) {

      super(props);

      this.state = {title: '', description: '', price: ''};

      this.handleChange1 = this.handleChange1.bind(this);

      this.handleChange2 = this.handleChange2.bind(this);

      this.handleChange3 = this.handleChange3.bind(this);


      this.handleSubmit = this.handleSubmit.bind(this);

  }


  componentDidMount(){

    axios.get(MyGlobleSetting.url + `/api/products/${this.props.params.id}/edit`)

    .then(response => {

      this.setState({ title: response.data.title, description: response.data.description, price: response.data.price  });

    })

    .catch(function (error) {

      console.log(error);

    })

  }

  handleChange1(e){

    this.setState({

      title: e.target.value

    })

  }

  handleChange2(e){

    this.setState({

      description: e.target.value

    })

  }
handleChange3(e){

    this.setState({

      price: e.target.value

    })

  }

  handleSubmit(event) {

    event.preventDefault();

    const products = {

      title: this.state.title,

      description: this.state.description,

      price: this.state.price,

    }

    let uri = MyGlobleSetting.url + '/api/products/'+this.props.params.id;

    axios.patch(uri, products).then((response) => {

          this.props.history.push('/display-item');

    });

  }

  render(){

    return (

      <div>

        <h1>Update Product</h1>

        <div className="row">

          <div className="col-md-10"></div>

          <div className="col-md-2">

            <Link to="/display-item" className="btn btn-success">Return to Product</Link>

          </div>

        </div>

        <form onSubmit={this.handleSubmit}>

            <div className="form-group">

                <label>Product Title</label>

                <input type="text" className="form-control" value={this.state.title} onChange={this.handleChange1} />

            </div>


            <div className="form-group">

                <label name="product_description">Product Description</label>

                <textarea className="form-control" onChange={this.handleChange2} value={this.state.description}></textarea>  

            </div>
			<div className="form-group">

                <label>Product Price</label>

                <input type="text" className="form-control" value={this.state.price} onChange={this.handleChange3} />

            </div>

            <div className="form-group">

                <button className="btn btn-primary">Update</button>

            </div>
             


        </form>

    </div>

    )

  }

}

export default UpdateProduct;