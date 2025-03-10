export = Grid;
declare function Grid(parent: any, name: string): void;
declare class Grid {
    constructor(parent: any, name: string);
    private logger_;
    private listenerCompareFunction;
    private duplicationHandling;
    private _getFieldByName;
    private toggledViewFieldsVisibility_;
    classDefManager: ClassDefManager;
    protected arFields: any[];
    private arTableViewFields;
    private arFormViewFields;
    private _permissionFilters;
    private fCanInsert;
    private fCanEdit;
    private fCanDelete;
    private isGrLookup;
    private changes;
    private buttons;
    private arButtons;
    private _fieldToLinkId;
    classesToValidatePermissions: any[];
    groups: FieldGroupSet;
    private reservedWords;
    private onGridDefinition;
    protected tableViewBuffer: TableViewBuffer;
    private aggregateBar;
    toolbar: {
        visible: boolean;
    };
    fields: FieldList;
    parent: any;
    process: Process;
    private _name;
    userPrefName: string;
    private fSelectedRecords;
    unselectableRecords: any[];
    title: string;
    private pairName_;
    private componentFactoryResolver_;
    private formViewBuffer_;
    private clientBof;
    private clientEof;
    private clientRecNo;
    private clientRecordCount;
    private clientPosition;
    private clientCollapsed;
    integerDatabaseType: string;
    private integerDatabaseType_;
    selectedRecords: string[];
    getSelectedRecords(opt_viewMode?: number): any[];
    getSelectedRecordsAtView(viewMode?: number): any[];
    hasDataSet(): boolean;
    private clientCanInsert;
    private clientCanDelete;
    private clientCanPost;
    private clientCanInvertSelection;
    private clientCanModify;
    private clientCanShowLog;
    private clientCanExport;
    private hasCalculateField;
    private hasFieldWithInformedControl_;
    private hasDetailField;
    private recentlyWritten_;
    private isFirstSync;
    private recentlyCreated;
    private recentlyInserted;
    private written_;
    private fieldsHasChanged;
    private directionOfBlur;
    private navigateOnlyEditableFields;
    private maxColumn;
    private viewHasChanged;
    private viewChangedByUser;
    private canSync;
    private syncOnlyCurrentRecord;
    private inLookup;
    private inSpeedFill;
    private focusChangedByLocate_;
    private delayedOnAfterScrollEventCall_;
    private locate_last_value;
    private locate_last_bookmark;
    private locate_last_field_found;
    private searchTempDs;
    private toIgnoreBookmarks;
    userCanExport: boolean;
    toggleKeyButtonEnabled: boolean;
    private executePrepareOnFieldMethod;
    private useLocatePatternForAll;
    private fieldToFocus;
    private fieldToFocusCalledByUser;
    private firstRecNoOfView;
    private editingField;
    private clientEditingFieldName;
    private waitingForEdition;
    private unlockEdition;
    private _lookupCallerField;
    getLookupCallerField(): Field;
    private firstField;
    private lastField;
    private firstEditableField;
    private lastEditableField;
    private _reprepareFieldPermissions;
    private _reprepareGrid;
    private _preparedFieldsLength;
    private _syncOfGrLookupFromReadOnlyField;
    private stateProtectionId_;
    private stateProtectionLevel_;
    autoPersist: boolean;
    private protectState_;
    private unprotectState_;
    private protectedEmit_;
    protected adaptEvent_(name: string, descriptor: AdapterDescriptor | Record<any, any>): void;
    onBeforeEdit: Event;
    onAfterEdit: Event;
    onBeforeInsert: Event;
    onAfterInsert: Event;
    onBeforeDelete: Event;
    onAfterDelete: Event;
    onBeforeCancel: Event;
    onAfterCancel: Event;
    onBeforePost: Event;
    onAfterPost: Event;
    onChangeView: Event;
    onBeforeScroll: Event;
    onAfterScroll: Event;
    onLocate: Event;
    onBeforeDuplicate: Event;
    onAfterDuplicate: Event;
    onShowLog: Event;
    onBeforeSelectRecord: Event;
    onAfterSelectRecord: Event;
    onDefineFields: Event;
    onBeforePrepare: Event;
    onAfterPrepare: Event;
    onBeforeExpand: Event;
    onAfterExpand: Event;
    onExport: Event;
    private getIndexOfDsKeyField;
    setFieldsProperties(...args: any[]): void;
    getFieldsByProperty(...args: any[]): Field[];
    private _getArrayFromList;
    private _translateFieldNamesToFieldObjectsArray;
    private getKeyFieldExistInDs;
    getKeyField(): Field;
    private getIndexOfDsClassField;
    private getClassFieldExistInDs;
    private doRefresh;
    private setNewBufferFieldValue;
    private canShowButtonsBar;
    private resetPropertiesToResend;
    emit(event: any, ...args: any[]): any;
    resetFields(): void;
    private deleteField;
    clearButtons(): void;
    private clearFields;
    private resetButtons;
    name: string;
    help:
        | {
              overview: string;
              buttons: Record<string, string>;
          }
        | string;
    private formatEventId;
    refresh(opt_force?: boolean): void;
    private fDs;
    tableViewFieldNames: string;
    formViewFieldNames: string;
    private bookmarkBeforeRefresh_;
    private saveBookmarkState_;
    private preserveFieldLinkIds_;
    ds: DataSet;
    definitionClass: number | null;
    definitionName: number | null;
    private syncDataSetReferenceToAggregates;
    column: number;
    private span;
    breakLine: boolean;
    cssClass: any;
    width: string;
    confirmDelete: boolean;
    confirmCancel: boolean;
    confirmChange: boolean;
    canShowLog: boolean;
    canDuplicate: boolean;
    readOnly: boolean;
    canModify: boolean;
    classKey: number;
    classDefinition: any;
    maxSelectedRecords: number;
    maxRecordCount: number;
    private _isVariableGrid;
    hasTableView: boolean;
    hasFormView: boolean;
    collapsed: boolean;
    canInsert: number;
    canEdit: number;
    canDelete: number;
    canExport: number;
    dataExporter: any;
    private canPost;
    canInvertSelection: boolean;
    automaticClearSelectedRecords: boolean;
    canPostDataSetOnEvents: boolean;
    private refreshFieldIndexCache;
    private lastDataSetId;
    private refreshHintFieldIndexes;
    hintFieldNames: string;
    private getHintValues;
    automaticClearUnselectableRecords: boolean;
    viewMode: number;
    private handleEdition;
    private handleEditingFieldName;
    protected _scrollDetailGrids(): void;
    private updateDetailGrids;
    private handlePosition;
    classKeyToValidatePermission: number | DBKey;
    private getCurrentBookmark;
    private handleRecordSelection;
    private getSelectionRecordsRange;
    private handleCollapsed;
    private collapsed_;
    private handleFieldNameWithBlur;
    private handleInput;
    private handleGridSynchronize;
    private handleGridSynchronizeFunctions;
    private refreshFields;
    private linkFields;
    private getNextEditableField;
    private getPriorEditableField;
    private getNextVisibleField;
    private getPriorVisibleField;
    private forceChangedFields;
    private syncButtons;
    private getNextFieldToFocus;
    private syncCheckFieldFocus;
    private clearSelectedFieldByClick;
    private formSyncRefreshNavButtonsView;
    private syncFieldProperties_;
    private _readOnlyOfFieldsHasChanged;
    private syncFieldStyle_;
    private getFormViewDataSynchronize;
    private visible;
    private formSync_;
    private tabSyncRefreshNavButtonsView;
    private tabSyncAddRemoveRows;
    private tabSyncClearInactiveRows_;
    private getCurrentRecNo_;
    private getRecordCount_;
    private alertKeyNotFoundOnce;
    private alertedKeys_;
    protected tabSyncBufferUpdate(dsSync: any, records: any, i: any, isCurrentRecord: any): void;
    private getHtmlForLinks_;
    private calculateFirstRecNoOfView;
    private syncDataSetStateToBufferState;
    private tableSync_;
    selectedRecordsChanged: boolean;
    private tableSyncPriorRecords_;
    private tableSyncCurrentRecord_;
    private _isInserting;
    private _newTableViewRecordBuffer;
    private tableSyncNextRecords_;
    private getTableRecordsSyncCommands_;
    protected sync_(formSync: any, tableSync: any): void;
    private checkRefresh;
    private _getChanges;
    private syncCheckBufferChange;
    private updateFieldValue;
    edit(field?: GridField): void;
    protected newEvent_(
        type: string,
        opt_options?: {
            cancelable: boolean;
        }
    ): GridEvent;
    insert(): void;
    private _setFieldDefaultValue;
    private forEachDetail_;
    private _getAllDataSets;
    private _delMasterAndDetailRecords;
    private _deleteDetailGrids;
    private removeBookmarkFromSelectAndUnSelectedRecords;
    del(handleDetailGrid?: boolean): void;
    private delete;
    private editingOrInserting;
    post(opt_doParentPost?: boolean, ...args: any[]): boolean;
    cancel(): void;
    getFieldsAsStringList(): StringList;
    private checkWordAvailability;
    field(name: string, opt_type?: string, opt_size?: number, ...args: any[]): Field | ViewDefField;
    protected locateField(fieldName: string): Field;
    private declareGetterAndSetter_;
    private _addField;
    private input;
    button(
        name: string,
        opt_target?: string | ((arg0: any) => any),
        opt_order?: number,
        opt_processKey?: number,
        opt_newTab?: boolean
    ): Button;
    action(name: any, target: any, order: any, processKey: any, newTab: any): Button;
    visibleButtons: Array<Button | string>;
    visibleActions: Array<Button | string>;
    enabledButtons: Array<Button | string>;
    enabledActions: Array<Button | string>;
    private dsFieldTypeToFieldType;
    private _prepareGridEvents;
    private _applyGridDefinition;
    private _prepareFromClass;
    private _prepareFromDataSet;
    private getIkey;
    private getIclass;
    private _prepareAggregates;
    private _preparePermissionFilter;
    private _prepareFieldPermissions;
    private _fpvManager;
    private _prepareFieldFormAndTableViewable;
    private _prepareRequiredDataSetFields;
    private _requiredDataSetFieldsSatisfied;
    private _prepareDetailGrid;
    private _prepareTreeGrid;
    private _prepareDetailGrids;
    protected prepare(): void;
    persist(): number;
    write(opt_showInFormView?: boolean, opt_noWriteInClient?: boolean): void;
    private fViewMode;
    private _sortFieldsAndDeclareUnnamedGroups;
    private _hasScrollEvents;
    private _writeAndScrollDetails;
    private writeFormView;
    private writeTableView;
    private writeFields;
    userKeyToValidatePermissions: number;
    validateFieldPermissions: boolean;
    private _classe;
    private _canInsertRecord;
    private _getSuggestedClassToInsertion;
    private permissionFilters;
    private _getClassKeyToValidate;
    private _validateNegativeKey;
    private _validateIfUserCanPost;
    private _validateJustToGroup;
    private _validateIfUserCanStartEdit;
    private _validateIfUserCanStartInsertAndReturnSuggestedClassKey;
    private _validateDelete;
    private _validateExport;
    private validateFields;
    private validateRequiredFields;
    private _getRequiredFieldsNotFilled;
    private breakFocusFlow;
    private focusFlowDisabled_;
    private flushFocusFlow;
    private postAtNavigation;
    private safeCallOnAfterScroll;
    private handleFirst;
    private handleLast;
    private handlePrior;
    private handleNext;
    private handleChangeView;
    scroll(action: string | ((arg0: DataSet) => any)): void;
    private collectAllRecordsToDuplicate_;
    private readCurrentRecordToDuplicate_;
    private handleDuplicateRecord_;
    duplicateRecord(opt_bookmark?: string): void;
    private insertRecordsFromMap_;
    private handleInsert;
    private handleDelete;
    private handlePost;
    private handleCancel;
    private handleInvertSelection;
    private allAlreadySelected_;
    private handleSetsOrRetrievesAll;
    private handleSelectRecord;
    private act_focus_;
    private fieldAction;
    private _defaultOnShowLog;
    private getChildrenJustToGroup_;
    lookup(field: GridField): void;
    private _handleLookup;
    private endLookup;
    private selectAllOnLookup;
    expand(nodeValue: string): void;
    colapse(nodeValue: string): void;
    private handleTreeViewToggle;
    private speedFill;
    private _locateField;
    private _locateValueAtField;
    private _compareNearestOrMatch;
    private _locateLookupField;
    private _locateCalculatedField;
    private _locateMemoField;
    private _isChildOfRoot;
    private _originalTreeClone;
    private _isChildOfRoots;
    private _defaultOnLocate;
    private _prepareIfNecessary;
    private locate;
    private _removeStrFromList;
    private _getFieldIndexOrder;
    private index;
    private updateAggregateValue;
    private handleLog;
    private handleExport;
    private fieldIsVisibleInCurrentView_;
    private handleToggleKey_;
    private getFieldByNames_;
    private handleAction;
    private handleGridActionsFunctions;
    private assign;
    private _close;
    private toString;
    private _ivfs;
    private exportersClass;
    private getExportFormatsOptions;
    private _resetClientButtons;
    private _hasSelectEvents;
    private handleSync;
    private getActions;
    toggleKeyVisibility(): void;
    toggleFieldVisibility(field: string | Field): void;
    private finishToggleFieldVisibility_;
}
declare namespace Grid {
    export {
        FORM_VIEW as FORMVIEW,
        TABLE_VIEW as TABLEVIEW,
        NEVER,
        ALWAYS,
        USER_PERMISSION,
        MDA_ERROR,
        MDA_DELETE,
        MDA_UNLINK,
        LOCATE_ALL_FIELDS,
        LOCATE_EXACT,
        LOCATE_NEXT,
        persist,
        MAX_VISIBLE_RECORD_COUNT,
        AdapterDescriptor,
        Event,
        Button,
        ViewDefField,
        Process,
    };
}
import ClassDefManager = require('@nginstack/engine/lib/classdef/ClassDefManager.js');
import FieldGroupSet = require('../classdef/FieldGroupSet.js');
import TableViewBuffer = require('./TableViewBuffer.js');
import FieldList = require('@nginstack/engine/lib/classdef/FieldList.js');
type Process = import('../process/Process');
import Field = require('@nginstack/engine/lib/classdef/Field.js');
type AdapterDescriptor = import('@nginstack/engine/lib/event/AdapterDescriptor');
type Event = import('@nginstack/engine/lib/event/Event');
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
import DBKey = require('@nginstack/engine/lib/dbkey/DBKey.js');
import GridField = require('./GridField.js');
import GridEvent = require('../classdef/GridEvent.js');
import StringList = require('@nginstack/engine/lib/string/StringList.js');
type ViewDefField = import('../classdef/ViewDefField');
type Button = import('../button/Button');
declare const FORM_VIEW: number;
declare const TABLE_VIEW: number;
declare var NEVER: number;
declare var ALWAYS: number;
declare var USER_PERMISSION: number;
declare var MDA_ERROR: typeof MasterDeleteAction;
declare var MDA_DELETE: typeof MasterDeleteAction;
declare var MDA_UNLINK: typeof MasterDeleteAction;
declare var LOCATE_ALL_FIELDS: number;
declare var LOCATE_EXACT: number;
declare var LOCATE_NEXT: number;
declare function persist(grids: Grid | Grid[]): number;
declare var MAX_VISIBLE_RECORD_COUNT: number;
import MasterDeleteAction = require('@nginstack/engine/lib/classdef/MasterDeleteAction.js');
