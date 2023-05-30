
import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { CardContainer, ColumnContainer, LeftColumn, RightColumn } from '../../assets/css/componets.styled'
import { CardDefault } from '../../components/CardDefault'
import dashboardData  from '../../data/Dashboad.json'
import { TableContent } from '../../components/TableContent'


export const Dashboard = () => {
  const { cards, mostCustomers,mostDishes } = dashboardData

  
  return (
    <>
      <PageTitle title="Dashboard" />
      <CardContainer>
        {cards.map((card, index) => (
          <CardDefault key={index} title={card.title} subtitle={card.subtitle} icon={card.icon} />
        ))}
      </CardContainer>
      
      <ColumnContainer>
          <LeftColumn>
            <TableContent {...mostCustomers} />
          </LeftColumn>
          <RightColumn>
            <TableContent {...mostDishes} />
          </RightColumn>
      </ColumnContainer>
    </>
  )
}