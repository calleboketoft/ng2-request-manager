"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var co_request_manager_service_1 = require('./co-request-manager.service');
var co_request_form_1 = require('co-request-form/co-request-form');
var CoRequestManagerComponent = (function () {
    function CoRequestManagerComponent(requestManagerService, formBuilder) {
        this.requestManagerService = requestManagerService;
        this.formBuilder = formBuilder;
        // emit new values when updated
        this.url = '';
        this.method = 'GET';
        this.body = '{}';
        this.headers = {};
    }
    CoRequestManagerComponent.prototype.ngOnInit = function () {
        this.saveRequestForm = this.formBuilder.group({
            newRequestName: ['', forms_1.Validators.required],
            newRequestGroup: ['', forms_1.Validators.required]
        });
        this.fc = this.saveRequestForm.controls;
    };
    CoRequestManagerComponent.prototype.selectedRequest = function (_a) {
        var url = _a.url, method = _a.method, body = _a.body, headers = _a.headers;
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    };
    CoRequestManagerComponent.prototype.saveNewRequest = function () {
        if (!this.saveRequestForm.valid) {
            alert('name or group is missing');
            return;
        }
        var requestData = this.coRequestFormComponent.request();
        var newRequestNameControl = this.saveRequestForm.controls.newRequestName;
        var newRequestGroupControl = this.saveRequestForm.controls.newRequestGroup;
        this.requestManagerService.saveNewRequest(Object.assign({}, requestData, {
            name: newRequestNameControl.value,
            tags: [newRequestGroupControl.value]
        }));
        newRequestGroupControl.updateValue('');
        newRequestNameControl.updateValue('');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoRequestManagerComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoRequestManagerComponent.prototype, "method", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoRequestManagerComponent.prototype, "body", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoRequestManagerComponent.prototype, "headers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoRequestManagerComponent.prototype, "listHeight", void 0);
    __decorate([
        core_1.ViewChild(co_request_form_1.CoRequestFormComponent), 
        __metadata('design:type', co_request_form_1.CoRequestFormComponent)
    ], CoRequestManagerComponent.prototype, "coRequestFormComponent", void 0);
    CoRequestManagerComponent = __decorate([
        core_1.Component({
            selector: 'co-request-manager',
            template: "\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <h4>Saved Requests</h4>\n        <manage-requests\n          [listHeight]=\"listHeight\"\n          (selectedRequest)=\"selectedRequest($event)\">\n        </manage-requests>\n        <br>\n      </div>\n      <div class=\"col-xs-6\">\n        <h4>REST Client</h4>\n        <co-request-form-cmp\n          [url]=\"url\"\n          [method]=\"method\"\n          [body]=\"body\"\n          [headers]=\"headers\">\n        </co-request-form-cmp>\n        <br>\n        <!-- Good place for a request button -->\n        <ng-content></ng-content>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <label>Save Request</label>\n          </div>\n        </div>\n        <form [formGroup]=\"saveRequestForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              <input type=\"text\" class=\"form-control\"\n                formControlName=\"newRequestName\"\n                placeholder=\"Name\">\n              <small [hidden]=\"fc.newRequestName.valid || fc.newRequestName.pristine\">\n                Required field\n              </small>\n            </div>\n            <div class=\"col-xs-4\">\n              <input type=\"text\" class=\"form-control\"\n                formControlName=\"newRequestGroup\"\n                placeholder=\"Group\">\n              <small [hidden]=\"fc.newRequestGroup.valid || fc.newRequestGroup.pristine\">\n                Required field\n              </small>\n            </div>\n            <div class=\"col-xs-4\" style=\"text-align: right;\">\n              <button type=\"button\" class=\"btn btn-outline-success\"\n                style=\"width: 110px;\"\n                (click)=\"saveNewRequest()\">\n                + Save\n              </button>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <small class=\"text-muted\">\n                Save currently entered values as a new request\n              </small>\n            </div>\n          </div>\n        </form>\n        <br>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [co_request_manager_service_1.CoRequestManagerService, forms_1.FormBuilder])
    ], CoRequestManagerComponent);
    return CoRequestManagerComponent;
}());
exports.CoRequestManagerComponent = CoRequestManagerComponent;
//# sourceMappingURL=co-request-manager.component.js.map