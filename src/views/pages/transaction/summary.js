import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChartGraph from '../../components/transaction/BarChartGraph';
import LineChartGraph from '../../components/transaction/LineChartGraph';
import Checkbox from 'rc-checkbox';

const dataInfo1 = {
  name: 'Incomes',
  color: '#0000FF'
};
const dataInfo2 = {
  name: 'Expenses',
  color: '#FF0000'
};
const incomeExpenseData = [
  {month: 'Jan', Incomes: 4000, Expenses: 2400},
  {month: 'Feb', Incomes: 0, Expenses: 0},
  {month: 'Mar', Incomes: 0, Expenses: 0},
  {month: 'Apr', Incomes: 0, Expenses: 0},
  {month: 'May', Incomes: 0, Expenses: 0},
  {month: 'Jun', Incomes: 0, Expenses: 0},
  {month: 'Jul', Incomes: 0, Expenses: 0},
  {month: 'Aug', Incomes: 0, Expenses: 0},
  {month: 'Sep', Incomes: 0, Expenses: 0},
  {month: 'Oct', Incomes: 0, Expenses: 0},
  {month: 'Nov', Incomes: 0, Expenses: 0},
  {month: 'Dec', Incomes: 0, Expenses: 0}
];

const netUsageData = [
  {month: 'Jan', net: 1000},
  {month: 'Feb', net: -3000 },
  {month: 'Mar', net: 8000},
  {month: 'Apr', net: -4000 },
  {month: 'May', net: 1000 },
  {month: 'Jun', net: -1000},
  {month: 'Jul', net: 1000},
  {month: 'Aug', net: 1000},
  {month: 'Sep', net: 1000},
  {month: 'Oct', net: 1000},
  {month: 'Nov', net: 1000},
  {month: 'Dec', net: 1000}
];

const netUsageInfo = [
  {name: 'net', key: 'net', color: '#0000FF'}
];
let allCreditCardInfo = [];

export class Summary extends Component {
  static propTypes = {

  };
  constructor() {
    super();
    this.state = {
      isLoading: true,
      status: true,
      creditCardData: [
        {month: 'Jan', KBank1: 4000, Scb: 2400, Citi: 1000 },
        {month: 'Feb', KBank1: 3000, Scb: 1398, Citi: 1220 },
        {month: 'Mar', KBank1: 2000, Scb: 9800, Citi: 0 },
        {month: 'Apr', KBank1: 2780, Scb: 3908, Citi: 0 },
        {month: 'May', KBank1: 1890, Scb: 4800, Citi: 0 },
        {month: 'Jun', KBank1: 2390, Scb: 3800, Citi: 0},
        {month: 'Jul', KBank1: 3490, Scb: 4300, Citi: 0},
        {month: 'Aug', KBank1: 3490, Scb: 4300, Citi: 0},
        {month: 'Sep', KBank1: 3490, Scb: 4300, Citi: 0},
        {month: 'Oct', KBank1: 3490, Scb: 4300, Citi: 0},
        {month: 'Nov', KBank1: 3490, Scb: 4300, Citi: 0},
        {month: 'Dec', KBank1: 3490, Scb: 4300, Citi: 0}
      ],
      creditCardInfo: [
          {name: 'KBank', key: 'KBank1', color: '#0000FF'},
          {name: 'SCB', key: 'Scb', color: '#00FF00'},
          {name: 'CITI', key: 'Citi', color: '#FF0000'}
      ]
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    allCreditCardInfo = Array.from(this.state.creditCardInfo);
  }
  componentWillReceiveProps() {

  }
  onChange(e) {

    let tempCreditCardInfo = Array.from(this.state.creditCardInfo);
    if (e.target.checked) {
      for (var i in allCreditCardInfo) {
        if (e.target.name === allCreditCardInfo[i].name) {
          break;
        }
      }
      let info = allCreditCardInfo[i];
      tempCreditCardInfo.push(info);
    }
    else {
      for (i in tempCreditCardInfo) {
        if (e.target.name === tempCreditCardInfo[i].name) {
          break;
        }
      }
      tempCreditCardInfo.splice(i, 1);
    }
    this.setState({
      creditCardInfo: tempCreditCardInfo
    });

  }

  render() {
    return (
      <div className="g-row">
        <div className="col-md-6">
          <h2>Income - Expense</h2>
          <BarChartGraph
            dataKey1={dataInfo1}
            dataKey2={dataInfo2}
            data={incomeExpenseData}
          />
          <h2>Net usage</h2>
          <LineChartGraph
            data={netUsageData}
            inputs={netUsageInfo}
          />
          <h2>Credit Card Usage</h2>
          <LineChartGraph
            data={this.state.creditCardData}
            inputs={this.state.creditCardInfo}
          />
          {allCreditCardInfo.map(info =>
            <label key={info.name}>
              <Checkbox
                defaultChecked
                onChange={this.onChange}
                name={info.name}
              /> {info.name}</label>)
          }
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = Object.assign(
  {},
);

export default connect(
  null,
  mapDispatchToProps
)(Summary);
