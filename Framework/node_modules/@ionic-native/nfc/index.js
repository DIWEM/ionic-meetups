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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var NFCOriginal = /** @class */ (function (_super) {
    __extends(NFCOriginal, _super);
    function NFCOriginal() {
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
    NFCOriginal.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFCOriginal.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFCOriginal.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFCOriginal.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFCOriginal.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFCOriginal.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFCOriginal.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFCOriginal.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFCOriginal.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFCOriginal.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFCOriginal.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFCOriginal.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFCOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NFCOriginal.pluginName = "NFC";
    NFCOriginal.plugin = "phonegap-nfc";
    NFCOriginal.pluginRef = "nfc";
    NFCOriginal.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFCOriginal.platforms = ["Android", "BlackBerry 10", "Windows", "Windows Phone 8"];
    return NFCOriginal;
}(IonicNativePlugin));
var NFC = new NFCOriginal();
export { NFC };
var NdefOriginal = /** @class */ (function (_super) {
    __extends(NdefOriginal, _super);
    function NdefOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NdefOriginal.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    NdefOriginal.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    NdefOriginal.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.docodeTnf = function (tnf_byte) { return cordova(this, "docodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(NdefOriginal.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: true,
        configurable: true
    });
    NdefOriginal.pluginName = "NFC";
    NdefOriginal.plugin = "phonegap-nfc";
    NdefOriginal.pluginRef = "ndef";
    return NdefOriginal;
}(IonicNativePlugin));
var Ndef = new NdefOriginal();
export { Ndef };
var NfcUtilOriginal = /** @class */ (function (_super) {
    __extends(NfcUtilOriginal, _super);
    function NfcUtilOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtilOriginal.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtilOriginal.pluginName = "NFC";
    NfcUtilOriginal.plugin = "phonegap-nfc";
    NfcUtilOriginal.pluginRef = "util";
    return NfcUtilOriginal;
}(IonicNativePlugin));
var NfcUtil = new NfcUtilOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25mYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxzRUFLTixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBc0VULHVCQUFpQjs7O1FBQ3hDLGlCQUFXLEdBQUc7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLEtBQUs7U0FDMUIsQ0FBQzs7O0lBY0YsMEJBQVksYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBaUJ2RCw2QkFBZSxhQUNiLFNBQW9CLEVBQ3BCLFNBQW9CO0lBa0J0QixzQ0FBd0IsYUFDdEIsU0FBb0IsRUFDcEIsU0FBb0I7SUFtQnRCLGlDQUFtQixhQUNqQixRQUFnQixFQUNoQixTQUFvQixFQUNwQixTQUFvQjtJQWdCdEIsdUNBQXlCLGFBQ3ZCLFNBQW9CLEVBQ3BCLFNBQW9CO0lBV3RCLG1CQUFLLGFBQUMsT0FBYztJQVFwQiwwQkFBWTtJQVVaLG1CQUFLLGFBQUMsT0FBYztJQVNwQixxQkFBTztJQVFQLG1CQUFLO0lBVUwsc0JBQVEsYUFBQyxJQUFjO0lBU3ZCLDBCQUFZO0lBU1osMEJBQVk7SUFTWixxQkFBTztJQWFQLDJCQUFhLGFBQUMsS0FBZTtJQVM3QiwyQkFBYSxhQUFDLEdBQVc7SUFVekIsOEJBQWdCLGFBQUMsS0FBZTs7Ozs7O2NBdFNsQztFQTZFeUIsaUJBQWlCO1NBQTdCLEdBQUc7O0lBNk9VLHdCQUFpQjs7OztJQW1CekMscUJBQU0sYUFDSixHQUFXLEVBQ1gsSUFBdUIsRUFDdkIsRUFBcUIsRUFDckIsT0FBMEI7SUFNNUIseUJBQVUsYUFDUixJQUFZLEVBQ1osWUFBcUIsRUFDckIsRUFBc0I7SUFNeEIsd0JBQVMsYUFBQyxHQUFXLEVBQUUsRUFBc0I7SUFLN0MsZ0NBQWlCLGFBQ2YsR0FBVyxFQUNYLE9BQTBCLEVBQzFCLEVBQXNCO0lBTXhCLDhCQUFlLGFBQUMsUUFBZ0IsRUFBRSxPQUFlO0lBS2pELDBCQUFXLGFBQUMsV0FBa0IsRUFBRSxFQUFzQjtJQUt0RCwwQkFBVztJQUtYLHVDQUF3QixhQUFDLFdBQW1CO0lBSzVDLDRCQUFhLGFBQUMsV0FBZ0I7SUFLOUIsNEJBQWEsYUFBQyxLQUFVO0lBS3hCLHdCQUFTLGFBQUMsUUFBYTtJQUt2Qix3QkFBUyxhQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsR0FBUTtJQUsvRCwwQkFBVyxhQUFDLEdBQVE7MEJBMUZwQiwyQkFBUzs7Ozs7OzBCQUVULGdDQUFjOzs7Ozs7MEJBRWQsZ0NBQWM7Ozs7OzswQkFFZCxrQ0FBZ0I7Ozs7OzswQkFFaEIsbUNBQWlCOzs7Ozs7MEJBRWpCLDZCQUFXOzs7Ozs7MEJBRVgsK0JBQWE7Ozs7OzswQkFFYiw4QkFBWTs7Ozs7OzBCQWlGWiw0QkFBVTs7Ozs7OzBCQUdWLDJCQUFTOzs7Ozs7Ozs7ZUE5Wlg7RUEwVDBCLGlCQUFpQjtTQUE5QixJQUFJOztJQWdIWSwyQkFBaUI7Ozs7SUFFNUMsdUJBQUssYUFBQyxDQUFTO0lBS2YsNkJBQVcsYUFBQyxDQUFTO0lBS3JCLCtCQUFhLGFBQUMsQ0FBVztJQUt6QiwrQkFBYSxhQUFDLENBQVM7SUFLdkIsa0NBQWdCLGFBQUMsS0FBZTtJQUtoQyx3QkFBTSxhQUFDLE1BQWtCLEVBQUUsR0FBVyxFQUFFLElBQXVCOzs7O2tCQXJjakU7RUEwYTZCLGlCQUFpQjtTQUFqQyxPQUFPOztJQWdDWSw4QkFBaUI7Ozs7SUFDL0Msa0NBQWEsR0FBYixVQUFjLElBQWM7UUFDMUIsT0FBTztJQUNULENBQUM7SUFDRCxrQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLElBQVk7UUFDdEMsT0FBTztJQUNULENBQUM7cUJBaGRIO0VBMGNnQyxpQkFBaUI7OztJQVNsQiw2QkFBaUI7Ozs7SUFDOUMsaUNBQWEsR0FBYixVQUFjLElBQWM7UUFDMUIsT0FBTztJQUNULENBQUM7SUFDRCxpQ0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixPQUFPO0lBQ1QsQ0FBQztvQkF6ZEg7RUFtZCtCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmRlZkV2ZW50IHtcbiAgdGFnOiBOZGVmVGFnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZSZWNvcmQge1xuICBpZDogYW55W107XG4gIHBheWxvYWQ6IG51bWJlcltdO1xuICB0bmY6IG51bWJlcjtcbiAgdHlwZTogbnVtYmVyW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlRhZyB7XG4gIGNhbk1ha2VSZWFkT25seTogYm9vbGVhbjtcbiAgaWQ6IG51bWJlcltdO1xuICBpc1dyaXRhYmxlOiBib29sZWFuO1xuICBtYXhTaXplOiBudW1iZXI7XG4gIG5kZWZNZXNzYWdlOiBOZGVmUmVjb3JkW107XG4gIHRlY2hUeXBlczogc3RyaW5nW107XG4gIHR5cGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBORkNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIE5GQyBwbHVnaW4gYWxsb3dzIHlvdSB0byByZWFkIGFuZCB3cml0ZSBORkMgdGFncy4gWW91IGNhbiBhbHNvIGJlYW0gdG8sIGFuZCByZWNlaXZlIGZyb20sIG90aGVyIE5GQyBlbmFibGVkIGRldmljZXMuXG4gKlxuICogVXNlIHRvXG4gKiAtIHJlYWQgZGF0YSBmcm9tIE5GQyB0YWdzXG4gKiAtIHdyaXRlIGRhdGEgdG8gTkZDIHRhZ3NcbiAqIC0gc2VuZCBkYXRhIHRvIG90aGVyIE5GQyBlbmFibGVkIGRldmljZXNcbiAqIC0gcmVjZWl2ZSBkYXRhIGZyb20gTkZDIGRldmljZXNcbiAqXG4gKiBUaGlzIHBsdWdpbiB1c2VzIE5ERUYgKE5GQyBEYXRhIEV4Y2hhbmdlIEZvcm1hdCkgZm9yIG1heGltdW0gY29tcGF0aWJpbHR5IGJldHdlZW4gTkZDIGRldmljZXMsIHRhZyB0eXBlcywgYW5kIG9wZXJhdGluZyBzeXN0ZW1zLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5mYzogTkZDLCBwcml2YXRlIG5kZWY6IE5kZWYpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubmZjLmFkZE5kZWZMaXN0ZW5lcigoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgYXR0YWNoZWQgbmRlZiBsaXN0ZW5lcicpO1xuICogfSwgKGVycikgPT4ge1xuICogICBjb25zb2xlLmxvZygnZXJyb3IgYXR0YWNoaW5nIG5kZWYgbGlzdGVuZXInLCBlcnIpO1xuICogfSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICogICBjb25zb2xlLmxvZygncmVjZWl2ZWQgbmRlZiBtZXNzYWdlLiB0aGUgdGFnIGNvbnRhaW5zOiAnLCBldmVudC50YWcpO1xuICogICBjb25zb2xlLmxvZygnZGVjb2RlZCB0YWcgaWQnLCB0aGlzLm5mYy5ieXRlc1RvSGV4U3RyaW5nKGV2ZW50LnRhZy5pZCkpO1xuICpcbiAqICAgbGV0IG1lc3NhZ2UgPSB0aGlzLm5kZWYudGV4dFJlY29yZCgnSGVsbG8gd29ybGQnKTtcbiAqICAgdGhpcy5uZmMuc2hhcmUoW21lc3NhZ2VdKS50aGVuKG9uU3VjY2VzcykuY2F0Y2gob25FcnJvcik7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdORkMnLFxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxuICBwbHVnaW5SZWY6ICduZmMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddXG59KVxuLyoqXG4gKiBAeyBORkMgfSBjbGFzcyBtZXRob2RzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBORkMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEZMQUdfUkVBREVSID0ge1xuICAgIE5GQ19BOiAwLFxuICAgIE5GQ19COiAweDIsXG4gICAgTkZDX0Y6IDB4NCxcbiAgICBORkNfVjogMHg4LFxuICAgIE5GQ19CQVJDT0RFOiAweDEwLFxuICAgIFNLSVBfTkRFRl9DSEVDSzogMHg4MCxcbiAgICBOT19QTEFURk9STV9TT1VORFM6IDB4MTAwLFxuICB9O1xuICAvKipcbiAgICogU3RhcnRzIHRoZSBORkNOREVGUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xuICAgKiBAcGFyYW0gb25GYWlsdXJlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgICBjbGVhckZ1bmN0aW9uOiAnaW52YWxpZGF0ZVNlc3Npb24nLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWVcbiAgfSlcbiAgYmVnaW5TZXNzaW9uKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYW55IE5ERUYgdGFnLlxuICAgKiBAcGFyYW0gb25TdWNjZXNzXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAzLFxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVOZGVmTGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWVcbiAgfSlcbiAgYWRkTmRlZkxpc3RlbmVyKFxuICAgIG9uU3VjY2Vzcz86IEZ1bmN0aW9uLFxuICAgIG9uRmFpbHVyZT86IEZ1bmN0aW9uXG4gICk6IE9ic2VydmFibGU8TmRlZkV2ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGFncyBtYXRjaGluZyBhbnkgdGFnIHR5cGUuXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZVRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZVxuICB9KVxuICBhZGRUYWdEaXNjb3ZlcmVkTGlzdGVuZXIoXG4gICAgb25TdWNjZXNzPzogRnVuY3Rpb24sXG4gICAgb25GYWlsdXJlPzogRnVuY3Rpb25cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBOREVGIHRhZ3MgbWF0Y2hpbmcgYSBzcGVjaWZpZWQgTUlNRSB0eXBlLlxuICAgKiBAcGFyYW0gbWltZVR5cGVcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xuICAgKiBAcGFyYW0gb25GYWlsdXJlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBjbGVhckZ1bmN0aW9uOiAncmVtb3ZlTWltZVR5cGVMaXN0ZW5lcicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZVxuICB9KVxuICBhZGRNaW1lVHlwZUxpc3RlbmVyKFxuICAgIG1pbWVUeXBlOiBzdHJpbmcsXG4gICAgb25TdWNjZXNzPzogRnVuY3Rpb24sXG4gICAgb25GYWlsdXJlPzogRnVuY3Rpb25cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBmb3JtYXRhYmxlIE5ERUYgdGFncy5cbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xuICAgKiBAcGFyYW0gb25GYWlsdXJlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogM1xuICB9KVxuICBhZGROZGVmRm9ybWF0YWJsZUxpc3RlbmVyKFxuICAgIG9uU3VjY2Vzcz86IEZ1bmN0aW9uLFxuICAgIG9uRmFpbHVyZT86IEZ1bmN0aW9uXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBhbiBOZGVmTWVzc2FnZShhcnJheSBvZiBuZGVmIHJlY29yZHMpIHRvIGEgTkZDIHRhZy5cbiAgICogQHBhcmFtIG1lc3NhZ2Uge2FueVtdfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB3cml0ZShtZXNzYWdlOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBNYWtlcyBhIE5GQyB0YWcgcmVhZCBvbmx5LiAqKldhcm5pbmcqKiB0aGlzIGlzIHBlcm1hbmVudC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWFrZVJlYWRPbmx5KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBhbiBOREVGIE1lc3NhZ2UoYXJyYXkgb2YgbmRlZiByZWNvcmRzKSB2aWEgcGVlci10by1wZWVyLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBBbiBhcnJheSBvZiBOREVGIFJlY29yZHMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNoYXJlKG1lc3NhZ2U6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBzaGFyaW5nIE5ERUYgZGF0YSB2aWEgcGVlci10by1wZWVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bnNoYXJlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVyYXNlIGEgTkRFRiB0YWdcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZXJhc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGZpbGUgdG8gYW5vdGhlciBkZXZpY2UgdmlhIE5GQyBoYW5kb3Zlci5cbiAgICogQHBhcmFtIHVyaXMgQSBVUkkgYXMgYSBTdHJpbmcsIG9yIGFuIGFycmF5IG9mIFVSSXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhbmRvdmVyKHVyaXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBzaGFyaW5nIE5ERUYgZGF0YSB2aWEgTkZDIGhhbmRvdmVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wSGFuZG92ZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIGRldmljZSdzIE5GQyBzZXR0aW5ncy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd1NldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIE5GQyBpcyBhdmFpbGFibGUgYW5kIGVuYWJsZWQgb24gdGhpcyBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIEB7IE5GQyB9IGNsYXNzIHV0aWxpdHkgbWV0aG9kc1xuICAgKiBmb3IgdXNlIHdpdGhcbiAgICovXG4gIC8qKlxuICAgKiBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gc3RyaW5nXG4gICAqIEBwYXJhbSBieXRlcyB7bnVtYmVyW119XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb1N0cmluZyhieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBzdHJpbmcgdG8gYnl0ZSBhcnJheS5cbiAgICogQHBhcmFtIHN0ciB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7bnVtYmVyW119XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RyaW5nVG9CeXRlcyhzdHI6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgYnl0ZSBhcnJheSB0byBoZXggc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBieXRlcyB7bnVtYmVyW119XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb0hleFN0cmluZyhieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxufVxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTkZDJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcbiAgcGx1Z2luUmVmOiAnbmRlZidcbn0pXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogVXRpbGl0eSBtZXRob2RzIGZvciBjcmVhdGluZyBuZGVmIHJlY29yZHMgZm9yIHRoZSBuZGVmIHRhZyBmb3JtYXQuXG4gKiBNb3ZlIHJlY29yZHMgaW50byBhcnJheSBiZWZvcmUgdXNhZ2UuIFRoZW4gcGFzcyBhbiBhcnJheSB0byBtZXRob2RzIGFzIHBhcmFtZXRlcnMuXG4gKiBEbyBub3QgcGFzcyBieXRlcyBhcyBwYXJhbWV0ZXJzIGZvciB0aGVzZSBtZXRob2RzLCBjb252ZXJzaW9uIGlzIGJ1aWx0IGluLlxuICogRm9yIHVzYWdlIHdpdGggbmZjLndyaXRlKCkgYW5kIG5mYy5zaGFyZSgpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZGVmIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0VNUFRZOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfV0VMTF9LTk9XTjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX01JTUVfTUVESUE6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9BQlNPTFVURV9VUkk6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9FWFRFUk5BTF9UWVBFOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfVU5LTk9XTjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX1VOQ0hBTkdFRDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX1JFU0VSVkVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlY29yZChcbiAgICB0bmY6IG51bWJlcixcbiAgICB0eXBlOiBudW1iZXJbXSB8IHN0cmluZyxcbiAgICBpZDogbnVtYmVyW10gfCBzdHJpbmcsXG4gICAgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmdcbiAgKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRleHRSZWNvcmQoXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZyxcbiAgICBpZD86IG51bWJlcltdIHwgc3RyaW5nXG4gICk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cmlSZWNvcmQodXJpOiBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWJzb2x1dGVVcmlSZWNvcmQoXG4gICAgdXJpOiBzdHJpbmcsXG4gICAgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmcsXG4gICAgaWQ/OiBudW1iZXJbXSB8IHN0cmluZ1xuICApOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbWltZU1lZGlhUmVjb3JkKG1pbWVUeXBlOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzbWFydFBvc3RlcihuZGVmUmVjb3JkczogYW55W10sIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHlSZWNvcmQoKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFuZHJvaWRBcHBsaWNhdGlvblJlY29yZChwYWNrYWdlTmFtZTogc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVuY29kZU1lc3NhZ2UobmRlZlJlY29yZHM6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlY29kZU1lc3NhZ2UoYnl0ZXM6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRvY29kZVRuZih0bmZfYnl0ZTogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5jb2RlVG5mKG1iOiBhbnksIG1lOiBhbnksIGNmOiBhbnksIHNyOiBhbnksIGlsOiBhbnksIHRuZjogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdG5mVG9TdHJpbmcodG5mOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0ZXh0SGVscGVyOiBUZXh0SGVscGVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB1cmlIZWxwZXI6IFVyaUhlbHBlcjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTkZDJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcbiAgcGx1Z2luUmVmOiAndXRpbCdcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmZjVXRpbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRvSGV4KGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRvUHJpbnRhYmxlKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9TdHJpbmcoaTogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdHJpbmdUb0J5dGVzKHM6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb0hleFN0cmluZyhieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBpc1R5cGUocmVjb3JkOiBOZGVmUmVjb3JkLCB0bmY6IG51bWJlciwgdHlwZTogbnVtYmVyW10gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRIZWxwZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIGRlY29kZVBheWxvYWQoZGF0YTogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuICBlbmNvZGVQYXlsb2FkKHRleHQ6IHN0cmluZywgbGFuZzogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXJpSGVscGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBkZWNvZGVQYXlsb2FkKGRhdGE6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZW5jb2RlUGF5bG9hZCh1cmk6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==