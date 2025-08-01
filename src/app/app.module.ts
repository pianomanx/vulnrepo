import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MyreportsComponent } from './myreports/myreports.component';
import { SettingsComponent } from './settings/settings.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewreportComponent } from './newreport/newreport.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportComponent } from './report/report.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPassComponent } from './dialog-pass/dialog-pass.component';
import { MessageService } from './message.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DialogAddissueComponent } from './dialog-addissue/dialog-addissue.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IndexeddbService } from './indexeddb.service';
import { MatChipsModule } from '@angular/material/chips';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { DialogImportComponent } from './dialog-import/dialog-import.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { ImportReportComponent } from './import-report/import-report.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogExportissuesComponent } from './dialog-exportissues/dialog-exportissues.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogChangelogComponent } from './dialog-changelog/dialog-changelog.component';
import { TemplatesListComponent } from './templates-list/templates-list.component';
import { DialogChangekeyComponent } from './dialog-changekey/dialog-changekey.component';
import { DialogRemoveitemsComponent } from './dialog-removeitems/dialog-removeitems.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialogCvssComponent } from './dialog-cvss/dialog-cvss.component';
import { MatRadioModule } from '@angular/material/radio';
import { HammerModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogCveComponent } from './dialog-cve/dialog-cve.component';
import { FaqComponent } from './faq/faq.component';
import { DialogCustomcontentComponent } from './dialog-customcontent/dialog-customcontent.component';
import { DialogApikeyComponent } from './dialog-apikey/dialog-apikey.component';
import { DialogApiaddComponent } from './dialog-apiadd/dialog-apiadd.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogAddreportprofileComponent } from './dialog-addreportprofile/dialog-addreportprofile.component';
import { DialogApierrorComponent } from './dialog-apierror/dialog-apierror.component';
import { DialogReportcssComponent } from './dialog-reportcss/dialog-reportcss.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsvsComponent } from './asvs/asvs.component';
import { DialogAsvs4Component } from './dialog-asvs4/dialog-asvs4.component';
import { TbhmComponent } from './tbhm/tbhm.component';
import { Pcidss4Component } from './pcidss4/pcidss4.component';
import { DialogPcidss4Component } from './dialog-pcidss4/dialog-pcidss4.component';
import { DialogAboutComponent } from './dialog-about/dialog-about.component';
import { DialogIssuesEditComponent } from './dialog-issues-edit/dialog-issues-edit.component';
import { DialogAddCustomTemplateComponent } from './dialog-add-custom-template/dialog-add-custom-template.component';
import { DialogEncryptReportComponent } from './dialog-encrypt-report/dialog-encrypt-report.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CveSearchComponent } from './cve-search/cve-search.component';
import { DialogEditorFullscreenComponent } from './dialog-editor-fullscreen/dialog-editor-fullscreen.component';
import { DialogAttachPreviewComponent } from './dialog-attach-preview/dialog-attach-preview.component';
import { FilesizePipe } from './filesize.pipe';
import { DialogOllamaComponent } from './dialog-ollama/dialog-ollama.component';
import { DialogOllamaSettingsComponent } from './dialog-ollama-settings/dialog-ollama-settings.component';
import {MatSliderModule} from '@angular/material/slider';
import { DialogMergeIssuesComponent } from './dialog-merge-issues/dialog-merge-issues.component';
import { DialogReportHistoryComponent } from './dialog-report-history/dialog-report-history.component';
import { DialogSpinnerComponent } from './dialog-spinner/dialog-spinner.component';
import { BbListComponent } from './bb-list/bb-list.component';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        MyreportsComponent,
        SettingsComponent,
        NewreportComponent,
        ReportComponent,
        DialogPassComponent,
        DialogAddissueComponent,
        DialogImportComponent,
        DialogEditComponent,
        ImportReportComponent,
        DialogExportissuesComponent,
        DialogChangelogComponent,
        DialogChangekeyComponent,
        DialogRemoveitemsComponent,
        DialogCvssComponent,
        DialogCveComponent,
        FaqComponent,
        DialogCustomcontentComponent,
        DialogApikeyComponent,
        DialogApiaddComponent,
        DialogAddreportprofileComponent,
        DialogApierrorComponent,
        DialogReportcssComponent,
        TemplatesListComponent,
        AsvsComponent,
        DialogAsvs4Component,
        TbhmComponent,
        Pcidss4Component,
        DialogPcidss4Component,
        DialogAboutComponent,
        DialogIssuesEditComponent,
        DialogAddCustomTemplateComponent,
        DialogEncryptReportComponent,
        CveSearchComponent,
        DialogEditorFullscreenComponent,
        DialogAttachPreviewComponent,
        FilesizePipe,
        DialogOllamaComponent,
        DialogOllamaSettingsComponent,
        DialogMergeIssuesComponent,
        DialogReportHistoryComponent,
        BbListComponent,
        DialogSpinnerComponent
    ],
    exports: [],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBadgeModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatSnackBarModule,
        MatSelectModule,
        DragDropModule,
        MatTabsModule,
        MatMenuModule,
        MatRadioModule,
        HammerModule,
        MatProgressBarModule,
        NgxChartsModule,
        ClipboardModule,
        MatTooltipModule,
        MatSliderModule,
        CdkAccordionModule], providers: [MessageService, IndexeddbService, DatePipe, provideHttpClient(withInterceptorsFromDi())] })

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
