import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview {
whatYoullLearn = [
    'Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job',
    'Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau)',
    'Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL and R programming',
    'Learn how to visualize and present data findings in dashboards, presentations and commonly used visualization platforms'
  ];

  skills = ['Productivity','Prompt Engineering','MS excel','Data Ethics','Document Management','Data Analysis','Data Visualization','SQL','Spreadsheets','Data Cleaning'];

  requirements = ['No experience required. If you can use a web browser, you are good to go!'];

  descriptionTop = `Quickly master Google Analytics with this hands-on, scenario-driven course, and start improving the performance of your websites today!`;

  topReviews = [
    'This course gave me the information our company has needed for ages. No more big bucks to outsource this.',
    'Amazing and usable content! Chock full of insights and helpful ideas. I learned so much.',
    'Laser‑focused exactly on the essentials I needed to hit the ground running with Google Analytics, highly recommended.'
  ];
}
