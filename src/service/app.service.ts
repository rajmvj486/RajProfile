import{Injectable} from '@angular/core'
import{Http,Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService{
    private appServiceUrl =  'api/Skill/skills.json'; //'http://localhost:7873/api/Products/';
    constructor(private _http:Http){

    }
//getProduct(id: number): Observable<any> {
        // return this.getProducts()
        //     .map((products: any[]) => products.find(p => p.productId === id));
  //  }

getSkills(): Observable<any[]>{
   return this._http.get(this.appServiceUrl)
    .map((response:Response)=> <any[]>response.json())
    .do(data =>console.log('All '+JSON.stringify(data)))
    ._catch(this.handleError);

}

 private handleError(error:Response){
     console.log(error);
     return Observable.throw(error.json().error || 'server error');
 }
}   
