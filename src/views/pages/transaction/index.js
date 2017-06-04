import React, { Component } from 'react';
import { connect } from 'react-redux';
import { transActions } from 'src/core/transaction';
import TransactionTable from '../../components/transaction/TransactionTable';
import LargeButton from '../../components/transaction/LargeButton';
import SummaryTable from '../../components/transaction/SummaryTable';
import BarChartGraph from '../../components/transaction/BarChartGraph';

const expenseLabel = 'Add Expense';
const incomeLabel = 'Add Income';

const defaultTableData = [
    { 'Catagories': 'Food', 'Price': '100'},
    { 'Catagories': 'Traffic', 'Price': '33'},
    { 'Catagories': 'Salary', 'Price': '-330000'}
];
const defaultSummaryData = {
  expense: '133',
  cash: '100',
  creditCard: ''
};
const dataKey1 = {
  name: 'target',
  color: '#8884d8'
};
const dataKey2 = {
  name: 'actual',
  color: '#82ca9d'
};

export class Transaction extends Component {
  static propTypes = {

  };

  componentWillMount() {

  }

  componentWillReceiveProps() {

  }

  componentWillUnmount() {

  }

  renderNotification() {

  }
  handleAddExpense() {

  }
  handleAddIncome() {

  }
  render() {
    return (
      <div className="g-row">
        <div className="col-md-6">
          <LargeButton
            onSubmit={event => this.handleAddExpense(event)}
            label={expenseLabel}
          />
        </div>
        <div className="col-md-6">
          <LargeButton
            onSubmit={event => this.handleAddIncome(event)}
            label={incomeLabel}
          />
        </div>
        <div className="g-col">
          <TransactionTable rowData={defaultTableData} />
        </div>

        <div className="g-col">
          <SummaryTable
            expense={defaultSummaryData.expense}
            cash={defaultSummaryData.cash}
            creditCard={defaultSummaryData.creditCard}
          />
          <BarChartGraph
            dataKey1={dataKey1}
            dataKey2={dataKey2}
          />
        </div>

      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

// const mapStateToProps = createSelector(
//   getNotification,
//   getTaskFilter,
//   getVisibleTasks,
//   (notification, filterType, tasks) => ({
//     notification,
//     filterType,
//     tasks
//   })
// );
//
const mapDispatchToProps = Object.assign(
  {},
  transActions
);

export default connect(
  null,
  mapDispatchToProps
)(Transaction);
