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

  ngOnInit(): void {
    this.getData.getAllData().subscribe(
      resp => this.allData = resp,
      error => console.log('Attention: il y a une erreur' + error),
    );
  }

  addAtodo() {
    const body = { id: null, title : this.title.value, userId : 1, completed : false}
    this.getData.postData(body).subscribe(data => {
      this.allData.push(data)
    })
    this.title.reset();
    

  }
  checkButtonDisplay() {
    if (this.buttonDisplay === "Display all") {
      this.getDataByBool()
    } else {
      this.getAlldata();
    }
  }

  getAlldata() {
    this.buttonDisplay = "Display all"
    this.getData.getAllData().subscribe(
      resp => this.allData = resp,
      error => console.log('Attention: il y a une erreur' + error)
    );
  }

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
