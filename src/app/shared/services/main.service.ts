import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Experience, Post, Project, User } from '@models';
import { projects } from "@shared/data/projects.mock";

@Injectable({
  providedIn: 'root',
})
export class MainService {
  experiences (){
    return projects;
  }
}
