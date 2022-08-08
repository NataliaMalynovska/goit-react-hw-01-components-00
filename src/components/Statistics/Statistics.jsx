import PropTypes from 'prop-types';
import {Container, 
  SectionStatistics,
  Title, 
  StatsList, 
  StatsItem, 
  Label, 
  Percentage } from './Statistics.styled'

export const Statistics=({title, stats})=> {
    return (
      <Container>
  <SectionStatistics>
  {title && <Title>{title}</Title>}
  <StatsList>
  {stats.map(stat => (
  <StatsItem key={stat.id}>
    <Label>{stat.label}</Label>
    <Percentage>{stat.percentage}</Percentage>
  </StatsItem>
))} 
  </StatsList>
</SectionStatistics>
</Container>
    )
}  
 
Statistics.propTypes= {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
    )
}