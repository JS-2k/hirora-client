import { Component } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';

type SkillTag = string;

type MatchScore = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-job-matches-page',
  imports: [LucideArrowRight],
  templateUrl: './job-matches.html',
  styleUrls: ['../company-dashboard/company-dashboard.css', './job-matches.css']
})
export class JobMatchesPage {
  protected readonly skills: SkillTag[] = [
    'ASP.NET Core',
    'C#',
    'Angular',
    'SQL Server',
    'Entity Framework Core',
    'REST API',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'Git'
  ];

  protected readonly scores: MatchScore[] = [
    { label: 'Skill', value: '95' },
    { label: 'Exp', value: '85' },
    { label: 'Loc', value: '100' }
  ];
}
