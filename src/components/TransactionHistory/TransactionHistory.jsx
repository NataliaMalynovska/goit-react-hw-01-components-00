import PropTypes from 'prop-types';
import {Container, 
  Table, 
  TableHead, 
  TableBody, 
  Row, 
  Cell 
 } from './TransactionHistory.styled'

export const TransactionHistory=({transactions})=> {
    return (
 <Container>     
<Table>
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>
  <TableBody>  
     {transactions.map(transaction => (
    <Row key={transaction.id}>
      <Cell>{transaction.type}</Cell>
      <Cell>{transaction.amount}</Cell>
      <Cell>{transaction.currency}</Cell>
    </Row>     
))} 
  </TableBody>
</Table>
</Container>
    )
}

TransactionHistory.propTypes= {
    transactions:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
    })
    )
}