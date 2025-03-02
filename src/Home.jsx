import React from 'react'
import Carousel from "./Carousel"
import ServiceHeader from './ServiceHeader';
import ServiceBenefits from './ServiceBenefits';
import MultiActionAreaCard from './MultiActionAreaCard'
import CardContainer from './CardContainer';
import Page from './Page'

export default function Home() {
  return (
    <>
        <Carousel/>
        <ServiceHeader/>
        <CardContainer/>
        <ServiceBenefits/>

    </>
  )
}
