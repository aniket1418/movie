import { Component, OnInit  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { NgForm } from '@angular/forms';
import { GetMovieDataService } from './user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DisplayDataComponent } from './display-data/display-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  movie:any
  public movieQuery: string | any;
  public movieItem: any;
  public category: any;
  // for storing api data into array
  movieData:any = [];
  retriveData:any = [];
  categoryList: any = [];
  categorySelected: any;
  categoryValue: any;

  public movieName: string = this.movieData.Title;
  movieActor = this.movieData.Actor;
  constructor(private getmovie: GetMovieDataService, public dialog: MatDialog){
  }
  
  public searchMovie(){
      const localStorageData =  JSON.parse(localStorage.getItem('movieObject') ?? '[]');
      for (const movie of localStorageData) {
        if (movie.query === this.movieQuery) {
          this.movieData = [movie];
          return (console.log("Found in local storage"));
        }
        
      }
      this.getmovie.getMovie(this.movieQuery).subscribe(
        Response => {
          const movie = Response;
          movie.query = this.movieQuery;
          this.movieData.push(movie)
          localStorage.setItem('movieObject', JSON.stringify(this.movieData));
          console.log("Found in Api")
          console.log(movie.Title);
        }
      )
        
  }

  openDialog({movieName,movieActor}) : void{
    this.dialog.open(DisplayDataComponent, 
      { 
        data: {
          movieName, movieActor
        }
        
      })
  }
  

  public searchCategory(){
    const localStorageData =  JSON.parse(localStorage.getItem('movieObject') ?? '[]');
    for(const movie of localStorageData){
      if(this.category === this.movieQuery){
        return console.log("Category found in the arrar")
      }
      else{
        return console.log("Category Not found in the arrya")
      }
    }
  }
 
  public categorySelectFunction(){
    console.log("button pressed");
    console.log(this.categorySelected);
    console.log(this.movieData);
    
  }
  
  ngOnInit():void{
    this.movieData = JSON.parse(localStorage.getItem('movieObject') ?? '[]');
    this.categoryList = [
      {id: 1, name: "All", value:"all"},
      {id: 2, name: "Action", value:"action"},
      {id: 3, name: "comedy", value:"comedy"},
      {id: 4, name: "Horor", value:"horor"}
    ];
    this.categorySelected = " ";
 
  }  
}

function next(): import("rxjs").PartialObserver<any> | undefined {
  throw new Error('Function not implemented.');
}

function movieObject(movieObject: any) {
  throw new Error('Function not implemented.');
}

function key(key: any, arg1: string): string {
  throw new Error('Function not implemented.');
}

function Title(Title: any) {
  throw new Error('Function not implemented.');
}

function Year(Year: any) {
  throw new Error('Function not implemented.');
}

function categorySelectFunction() {
  throw new Error('Function not implemented.');
}

function value(value: any) {
  throw new Error('Function not implemented.');
}

