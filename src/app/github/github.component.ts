import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user: any;
  repos: any;
  username: string = "";

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    
  }

  search(){
  this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe(response =>{
      this.user = response;
    })

    this.githubService.getRepos().subscribe(response =>{
      this.repos = response;
    })
  }

}
