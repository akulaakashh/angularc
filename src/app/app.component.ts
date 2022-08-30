import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  result: any;
  company:any;
  companyid: any;
  companyannual_volume: any;
  chart: any = [];
  a1=0;
  a2=0;
  a3=0;
  vol!: number;
  annual_volume:any;
  year=[0,0,0]

  constructor(private service: AuthService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.service. getData().toPromise().then((res: any) => {
      this.result = res;
      console.log(" this is the data", this .result)
      for(const item of this.result){
        console.log(item.id, item.annual_volume)        
      }
  
      // this.companyid = this.result.data.id.map((id: any) => id.id);
      this.companyid = this.result.map((data_year: any) => data_year.data_year);
      //this.companyannual_volume = this.result.data.annual_volume.map((annual_volume: any) => annual_volume.annual_volume);
      //this.companyannual_volume = this.result.map((annual_volume: any) => annual_volume.annual_volume);
      //console.log('this is company id', this.companyid)
      // console.log(this.coinPrice);
      // console.log(this.coinName);

  for(let i:number=0;i>=0;i++){
     if(this.result[i].data_year=="2007") {
      this.a1=Number(this.a1)+Number(this.result[i].annual_volume); 
      //console.log('a',this.a1);

     }
     else if(this.result[i].data_year=="975"){
      this.a2=Number(this.a2)+Number(this.result[i].annual_volume);
      //console.log('aa',this.a2);
    }
    else if(this.result[i].data_year=="2021"){
      this.a3=Number(this.a3)+Number(this.result[i].annual_volume);
      //console.log('aa',this.a3);
    }

      this.year=[this.a1,this.a2,this.a3]
      console.log(this.year)

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: [2007,975,2021],
          datasets: [
            { 
              data: this.year,
              borderColor: '#3e95cd',
              
              label: 'Coin Price',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
        });
    //this.year=[this.a1,this.a2,this.a3]
    //console.log(this.year)
  
      
      //this.year=[this.a1,this.a2,this.a3]
      //console.log('asfdg',this.year)

      
      
  }});
  }
}
