import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tour-guide',
  templateUrl: './tour-guide.component.html',
  styleUrls: ['./tour-guide.component.scss']
})
export class TourGuideComponent implements OnInit {

  mapRoom: boolean = false;
  classRoom: boolean = false;
  classRoomOne: boolean = false;
  classRoomTwo: boolean = false;

  // back: boolean = true;

 @Output() back = new EventEmitter();


 toggleBack() {
    this.back.emit('back');
 }

  toggleMapRoom() {
    this.mapRoom = !this.mapRoom;
    this.classRoom = false;
  }
  toggleClassRoom() {
    this.classRoom = !this.classRoom;
    this.mapRoom = false;
  }

  toggleClassRoomOne() {
    this.classRoomOne = !this.classRoomOne;
    this.classRoomTwo = false;

  }
  toggleClassRoomTwo() {
    this.classRoomTwo = !this.classRoomTwo;
    this.classRoomOne = false;

  }

  constructor() { }

  ngOnInit() {
  }

}
