import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from 'src/app/lazy-load-script.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private lazyLoadService: LazyLoadScriptService) {}

  ngOnInit(): void {
    this.lazyLoadService.loadScript('assets/js/main.js').subscribe((_) => {
      console.log('Jquery is loaded!');
    });
  }
}
