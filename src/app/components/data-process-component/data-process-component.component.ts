import { GetDataService } from './../../services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-process-component',
  templateUrl: './data-process-component.component.html',
  styleUrls: ['./data-process-component.component.scss']
})
export class DataProcessComponentComponent implements OnInit {
  allData = []
  buttonDisplay = "Display all"
  booleanCheckbox = false
  title = new FormControl('');
  constructor(private getData: GetDataService) { }

  //* Initialization of table data with the result of json provided by the method getAllData */
  ngOnInit(): void {
    this.getData.getAllData().subscribe(
      resp => this.allData = resp,
      error => console.log('Attention: il y a une erreur' + error),
    );
  }

  //*Method of adding an element to the json  */
  addAtodo() {
    const body = { id: null, title : this.title.value, userId : 1, completed : false}
    this.getData.postData(body).subscribe(data => {
      this.allData.push(data)
    })
    this.title.reset();


  }

  //*This method serves to check the button display all or completed based on that it redirect to the required method  */
  checkButtonDisplay() {
    if (this.buttonDisplay === "Display all") {
      this.getDataByBool()
    } else {
      this.getAlldata();
    }
  }

   //*This method serves to get all data  */
  getAlldata() {
    this.buttonDisplay = "Display all"
    this.getData.getAllData().subscribe(
      resp => this.allData = resp,
      error => console.log('Attention: il y a une erreur' + error)
    );
  }
//*This method serves to get data by his boolean*/
  getDataByBool() {
    var arrayTemp = this.allData
    this.allData = []
    this.buttonDisplay = "Display completed"
    for (var i = 0; i < arrayTemp.length; i++) {
      if (arrayTemp[i].completed) {
        this.allData.push(arrayTemp[i])

      }
    }
  }
}
