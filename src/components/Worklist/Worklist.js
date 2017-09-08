import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './worklist.scss';
import { Link } from 'react-router';
import { filterWorklistDataSupplier, filterWorklistDatasSDType, searchWorklistDataOffline, searchWorklistDataOnline, resetWorlist } from '../../actions/worklistActions';
import { connect } from 'react-redux';


@cssModules(styles)
class Worklist extends Component {
  constructor() {
    super();
    this.state = {
	  currentList: '',
	  listItems: '',
	  flag: false
    };
  }

  componentDidUpdate() {
   // this.changeResetSearchState();
  }

  mouseovermethod(d) {
	  this.setState({flag: true})
	  this.setState({ currentList: d});
	  this.setState({ listItems : [d.marketingBullets[0], d.marketingBullets[1], d.marketingBullets[3]]});
  }

  render() {
    const obj = this.props.worklist;
    const isEmpty = (obj.length !== 0) ? obj.productList.length : [];
    const Empty = (isEmpty === undefined || isEmpty === 0) ? false : true;
	
	const listItems = (obj.length !== 0) ? [obj.productList[0].marketingBullets[0], obj.productList[0].marketingBullets[1], obj.productList[0].marketingBullets[3]] : '';
	const contcurrentList = (obj.length !== 0) ? obj.productList[0] : '';
    return (
      <div className="worklist-container">
        {
          (Empty && obj.productList) ?
          <div className="container worklist-content">
            <div className="mainContainer">
              <div className="leftC">
				<div className="imgC">
				  {this.state.flag ? <img src={this.state.currentList.imageUrls.md }/> : <img src={obj.productList[0].imageUrls.md} /> }
				</div>
			  </div>	
              <div className="middle">
			  {this.state.flag ?  
				<div>
				  <h6>{this.state.currentList.brand} {this.state.currentList.description}</h6>
				  <ul>
					{
					  this.state.listItems.map(function showList(a, key) {
					    return (
						  <li>{a}</li>
					    )
					  })
					}
				  </ul>
				</div> : 
				<div>
				  <h6>{obj.productList[0].brand} {obj.productList[0].description}</h6>
				  <ul>
					{
					  listItems && listItems.map(function showList(a, key) {
					    return (
						  <li>{a}</li>
					    )
					  })
					}
				  </ul>
				</div>
			  }
			  </div>
              <div className="rightC">
			  {this.state.flag ? 
				<div className="">
					<h2>${this.state.currentList.pricing.price.selling}</h2>
					<button className="btnAdd">ADD TO CART</button>
				</div>
				: 
				<div className="">
					<h2>${obj.productList[0].pricing.price.selling}</h2>
					<button className="btnAdd">ADD TO CART</button>
				</div>
			  }
              </div>
              <div className="clearbot"></div>
            </div>

            {
              obj.productList.map(function showList(item, key) {
                return (
                  <div className="containers" key={ key } >
                    <div  onMouseEnter={ this.mouseovermethod.bind(this, item) }>
					  <div className="imgC">
						<img src={item.imageUrls.sm}/>
					  </div>
					  
					  <div className="description">
						<p><span>{item.brand}</span> <span>{item.description}</span></p>
					  </div>
					  
					  <div className="description">
						<h6> ${item.pricing.price.selling}</h6>
					  </div>
					  <div className="viewC">
						<button className="viewMore">VIEW MORE</button>
					  </div>
					</div>
                  </div>
                );
              }, this)
            }
          </div>
         : ''
        }
      </div>
    );
  }
}

Worklist.propTypes = {
  dispatch: PropTypes.func.isRequired,
  worklist: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Worklist);
