import React,{Component} from 'react'
import {Card} from 'antd'
const {Meta} = Card;
export default class CardItem extends Component {
  constructor(props,context) {
    super(props)
    this.state = {
      input:''
    }
  }
  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <Card hoverable="true"
          style={{ width: 240 }}
          cover={<img alt="example" src={this.props.mainImage} />}
        >
          <Meta title={this.props.name} description={this.props.saleQuantity}></Meta>
        </Card>
        {/* <input value={this.state.input} onChange={this.handleChange}></input>
        {
          this.state.input
        } */}
      </div>

    )
  }
}