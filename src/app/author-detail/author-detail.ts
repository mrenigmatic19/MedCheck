import { Component } from '@angular/core';

@Component({
  selector: 'app-author-detail',
  imports: [],
  templateUrl: './author-detail.html',
  styleUrl: './author-detail.scss'
})
export class AuthorDetail {
  bio: string[] = [
    `Stephane is a solutions architect, consultant and software developer with a particular interest in all things related to Cloud & Big Data. He is a many-times best seller instructor on Udemy for his courses in AWS and Apache Kafka.`,
    `Stephane is recognized as an AWS Hero and is an AWS Certified Solutions Architect Professional & AWS Certified DevOps Professional. He loves to teach people how to use the AWS properly, to get them ready for their AWS certifications, and most importantly for the real world.`,
    `He also loves Apache Kafka. He served on the Program Committee organizing the Kafka Summit in New York, London and San Francisco and has been an active member of the Apache Kafka community.`
  ];
}
