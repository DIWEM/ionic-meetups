var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NFC = /** @class */ (function (_super) {
    __extends(NFC, _super);
    function NFC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FLAG_READER = {
            NFC_A: 0,
            NFC_B: 0x2,
            NFC_F: 0x4,
            NFC_V: 0x8,
            NFC_BARCODE: 0x10,
            SKIP_NDEF_CHECK: 0x80,
            NO_PLATFORM_SOUNDS: 0x100,
        };
        return _this;
    }
    NFC.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFC.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFC.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFC.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFC.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFC.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFC.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFC.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFC.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFC.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFC.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFC.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFC.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NFC.pluginName = "NFC";
    NFC.plugin = "phonegap-nfc";
    NFC.pluginRef = "nfc";
    NFC.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFC.platforms = ["Android", "BlackBerry 10", "Windows", "Windows Phone 8"];
    NFC = __decorate([
        Injectable()
    ], NFC);
    return NFC;
}(IonicNativePlugin));
export { NFC };
var Ndef = /** @class */ (function (_super) {
    __extends(Ndef, _super);
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    Ndef.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    Ndef.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    Ndef.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    Ndef.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    Ndef.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    Ndef.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    Ndef.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.docodeTnf = function (tnf_byte) { return cordova(this, "docodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(Ndef.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: true,
        configurable: true
    });
    Ndef.pluginName = "NFC";
    Ndef.plugin = "phonegap-nfc";
    Ndef.pluginRef = "ndef";
    Ndef = __decorate([
        Injectable()
    ], Ndef);
    return Ndef;
}(IonicNativePlugin));
export { Ndef };
var NfcUtil = /** @class */ (function (_super) {
    __extends(NfcUtil, _super);
    function NfcUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtil.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtil.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtil.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtil.pluginName = "NFC";
    NfcUtil.plugin = "phonegap-nfc";
    NfcUtil.pluginRef = "util";
    NfcUtil = __decorate([
        Injectable()
    ], NfcUtil);
    return NfcUtil;
}(IonicNativePlugin));
export { NfcUtil };
var TextHelper = /** @class */ (function (_super) {
    __extends(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(IonicNativePlugin));
export { TextHelper };
var UriHelper = /** @class */ (function (_super) {
    __extends(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(IonicNativePlugin));
export { UriHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25mYy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFLTixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBc0VULHVCQUFpQjs7O1FBQ3hDLGlCQUFXLEdBQUc7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLEtBQUs7U0FDMUIsQ0FBQzs7O0lBY0YsMEJBQVksYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBaUJ2RCw2QkFBZSxhQUNiLFNBQW9CLEVBQ3BCLFNBQW9CO0lBa0J0QixzQ0FBd0IsYUFDdEIsU0FBb0IsRUFDcEIsU0FBb0I7SUFtQnRCLGlDQUFtQixhQUNqQixRQUFnQixFQUNoQixTQUFvQixFQUNwQixTQUFvQjtJQWdCdEIsdUNBQXlCLGFBQ3ZCLFNBQW9CLEVBQ3BCLFNBQW9CO0lBV3RCLG1CQUFLLGFBQUMsT0FBYztJQVFwQiwwQkFBWTtJQVVaLG1CQUFLLGFBQUMsT0FBYztJQVNwQixxQkFBTztJQVFQLG1CQUFLO0lBVUwsc0JBQVEsYUFBQyxJQUFjO0lBU3ZCLDBCQUFZO0lBU1osMEJBQVk7SUFTWixxQkFBTztJQWFQLDJCQUFhLGFBQUMsS0FBZTtJQVM3QiwyQkFBYSxhQUFDLEdBQVc7SUFVekIsOEJBQWdCLGFBQUMsS0FBZTs7Ozs7O0lBek5yQixHQUFHO1FBRGYsVUFBVSxFQUFFO09BQ0EsR0FBRztjQTdFaEI7RUE2RXlCLGlCQUFpQjtTQUE3QixHQUFHOztJQTZPVSx3QkFBaUI7Ozs7SUFtQnpDLHFCQUFNLGFBQ0osR0FBVyxFQUNYLElBQXVCLEVBQ3ZCLEVBQXFCLEVBQ3JCLE9BQTBCO0lBTTVCLHlCQUFVLGFBQ1IsSUFBWSxFQUNaLFlBQXFCLEVBQ3JCLEVBQXNCO0lBTXhCLHdCQUFTLGFBQUMsR0FBVyxFQUFFLEVBQXNCO0lBSzdDLGdDQUFpQixhQUNmLEdBQVcsRUFDWCxPQUEwQixFQUMxQixFQUFzQjtJQU14Qiw4QkFBZSxhQUFDLFFBQWdCLEVBQUUsT0FBZTtJQUtqRCwwQkFBVyxhQUFDLFdBQWtCLEVBQUUsRUFBc0I7SUFLdEQsMEJBQVc7SUFLWCx1Q0FBd0IsYUFBQyxXQUFtQjtJQUs1Qyw0QkFBYSxhQUFDLFdBQWdCO0lBSzlCLDRCQUFhLGFBQUMsS0FBVTtJQUt4Qix3QkFBUyxhQUFDLFFBQWE7SUFLdkIsd0JBQVMsYUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEdBQVE7SUFLL0QsMEJBQVcsYUFBQyxHQUFROzBCQTFGcEIsMkJBQVM7Ozs7OzswQkFFVCxnQ0FBYzs7Ozs7OzBCQUVkLGdDQUFjOzs7Ozs7MEJBRWQsa0NBQWdCOzs7Ozs7MEJBRWhCLG1DQUFpQjs7Ozs7OzBCQUVqQiw2QkFBVzs7Ozs7OzBCQUVYLCtCQUFhOzs7Ozs7MEJBRWIsOEJBQVk7Ozs7OzswQkFpRlosNEJBQVU7Ozs7OzswQkFHViwyQkFBUzs7Ozs7Ozs7O0lBcEdFLElBQUk7UUFEaEIsVUFBVSxFQUFFO09BQ0EsSUFBSTtlQTFUakI7RUEwVDBCLGlCQUFpQjtTQUE5QixJQUFJOztJQWdIWSwyQkFBaUI7Ozs7SUFFNUMsdUJBQUssYUFBQyxDQUFTO0lBS2YsNkJBQVcsYUFBQyxDQUFTO0lBS3JCLCtCQUFhLGFBQUMsQ0FBVztJQUt6QiwrQkFBYSxhQUFDLENBQVM7SUFLdkIsa0NBQWdCLGFBQUMsS0FBZTtJQUtoQyx3QkFBTSxhQUFDLE1BQWtCLEVBQUUsR0FBVyxFQUFFLElBQXVCOzs7O0lBM0JwRCxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBMWFwQjtFQTBhNkIsaUJBQWlCO1NBQWpDLE9BQU87O0lBZ0NZLDhCQUFpQjs7OztJQUMvQyxrQ0FBYSxHQUFiLFVBQWMsSUFBYztRQUMxQixPQUFPO0lBQ1QsQ0FBQztJQUNELGtDQUFhLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBWTtRQUN0QyxPQUFPO0lBQ1QsQ0FBQztxQkFoZEg7RUEwY2dDLGlCQUFpQjs7O0lBU2xCLDZCQUFpQjs7OztJQUM5QyxpQ0FBYSxHQUFiLFVBQWMsSUFBYztRQUMxQixPQUFPO0lBQ1QsQ0FBQztJQUNELGlDQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3ZCLE9BQU87SUFDVCxDQUFDO29CQXpkSDtFQW1kK0IsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBOZGVmRXZlbnQge1xuICB0YWc6IE5kZWZUYWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlJlY29yZCB7XG4gIGlkOiBhbnlbXTtcbiAgcGF5bG9hZDogbnVtYmVyW107XG4gIHRuZjogbnVtYmVyO1xuICB0eXBlOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZGVmVGFnIHtcbiAgY2FuTWFrZVJlYWRPbmx5OiBib29sZWFuO1xuICBpZDogbnVtYmVyW107XG4gIGlzV3JpdGFibGU6IGJvb2xlYW47XG4gIG1heFNpemU6IG51bWJlcjtcbiAgbmRlZk1lc3NhZ2U6IE5kZWZSZWNvcmRbXTtcbiAgdGVjaFR5cGVzOiBzdHJpbmdbXTtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIE5GQ1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgTkZDIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlYWQgYW5kIHdyaXRlIE5GQyB0YWdzLiBZb3UgY2FuIGFsc28gYmVhbSB0bywgYW5kIHJlY2VpdmUgZnJvbSwgb3RoZXIgTkZDIGVuYWJsZWQgZGV2aWNlcy5cbiAqXG4gKiBVc2UgdG9cbiAqIC0gcmVhZCBkYXRhIGZyb20gTkZDIHRhZ3NcbiAqIC0gd3JpdGUgZGF0YSB0byBORkMgdGFnc1xuICogLSBzZW5kIGRhdGEgdG8gb3RoZXIgTkZDIGVuYWJsZWQgZGV2aWNlc1xuICogLSByZWNlaXZlIGRhdGEgZnJvbSBORkMgZGV2aWNlc1xuICpcbiAqIFRoaXMgcGx1Z2luIHVzZXMgTkRFRiAoTkZDIERhdGEgRXhjaGFuZ2UgRm9ybWF0KSBmb3IgbWF4aW11bSBjb21wYXRpYmlsdHkgYmV0d2VlbiBORkMgZGV2aWNlcywgdGFnIHR5cGVzLCBhbmQgb3BlcmF0aW5nIHN5c3RlbXMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBORkMsIE5kZWYgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25mYy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmZjOiBORkMsIHByaXZhdGUgbmRlZjogTmRlZikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5uZmMuYWRkTmRlZkxpc3RlbmVyKCgpID0+IHtcbiAqICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBhdHRhY2hlZCBuZGVmIGxpc3RlbmVyJyk7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdlcnJvciBhdHRhY2hpbmcgbmRlZiBsaXN0ZW5lcicsIGVycik7XG4gKiB9KS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBuZGVmIG1lc3NhZ2UuIHRoZSB0YWcgY29udGFpbnM6ICcsIGV2ZW50LnRhZyk7XG4gKiAgIGNvbnNvbGUubG9nKCdkZWNvZGVkIHRhZyBpZCcsIHRoaXMubmZjLmJ5dGVzVG9IZXhTdHJpbmcoZXZlbnQudGFnLmlkKSk7XG4gKlxuICogICBsZXQgbWVzc2FnZSA9IHRoaXMubmRlZi50ZXh0UmVjb3JkKCdIZWxsbyB3b3JsZCcpO1xuICogICB0aGlzLm5mYy5zaGFyZShbbWVzc2FnZV0pLnRoZW4ob25TdWNjZXNzKS5jYXRjaChvbkVycm9yKTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05GQycsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXG4gIHBsdWdpblJlZjogJ25mYycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCbGFja0JlcnJ5IDEwJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J11cbn0pXG4vKipcbiAqIEB7IE5GQyB9IGNsYXNzIG1ldGhvZHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5GQyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRkxBR19SRUFERVIgPSB7XG4gICAgTkZDX0E6IDAsXG4gICAgTkZDX0I6IDB4MixcbiAgICBORkNfRjogMHg0LFxuICAgIE5GQ19WOiAweDgsXG4gICAgTkZDX0JBUkNPREU6IDB4MTAsXG4gICAgU0tJUF9OREVGX0NIRUNLOiAweDgwLFxuICAgIE5PX1BMQVRGT1JNX1NPVU5EUzogMHgxMDAsXG4gIH07XG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzLFxuICAgIGNsZWFyRnVuY3Rpb246ICdpbnZhbGlkYXRlU2Vzc2lvbicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZVxuICB9KVxuICBiZWdpblNlc3Npb24ob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBhbnkgTkRFRiB0YWcuXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU5kZWZMaXN0ZW5lcicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZVxuICB9KVxuICBhZGROZGVmTGlzdGVuZXIoXG4gICAgb25TdWNjZXNzPzogRnVuY3Rpb24sXG4gICAgb25GYWlsdXJlPzogRnVuY3Rpb25cbiAgKTogT2JzZXJ2YWJsZTxOZGVmRXZlbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0YWdzIG1hdGNoaW5nIGFueSB0YWcgdHlwZS5cbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xuICAgKiBAcGFyYW0gb25GYWlsdXJlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgICBjbGVhckZ1bmN0aW9uOiAncmVtb3ZlVGFnRGlzY292ZXJlZExpc3RlbmVyJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlXG4gIH0pXG4gIGFkZFRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcihcbiAgICBvblN1Y2Nlc3M/OiBGdW5jdGlvbixcbiAgICBvbkZhaWx1cmU/OiBGdW5jdGlvblxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIE5ERUYgdGFncyBtYXRjaGluZyBhIHNwZWNpZmllZCBNSU1FIHR5cGUuXG4gICAqIEBwYXJhbSBtaW1lVHlwZVxuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVNaW1lVHlwZUxpc3RlbmVyJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlXG4gIH0pXG4gIGFkZE1pbWVUeXBlTGlzdGVuZXIoXG4gICAgbWltZVR5cGU6IHN0cmluZyxcbiAgICBvblN1Y2Nlc3M/OiBGdW5jdGlvbixcbiAgICBvbkZhaWx1cmU/OiBGdW5jdGlvblxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGZvcm1hdGFibGUgTkRFRiB0YWdzLlxuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIGFkZE5kZWZGb3JtYXRhYmxlTGlzdGVuZXIoXG4gICAgb25TdWNjZXNzPzogRnVuY3Rpb24sXG4gICAgb25GYWlsdXJlPzogRnVuY3Rpb25cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGFuIE5kZWZNZXNzYWdlKGFycmF5IG9mIG5kZWYgcmVjb3JkcykgdG8gYSBORkMgdGFnLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7YW55W119XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHdyaXRlKG1lc3NhZ2U6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIE1ha2VzIGEgTkZDIHRhZyByZWFkIG9ubHkuICoqV2FybmluZyoqIHRoaXMgaXMgcGVybWFuZW50LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBtYWtlUmVhZE9ubHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGFuIE5ERUYgTWVzc2FnZShhcnJheSBvZiBuZGVmIHJlY29yZHMpIHZpYSBwZWVyLXRvLXBlZXIuXG4gICAqIEBwYXJhbSBtZXNzYWdlIEFuIGFycmF5IG9mIE5ERUYgUmVjb3Jkcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hhcmUobWVzc2FnZTogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBwZWVyLXRvLXBlZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuc2hhcmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXJhc2UgYSBOREVGIHRhZ1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlcmFzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgZmlsZSB0byBhbm90aGVyIGRldmljZSB2aWEgTkZDIGhhbmRvdmVyLlxuICAgKiBAcGFyYW0gdXJpcyBBIFVSSSBhcyBhIFN0cmluZywgb3IgYW4gYXJyYXkgb2YgVVJJcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFuZG92ZXIodXJpczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBORkMgaGFuZG92ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BIYW5kb3ZlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgZGV2aWNlJ3MgTkZDIHNldHRpbmdzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93U2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgTkZDIGlzIGF2YWlsYWJsZSBhbmQgZW5hYmxlZCBvbiB0aGlzIGRldmljZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5hYmxlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQHsgTkZDIH0gY2xhc3MgdXRpbGl0eSBtZXRob2RzXG4gICAqIGZvciB1c2Ugd2l0aFxuICAgKi9cbiAgLyoqXG4gICAqIENvbnZlcnQgYnl0ZSBhcnJheSB0byBzdHJpbmdcbiAgICogQHBhcmFtIGJ5dGVzIHtudW1iZXJbXX1cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvU3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZyB0byBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdHJpbmdUb0J5dGVzKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBieXRlIGFycmF5IHRvIGhleCBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIGJ5dGVzIHtudW1iZXJbXX1cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvSGV4U3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdORkMnLFxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxuICBwbHVnaW5SZWY6ICduZGVmJ1xufSlcbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBVdGlsaXR5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIG5kZWYgcmVjb3JkcyBmb3IgdGhlIG5kZWYgdGFnIGZvcm1hdC5cbiAqIE1vdmUgcmVjb3JkcyBpbnRvIGFycmF5IGJlZm9yZSB1c2FnZS4gVGhlbiBwYXNzIGFuIGFycmF5IHRvIG1ldGhvZHMgYXMgcGFyYW1ldGVycy5cbiAqIERvIG5vdCBwYXNzIGJ5dGVzIGFzIHBhcmFtZXRlcnMgZm9yIHRoZXNlIG1ldGhvZHMsIGNvbnZlcnNpb24gaXMgYnVpbHQgaW4uXG4gKiBGb3IgdXNhZ2Ugd2l0aCBuZmMud3JpdGUoKSBhbmQgbmZjLnNoYXJlKClcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5kZWYgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfRU1QVFk6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9XRUxMX0tOT1dOOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfTUlNRV9NRURJQTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0FCU09MVVRFX1VSSTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0VYVEVSTkFMX1RZUEU6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9VTktOT1dOOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfVU5DSEFOR0VEOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfUkVTRVJWRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVjb3JkKFxuICAgIHRuZjogbnVtYmVyLFxuICAgIHR5cGU6IG51bWJlcltdIHwgc3RyaW5nLFxuICAgIGlkOiBudW1iZXJbXSB8IHN0cmluZyxcbiAgICBwYXlsb2FkOiBudW1iZXJbXSB8IHN0cmluZ1xuICApOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdGV4dFJlY29yZChcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nLFxuICAgIGlkPzogbnVtYmVyW10gfCBzdHJpbmdcbiAgKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVyaVJlY29yZCh1cmk6IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhYnNvbHV0ZVVyaVJlY29yZChcbiAgICB1cmk6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBudW1iZXJbXSB8IHN0cmluZyxcbiAgICBpZD86IG51bWJlcltdIHwgc3RyaW5nXG4gICk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBtaW1lTWVkaWFSZWNvcmQobWltZVR5cGU6IHN0cmluZywgcGF5bG9hZDogc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNtYXJ0UG9zdGVyKG5kZWZSZWNvcmRzOiBhbnlbXSwgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBlbXB0eVJlY29yZCgpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYW5kcm9pZEFwcGxpY2F0aW9uUmVjb3JkKHBhY2thZ2VOYW1lOiBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5jb2RlTWVzc2FnZShuZGVmUmVjb3JkczogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGVjb2RlTWVzc2FnZShieXRlczogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZG9jb2RlVG5mKHRuZl9ieXRlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBlbmNvZGVUbmYobWI6IGFueSwgbWU6IGFueSwgY2Y6IGFueSwgc3I6IGFueSwgaWw6IGFueSwgdG5mOiBhbnkpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0bmZUb1N0cmluZyh0bmY6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHRleHRIZWxwZXI6IFRleHRIZWxwZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHVyaUhlbHBlcjogVXJpSGVscGVyO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdORkMnLFxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxuICBwbHVnaW5SZWY6ICd1dGlsJ1xufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZmNVdGlsIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdG9IZXgoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdG9QcmludGFibGUoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb1N0cmluZyhpOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0cmluZ1RvQnl0ZXMoczogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvSGV4U3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGlzVHlwZShyZWNvcmQ6IE5kZWZSZWNvcmQsIHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEhlbHBlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgZGVjb2RlUGF5bG9hZChkYXRhOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVuY29kZVBheWxvYWQodGV4dDogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcmlIZWxwZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIGRlY29kZVBheWxvYWQoZGF0YTogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuICBlbmNvZGVQYXlsb2FkKHVyaTogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19