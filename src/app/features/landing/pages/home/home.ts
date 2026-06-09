import { Component } from '@angular/core';

type HiringStep = {
  number: string;
  label: string;
  active?: boolean;
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
  protected readonly hiringSteps: HiringStep[] = [
    { number: '01', label: 'Post' },
    { number: '02', label: 'Match' },
    { number: '03', label: 'Interview' },
    { number: '04', label: 'Hire', active: true }
  ];
}
