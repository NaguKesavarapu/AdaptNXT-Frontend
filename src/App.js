import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Box,
  Grid,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  CssBaseline,
} from '@mui/material';

// Registering chart components with Chart.js
Chart.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

// Sidebar items
const sidebarItems = [
  'Dashboard',
  'Inventory',
  'Order',
  'Returns',
  'Customers',
  'Shipping',
  'Channel',
  'Integrations',
  'Calculators',
  'Reports',
  'Account',
];

const drawerWidth = 240;

const Dashboard = () => {
  // Line Chart Data (Sales vs Orders)
  const lineData = {
    labels: ['6/30/2024', '7/7/2024', '7/14/2024', '7/21/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4, 3, 2, 1],
        fill: false,
        borderColor: '#FFA726',
        tension: 0.4, // Smooth curve
        pointBackgroundColor: '#FFA726',
        pointRadius: 5,
        yAxisID: 'y1',
      },
      {
        label: 'Sales',
        data: [1404, 1200, 800, 500],
        fill: false,
        borderColor: '#26C6DA',
        tension: 0.4, // Smooth curve
        pointBackgroundColor: '#26C6DA',
        pointRadius: 5,
        yAxisID: 'y2',
      },
    ],
  };

  const lineOptions = {
    scales: {
      y1: {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Orders',
        },
      },
      y2: {
        type: 'linear',
        position: 'right',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  // Pie Chart Data (Portion of Sales)
  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f4f4f4',
            borderRight: '1px solid #ddd',
          },
        }}
      >
        <List>
          {sidebarItems.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItem button>
                <ListItemText primary={text} />
              </ListItem>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f9f9f9', p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Line Chart */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: 3,
                height: '100%',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Sales vs Orders
              </Typography>
              <Line data={lineData} options={lineOptions} />
            </Box>
          </Grid>

          {/* Pie Chart */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Portion of Sales
              </Typography>
              <Pie data={pieData} options={pieOptions} />
              <Typography variant="h6" align="center" sx={{ marginTop: '20px' }}>
                Total: 2659
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
