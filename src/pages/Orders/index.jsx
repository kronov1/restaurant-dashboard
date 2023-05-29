import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { CardContainer } from '../../assets/css/componets.styled'
import { CardDefault } from '../../components/CardDefault'
import { DynamicTable } from '../../components/DynamicTable'
import  ordersData from '../../data/Orders.json'
export const Orders = () => {
  const { ordersCards, ordersHistory } = ordersData

  return (
    <>
    <PageTitle title="Pedidos" />
    <CardContainer>
      {ordersCards.map((card, index) => (
        <CardDefault key={index} title={card.title} subtitle={card.subtitle} icon={card.icon} />
      ))}
    </CardContainer>
    <DynamicTable {...ordersHistory}/>
    </>
    
  
    
  )
}
