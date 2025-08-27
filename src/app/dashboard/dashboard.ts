import { Component } from '@angular/core';
import { Dashbanner } from "../dashbanner/dashbanner";
import { MetricsCard } from "../metrics-card/metrics-card";
import { BlogCard } from "../blog-card/blog-card";
import { CourseCard } from "../course-card/course-card";
import { Navbar } from "../navbar/navbar";
import { CarouselModule, Carousel, CarouselResponsiveOptions } from 'primeng/carousel';
import { CrouselContainer } from "../crousel-container/crousel-container";
import { NavCard } from "../nav-card/nav-card";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Dashbanner, MetricsCard, BlogCard, CourseCard, Navbar, Carousel, CrouselContainer, NavCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  courses = [
  { 
    title: 'Google Data Analytics',
    img: 'assets/course1.jpg',
    rating: 4.3,
    reviews: '133k',
    enrolled: 635,
    level: 'Beginner',
    duration: '6 months',
    progress: '80% Complete'
  },
  { 
    title: 'AWS Cloud Practitioner',
    img: 'assets/course2.jpg',
    rating: 4.6,
    reviews: '95k',
    enrolled: 420,
    level: 'Beginner',
    duration: '4 months',
    progress: '45% Complete'
  },
  { 
    title: 'Full-Stack Web Development',
    img: 'assets/course3.jpg',
    rating: 4.7,
    reviews: '210k',
    enrolled: 1090,
    level: 'Intermediate',
    duration: '8 months',
    progress: '12% Complete'
  },
  { 
    title: 'Machine Learning with Python',
    img: 'assets/course4.jpg',
    rating: 4.5,
    reviews: '167k',
    enrolled: 780,
    level: 'Intermediate',
    duration: '7 months',
    progress: '60% Complete'
  },
  { 
    title: 'React Frontend Development',
    img: 'assets/course5.jpg',
    rating: 4.8,
    reviews: '120k',
    enrolled: 550,
    level: 'Beginner',
    duration: '5 months',
    progress: '33% Complete'
  },
  { 
    title: 'Cybersecurity Fundamentals',
    img: 'assets/course6.jpg',
    rating: 4.4,
    reviews: '89k',
    enrolled: 310,
    level: 'Beginner',
    duration: '3 months',
    progress: '70% Complete'
  },
  { 
    title: 'DevOps with Kubernetes & Docker',
    img: 'assets/course7.jpg',
    rating: 4.6,
    reviews: '102k',
    enrolled: 455,
    level: 'Advanced',
    duration: '6 months',
    progress: '20% Complete'
  },
  { 
    title: 'Data Visualization with Tableau',
    img: 'assets/course8.jpg',
    rating: 4.5,
    reviews: '75k',
    enrolled: 280,
    level: 'Beginner',
    duration: '2 months',
    progress: '95% Complete'
  }
];
blogs = [
  {
    title: 'Data Analyst',
    img: 'assets/blog1.jpg',
    tags: 'SQL, Viz, Cleansing',
    author: 'Ritu LNU',
    role: 'DEV · OPS',
    rating: 4.3,
    reviews: '133k reviews'
  },
  {
    title: 'Cybersecurity Trends 2025',
    img: 'assets/blog2.jpg',
    tags: 'Ethical Hacking, Zero Trust, Cloud Security',
    author: 'Raj Malvani',
    role: 'SDET-III',
    rating: 4.5,
    reviews: '98k reviews'
  },
  {
    title: 'AI in Healthcare',
    img: 'assets/blog3.jpg',
    tags: 'AI, Deep Learning, Diagnostics',
    author: 'Anu Bhatt',
    role: 'Engineering Master',
    rating: 4.6,
    reviews: '145k reviews'
  },
  {
    title: 'Mastering React Performance',
    img: 'assets/blog4.jpg',
    tags: 'React, Hooks, Optimization',
    author: 'Kumar N',
    role: 'Frontend Lead',
    rating: 4.4,
    reviews: '110k reviews'
  },
  {
    title: 'The Future of Cloud Computing',
    img: 'assets/blog5.jpg',
    tags: 'Cloud, AWS, GCP, Azure',
    author: 'Harry Shimron',
    role: 'DC Software Engineer II',
    rating: 4.7,
    reviews: '156k reviews'
  },
  {
    title: 'Blockchain for Beginners',
    img: 'assets/blog6.jpg',
    tags: 'Blockchain, Ethereum, Smart Contracts',
    author: 'Riya Kapoor',
    role: 'Blockchain Dev',
    rating: 4.2,
    reviews: '90k reviews'
  }
];
responsiveOptions: CarouselResponsiveOptions[] = [
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '991px',  numVisible: 2, numScroll: 1 },
    { breakpoint: '575px',  numVisible: 1, numScroll: 1 }
  ];
}
