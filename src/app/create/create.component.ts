import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  blobUrl: string;

  constructor() { }

  ngOnInit() {
  }

  onchange(files: FileList) {
    // ファイルが指定されていなければ
    if (files.length <= 0) {
      return;
    }
    
    console.log(files[0]);

    this.blobUrl = window.URL.createObjectURL(files[0]);

    console.log(this.blobUrl);


    // // ［3］ファイルを取得
    // let f = files.item[0];
    // // ［4］ファイルをセット
    // let data = new FormData();
    // data.append('upfile', f, f.name);

    // ［5］サーバーに送信
    // this.http.post('app/upload.php', data)
    //   .subscribe(
    //     data => console.log(data),
    //     error => console.log(error)
    //   );
  }
}
