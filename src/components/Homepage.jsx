import React from 'react'
import millify from 'millify';
import { Typography, Row,  Col, Statistic } from 'antd';
import {Link} from 'react-router-dom'
 import { useGetCryptosQuery } from '../services/cryptoApi';

import {Cryptocurrencies, News} from "../components"
const {Title} = Typography;
const Homepage = () => {
  const {data,isFetching} = useGetCryptosQuery(5);
  const globalStats = data?.data?.stats;
  if(isFetching) return 'Loading...'
  return (
    <div className='test'>
    <Title level={2} className= 'heading'> The current cryptocurrencies Stats</Title>
    <Row>
        <Col span={12}><Statistic title='Total Crytocurrencies' value={globalStats.total}/> </Col>
        <Col span={12}><Statistic title='Total Exchange' value={millify(globalStats.totalExchanges)}/> </Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/> </Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/> </Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/> </Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">The current news on cryptocurrencies</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
    <News simplified/>


    </div>
  )
}

export default Homepage