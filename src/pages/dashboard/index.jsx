import React from 'react';
import { Box } from "@mui/material"

import NavMenu from '../../components/layouts/nav_bar/NavMenu'
import Header from '../../components/layouts/header/index'
import InfoForm from './InfoForm';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import VerticalBarChart from './VerticalBarChart';
import UpdateBoard from './UpdateBoard';
import ProjectTimeline from './ProjectTimeline';


const Dashboard = () => {

    const cards = [{
        title: "Total Users",
        isIncrease: true,
        percent: '2%' ,
        total: 18765
    }, 
    {
        title: "New Users",
        isIncrease: false,
        percent: '3%' ,
        total: 1100
    },
    {
        title: "Active Users",
        isIncrease: true,
        percent: '15%' ,
        total: 2000
    },
]

const usersByRegion= {
    labels: ['Hanoi', 'HCM.City', 'Da Nang', 'Hue', 'Can Tho', 'Others'],
    datasets: [
      {
        label: '# of Votes',
        data: [1200, 1300, 1000, 600, 200, 300],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const userByTimeActive= {
        labels: ['0.00', '3.00', '6.00', '9.00', '12.00', '15.00', '18.00', '21.00'],
        datasets: [
          {
            label: 'User active',
            data: [1000,50,2000,10000,15000,6000,1000, 500],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
      ]
  }

  const userByAge= {
    labels: ['15', '20', '25', '30', '35', '40', '45', '50'],
    datasets: [
      {
        label: 'User active',
        data: [15,5000,2000,600,300,200,100, 500],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
  ]
}

const categoryByTime = {
    labels:['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'],
    datasets: [
      {
        label: 'Hours',
        data: [60000,75000,2000,70000,1000,3000,10000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
}

const categoryByPlayer = {
  labels:['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'],
  datasets: [
    {
      label: 'Players',
      data: [1000,5000,2345,7123,1000,3000,10000],
      backgroundColor: 'blue',
    }
  ],
}

const timeline = {
  name: "Project UI",
  value: [{index: 1, item: 'Create UI'}, {index: 2, item: 'Load data'}, {index: 3, item:'Test API'}, {index: 4, item:'Optimize'}, {index: 5, item: 'Release'}],
  current: 4
}
    return (
        <>
        <Box sx={{display: 'flex'}}>
            <Box flex={1}>
                <NavMenu/>
            </Box>
            <Box flex = {4}>
                <Box sx={{display: 'block'}}>
                    <Header/>
                    <Box sx={{ paddingBottom: 5, maxWidth: '100%', paddingTop: 10}} >
                        <Box sx={{marginLeft: 5}}>
                            <div style={{display: 'flex'}}>
                                {cards.map((card) => {
                                    
                                    return <InfoForm cardInfo = {card} />;
                                })}                
                            </div>
                            <div style={{display:'flex'}}>
                              <div style={{width: 400, backgroundColor: 'rgba(245, 125, 145, 0.19)', marginRight: 25, marginLeft: 25}}>
                                  <DoughnutChart name = "Users by region" data = {usersByRegion} />
                              </div>
                              <div style={{width: 320, backgroundColor: 'rgba(245, 125, 145, 0.19)', marginRight: 25}}>
                                  <LineChart data={userByTimeActive} name="Users by time active"/>
                              </div>
                              <div style={{width: 320, backgroundColor: 'rgba(245, 125, 145, 0.19)'}}>
                                  <LineChart data={userByAge} name = "Users by age"/>
                              </div>
                            </div>
                            <div style={{display: 'flex'}}>
                              <div style={{width: 500, marginRight: 50}}>
                                  <VerticalBarChart name="Category by time played( Hours)" data={categoryByTime}/>
                              </div>
                              <div style={{width: 500}}>
                                  <VerticalBarChart name="Category by players" data={categoryByPlayer}/>
                              </div>
                            </div>
                            <div style={{display:'flex'}}>
                              <UpdateBoard />
                              <ProjectTimeline data={timeline}/>
                            </div>
                        </Box>
                    </Box>     
                </Box>
            </Box>
        </Box>
        
        </>
    )
}



export default Dashboard;