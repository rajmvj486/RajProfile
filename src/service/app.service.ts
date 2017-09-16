import{Injectable} from '@angular/core'
import{Http,Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService{
    private appSkillUrl =  'https://raw.githubusercontent.com/rajmvj486/RajProfile/master/api/Skill/skills.json'; //'http://localhost:7873/api/Products/';
   private appProjectUrl = 'https://raw.githubusercontent.com/rajmvj486/RajProfile/master/api/Project/projects.json';
    constructor(private _http:Http){

    }
getProject(id: number): Observable<any> {
        return this.getProjects()
            .map((projects: any[]) => projects.find(p => p.id === id))
            .do(data =>console.log('All '+JSON.stringify(data)))
    ._catch(this.handleError);
   }
  
getProjects(): Observable<any[]>{
   return this._http.get(this.appProjectUrl)
    .map((response:Response)=> <any[]>response.json())      
    ._catch(this.handleError);

}

getSkills(): Observable<any[]>{
   return this._http.get(this.appSkillUrl)
    .map((response:Response)=> <any[]>response.json())
    ._catch(this.handleError);

}

 private handleError(error:Response){
     console.log(error);
     return Observable.throw(error.json().error || 'server error');
 }
}   
