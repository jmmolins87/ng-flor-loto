import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { footerInterface } from '../../models/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear: number = new Date().getFullYear();
  // Items Menu policies
  public footerPolicies!: footerInterface[] | any[];
  public footerContact!: footerInterface[] | any[];

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    this.getItemsFooterContact();
    this.getItemsFooterPolicies();
  }

  getItemsFooterPolicies() {
    this._sharedService.itemsFooterPolicies.subscribe(itemsPolicies => {
      this.footerPolicies = itemsPolicies;
    });
    return this.footerPolicies;
  }

  getItemsFooterContact() {
    this._sharedService.itemsFooterContact.subscribe(itemsContact => {
      this.footerContact = itemsContact;
    });
    return this.footerContact;
  }

}
