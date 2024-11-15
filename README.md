**ICD Disease Surveillance Dashboard**
The ICD Disease Surveillance Dashboard is a web application that provides a comprehensive visualization of disease data. This project was developed as a demonstration of data visualization and web development skills to simulate Communicable Diseases (CD) monitoring and analysis of the spread of various diseases, including COVID-19, tuberculosis, HIV, and more.

**Features**

-**Disease Selection:** Users can select the disease they want to analyze from a dropdown menu. -**Province Selection:** Users can choose to view data for a specific province or for all provinces. -**Time Range Selection:** Users can select the time range (last 3, 6, or 12 months) they want to analyze. -**Interactive Heatmap and Line Charts:** The dashboard displays two main visualizations:

-A color-coded heatmap showing disease cases by province and month
-A line chart displaying the trend of total cases, active cases, recoveries, and recovery rate over time

-**Key Metrics:** The dashboard presents the following key metrics:

-Total Cases
-Active Cases
-Recovery Rate
-Month-over-month changes for the above metrics

**Technologies Used**

-**React.js:** The application is built using the React JavaScript library, which allows for the creation of reusable, component-based user interfaces. -**Recharts:** The data visualizations, including the heatmap and line charts, are implemented using the Recharts library, a React-based charting library. -**Tailwind CSS:** The application's user interface is styled using the Tailwind CSS utility-first CSS framework.

**Getting Started**
To run the Disease Surveillance Dashboard locally, follow these steps:

**Clone the repository:**
git clone https://github.com/your-username/disease-surveillance-dashboard.git

**Install dependencies:**
cd disease-surveillance-dashboard
npm install

**Start the development server:**
npm run dev
This will start the development server and open the application in your default web browser.

**Project Structure**
The project's main files and directories are structured as follows:

src/
├── components/
│ ├── Charts/
│ │ ├── BarChartComponent.jsx
│ │ ├── index.jsx
│ │ ├── LineChartComponent.jsx
│ ├── Dashboard/
│ │ ├── InteractiveFeatures.jsx
│ ├── Filters/
│ │ ├── DiseaseSelect.jsx
│ │ └── index.jsx
│ ├── Stats/
│ │ ├── index.jsx
│ │ └── StatCard.jsx
│ └── ui/
│ └── alert.jsx
| ├── card.jsx
| ├── loading-states.jsx
| └── select.jsx
├── hooks/
│ └── useDiseaseDashboard.js
├── pages/
│ └── Dashboard.jsx
├── services/
│ └── diseaseDataService.js
├── utils/
│ └── mockData.jsx
└── App.jsx

-_src/components:_ Contains all the React components used in the application, organized into subfolders based on their functionality. -_src/hooks:_ Includes custom React hooks used throughout the application. -_src/pages:_ Holds the main page components, such as the Dashboard page. -_src/services:_ Provides the logic for fetching and processing the disease data. -_src/utils:_ Contains utility functions and mock data.

**Configuration and Customization**
The project can be further customized by modifying the following files:

-_tailwind.config.js:_ This file allows you to customize the Tailwind CSS styles used in the application. -_vite.config.js:_ The Vite configuration file, where you can adjust the development server settings, build options, and more.

Additionally, you can customize the data fetching and processing logic in the _src/services/diseaseDataService.js_ file to integrate with your own data sources or modify the data transformation.

**Deployment**
To deploy the Disease Surveillance Dashboard, you can use various hosting platforms, such as Vercel, Netlify, or Amazon Web Services (AWS). The application is a static site and can be easily deployed to these platforms.

**Contributing**
If you would like to contribute to the Disease Surveillance Dashboard project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the application still works as expected.
4. Submit a pull request, describing the changes you've made and the problem they solve.
