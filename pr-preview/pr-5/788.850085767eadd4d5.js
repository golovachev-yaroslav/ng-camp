"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([[788],{

/***/ 9986:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 4808);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 8887:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 4929);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 9867);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 6111);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 3793:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilChanged: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 9656);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 9867);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 6111);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 9990:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skip: () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 8503);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ 8551:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2486);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 7243:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 8551);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 425);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 9583);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 24:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 9986);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 4929:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 7243);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 24);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 4808:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),

/***/ 425:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=intervalProvider.js.map

/***/ }),

/***/ 1992:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11yModule: () => (/* binding */ A11yModule),
/* harmony export */   ActiveDescendantKeyManager: () => (/* binding */ ActiveDescendantKeyManager),
/* harmony export */   AriaDescriber: () => (/* binding */ AriaDescriber),
/* harmony export */   CDK_DESCRIBEDBY_HOST_ATTRIBUTE: () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   CDK_DESCRIBEDBY_ID_PREFIX: () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   CdkAriaLive: () => (/* binding */ CdkAriaLive),
/* harmony export */   CdkMonitorFocus: () => (/* binding */ CdkMonitorFocus),
/* harmony export */   CdkTrapFocus: () => (/* binding */ CdkTrapFocus),
/* harmony export */   ConfigurableFocusTrap: () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   ConfigurableFocusTrapFactory: () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   EventListenerFocusTrapInertStrategy: () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   FOCUS_TRAP_INERT_STRATEGY: () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   FocusKeyManager: () => (/* binding */ FocusKeyManager),
/* harmony export */   FocusMonitor: () => (/* binding */ FocusMonitor),
/* harmony export */   FocusMonitorDetectionMode: () => (/* binding */ FocusMonitorDetectionMode),
/* harmony export */   FocusTrap: () => (/* binding */ FocusTrap),
/* harmony export */   FocusTrapFactory: () => (/* binding */ FocusTrapFactory),
/* harmony export */   HighContrastMode: () => (/* binding */ HighContrastMode),
/* harmony export */   HighContrastModeDetector: () => (/* binding */ HighContrastModeDetector),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   InputModalityDetector: () => (/* binding */ InputModalityDetector),
/* harmony export */   InteractivityChecker: () => (/* binding */ InteractivityChecker),
/* harmony export */   IsFocusableConfig: () => (/* binding */ IsFocusableConfig),
/* harmony export */   LIVE_ANNOUNCER_DEFAULT_OPTIONS: () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN: () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY: () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   ListKeyManager: () => (/* binding */ ListKeyManager),
/* harmony export */   LiveAnnouncer: () => (/* binding */ LiveAnnouncer),
/* harmony export */   MESSAGES_CONTAINER_ID: () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   NoopTreeKeyManager: () => (/* binding */ NoopTreeKeyManager),
/* harmony export */   TREE_KEY_MANAGER: () => (/* binding */ TREE_KEY_MANAGER),
/* harmony export */   TREE_KEY_MANAGER_FACTORY: () => (/* binding */ TREE_KEY_MANAGER_FACTORY),
/* harmony export */   TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   TreeKeyManager: () => (/* binding */ TreeKeyManager),
/* harmony export */   addAriaReferencedId: () => (/* binding */ addAriaReferencedId),
/* harmony export */   getAriaReferenceIds: () => (/* binding */ getAriaReferenceIds),
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* binding */ isFakeTouchstartFromScreenReader),
/* harmony export */   removeAriaReferencedId: () => (/* binding */ removeAriaReferencedId)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6809);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2319);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 5981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8887);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 3793);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 6340);
/* harmony import */ var _angular_cdk_coercion_private__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion/private */ 8344);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ 3957);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ 814);














/** IDs are delimited by an empty space, as per the spec. */
const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some(existingId => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter(val => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */
let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
let AriaDescriber = /*#__PURE__*/(() => {
  class AriaDescriber {
    constructor(_document,
    /**
     * @deprecated To be turned into a required parameter.
     * @breaking-change 14.0.0
     */
    _platform) {
      this._platform = _platform;
      /** Map of all registered message elements that have been placed into the document. */
      this._messageRegistry = new Map();
      /** Container for all registered messages. */
      this._messagesContainer = null;
      /** Unique ID for the service. */
      this._id = `${nextId++}`;
      this._document = _document;
      this._id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID) + '-' + nextId++;
    }
    describe(hostElement, message, role) {
      if (!this._canBeDescribed(hostElement, message)) {
        return;
      }
      const key = getKey(message, role);
      if (typeof message !== 'string') {
        // We need to ensure that the element has an ID.
        setMessageId(message, this._id);
        this._messageRegistry.set(key, {
          messageElement: message,
          referenceCount: 0
        });
      } else if (!this._messageRegistry.has(key)) {
        this._createMessageElement(message, role);
      }
      if (!this._isElementDescribedByMessage(hostElement, key)) {
        this._addMessageReference(hostElement, key);
      }
    }
    removeDescription(hostElement, message, role) {
      if (!message || !this._isElementNode(hostElement)) {
        return;
      }
      const key = getKey(message, role);
      if (this._isElementDescribedByMessage(hostElement, key)) {
        this._removeMessageReference(hostElement, key);
      }
      // If the message is a string, it means that it's one that we created for the
      // consumer so we can remove it safely, otherwise we should leave it in place.
      if (typeof message === 'string') {
        const registeredMessage = this._messageRegistry.get(key);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
          this._deleteMessageElement(key);
        }
      }
      if (this._messagesContainer?.childNodes.length === 0) {
        this._messagesContainer.remove();
        this._messagesContainer = null;
      }
    }
    /** Unregisters all created message elements and removes the message container. */
    ngOnDestroy() {
      const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
      for (let i = 0; i < describedElements.length; i++) {
        this._removeCdkDescribedByReferenceIds(describedElements[i]);
        describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      this._messagesContainer?.remove();
      this._messagesContainer = null;
      this._messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    _createMessageElement(message, role) {
      const messageElement = this._document.createElement('div');
      setMessageId(messageElement, this._id);
      messageElement.textContent = message;
      if (role) {
        messageElement.setAttribute('role', role);
      }
      this._createMessagesContainer();
      this._messagesContainer.appendChild(messageElement);
      this._messageRegistry.set(getKey(message, role), {
        messageElement,
        referenceCount: 0
      });
    }
    /** Deletes the message element from the global messages container. */
    _deleteMessageElement(key) {
      this._messageRegistry.get(key)?.messageElement?.remove();
      this._messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */
    _createMessagesContainer() {
      if (this._messagesContainer) {
        return;
      }
      const containerClassName = 'cdk-describedby-message-container';
      const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
      for (let i = 0; i < serverContainers.length; i++) {
        // When going from the server to the client, we may end up in a situation where there's
        // already a container on the page, but we don't have a reference to it. Clear the
        // old container so we don't get duplicates. Doing this, instead of emptying the previous
        // container, should be slightly faster.
        serverContainers[i].remove();
      }
      const messagesContainer = this._document.createElement('div');
      // We add `visibility: hidden` in order to prevent text in this container from
      // being searchable by the browser's Ctrl + F functionality.
      // Screen-readers will still read the description for elements with aria-describedby even
      // when the description element is not visible.
      messagesContainer.style.visibility = 'hidden';
      // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
      // the description element doesn't impact page layout.
      messagesContainer.classList.add(containerClassName);
      messagesContainer.classList.add('cdk-visually-hidden');
      // @breaking-change 14.0.0 Remove null check for `_platform`.
      if (this._platform && !this._platform.isBrowser) {
        messagesContainer.setAttribute('platform', 'server');
      }
      this._document.body.appendChild(messagesContainer);
      this._messagesContainer = messagesContainer;
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */
    _removeCdkDescribedByReferenceIds(element) {
      // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
      const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
      element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    _addMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      // Add the aria-describedby reference and set the
      // describedby_host attribute to mark the element.
      addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
      registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    _removeMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      registeredMessage.referenceCount--;
      removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */
    _isElementDescribedByMessage(element, key) {
      const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
      const registeredMessage = this._messageRegistry.get(key);
      const messageId = registeredMessage && registeredMessage.messageElement.id;
      return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */
    _canBeDescribed(element, message) {
      if (!this._isElementNode(element)) {
        return false;
      }
      if (message && typeof message === 'object') {
        // We'd have to make some assumptions about the description element's text, if the consumer
        // passed in an element. Assume that if an element is passed in, the consumer has verified
        // that it can be used as a description.
        return true;
      }
      const trimmedMessage = message == null ? '' : `${message}`.trim();
      const ariaLabel = element.getAttribute('aria-label');
      // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
      // element, because screen readers will end up reading out the same text twice in a row.
      return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
    /** Checks whether a node is an Element node. */
    _isElementNode(element) {
      return element.nodeType === this._document.ELEMENT_NODE;
    }
    static {
      this.ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AriaDescriber,
        factory: AriaDescriber.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AriaDescriber;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Gets a key that can be used to look messages up in the registry. */
function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
/**
 * Selects items based on keyboard inputs. Implements the typeahead functionality of
 * `role="listbox"` or `role="tree"` and other related roles.
 */
class Typeahead {
  constructor(initialItems, config) {
    this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._items = [];
    this._selectedItemIndex = -1;
    /** Buffer for the letters that the user has pressed */
    this._pressedLetters = [];
    this._selectedItem = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.selectedItem = this._selectedItem;
    const typeAheadInterval = typeof config?.debounceInterval === 'number' ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && initialItems.length && initialItems.some(item => typeof item.getLabel !== 'function')) {
      throw new Error('KeyManager items in typeahead mode must implement the `getLabel` method.');
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
    // otherwise fall back to resolving alphanumeric characters via the keyCode.
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.Z || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.
    this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(typeAheadInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this._pressedLetters.join('').toLocaleUpperCase())).subscribe(inputString => {
      // Start at 1 because we want to start searching at the item immediately
      // following the current active item.
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
}

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
  constructor(_items, injector) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    this._wrap = false;
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    this._pageUpAndDown = {
      enabled: false,
      delta: 10
    };
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */
    this._skipPredicateFn = item => item.disabled;
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */
    this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Stream that emits whenever the active item of the list manager changes. */
    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe(newItems => this._itemsChanged(newItems.toArray()));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(_items)) {
      if (!injector && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('ListKeyManager constructed with a signal must receive an injector');
      }
      this._effectRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => this._itemsChanged(_items()), {
        injector
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some(item => typeof item.getLabel !== 'function')) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new Typeahead(items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.TAB:
        this.tabOut.next();
        return;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.hasModifierKey)(event, 'shiftKey')) {
          this._typeahead?.handleKey(event);
        }
        // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem();
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    // Explicitly check for `null` and `undefined` because other falsy values are valid.
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this._items)) {
      return this._items();
    }
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex) {
        this._activeItemIndex = newIndex;
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
}
class ActiveDescendantKeyManager extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }
    super.setActiveItem(index);
    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }
}
class FocusKeyManager extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
}

/**
 * This class manages keyboard events for trees. If you pass it a QueryList or other list of tree
 * items, it will set the active item, focus, handle expansion and typeahead correctly when
 * keyboard events occur.
 */
class TreeKeyManager {
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i = 0; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
        activeIndex = i;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    // Use `makeFocusable` here, because we want the item to just be focusable, not actually
    // capture the focus since the user isn't interacting with it. See #29628.
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      // Backwards compatibility for items that don't implement `makeFocusable`.
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  /**
   *
   * @param items List of TreeKeyManager options. Can be synchronous or asynchronous.
   * @param config Optional configuration options. By default, use 'ltr' horizontal orientation. By
   * default, do not skip any nodes. By default, key manager only calls `focus` method when items
   * are focused and does not call `activate`. If `typeaheadDefaultInterval` is `true`, use a
   * default interval of 200ms.
   */
  constructor(items, config) {
    /** The index of the currently active (focused) item. */
    this._activeItemIndex = -1;
    /** The currently active (focused) item. */
    this._activeItem = null;
    /** Whether or not we activate the item when it's focused. */
    this._shouldActivationFollowFocus = false;
    /**
     * The orientation that the tree is laid out in. In `rtl` mode, the behavior of Left and
     * Right arrow are switched.
     */
    this._horizontalOrientation = 'ltr';
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager.
     *
     * The default value for this doesn't skip any elements in order to keep tree items focusable
     * when disabled. This aligns with ARIA guidelines:
     * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols.
     */
    this._skipPredicateFn = _item => false;
    /** Function to determine equivalent items. */
    this._trackByFn = item => item;
    /** Synchronous cache of the items to manage. */
    this._items = [];
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
    this._hasInitialFocused = false;
    /** Stream that emits any time the focused item changes. */
    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // We allow for the items to be an array or Observable because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._items = items.toArray();
      items.changes.subscribe(newItems => {
        this._items = newItems.toArray();
        this._typeahead?.setItems(this._items);
        this._updateActiveItemIndex(this._items);
        this._initializeFocus();
      });
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.isObservable)(items)) {
      items.subscribe(newItems => {
        this._items = newItems;
        this._typeahead?.setItems(newItems);
        this._updateActiveItemIndex(newItems);
        this._initializeFocus();
      });
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config.shouldActivationFollowFocus === 'boolean') {
      this._shouldActivationFollowFocus = config.shouldActivationFollowFocus;
    }
    if (config.horizontalOrientation) {
      this._horizontalOrientation = config.horizontalOrientation;
    }
    if (config.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if (config.trackBy) {
      this._trackByFn = config.trackBy;
    }
    if (typeof config.typeAheadDebounceInterval !== 'undefined') {
      this._setTypeAhead(config.typeAheadDebounceInterval);
    }
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  /**
   * Handles a keyboard event on the tree.
   * @param event Keyboard event that represents the user interaction with the tree.
   */
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case 'Tab':
        // Return early here, in order to allow Tab to actually tab out of the tree
        return;
      case 'ArrowDown':
        this._focusNextItem();
        break;
      case 'ArrowUp':
        this._focusPreviousItem();
        break;
      case 'ArrowRight':
        this._horizontalOrientation === 'rtl' ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case 'ArrowLeft':
        this._horizontalOrientation === 'rtl' ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case 'Home':
        this._focusFirstItem();
        break;
      case 'End':
        this._focusLastItem();
        break;
      case 'Enter':
      case ' ':
        this._activateCurrentItem();
        break;
      default:
        if (event.key === '*') {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        // Return here, in order to avoid preventing the default action of non-navigational
        // keys or resetting the buffer of pressed letters.
        return;
    }
    // Reset the typeahead since the user has used a navigational key.
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  /** The currently active item. */
  getActiveItem() {
    return this._activeItem;
  }
  /** Focus the first available item. */
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  /** Focus the last available item. */
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  /** Focus the next available item. */
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  /** Focus the previous available item. */
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    // Set default options
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === 'number' ? itemOrIndex : this._items.findIndex(item => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    // If we're just setting the same item, don't re-call activate or focus
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex(item => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new Typeahead(this._items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i = startingIndex + 1; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i = startingIndex - 1; i >= 0; i--) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  /**
   * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
   */
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent = this._activeItem.getParent();
      if (!parent || this._skipPredicateFn(parent)) {
        return;
      }
      this.focusItem(parent);
    }
  }
  /**
   * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
   */
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      (0,_angular_cdk_coercion_private__WEBPACK_IMPORTED_MODULE_11__.coerceObservable)(this._activeItem.getChildren()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(children => {
        const firstChild = children.find(child => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === 'boolean' ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === 'boolean' ? item.isDisabled : item.isDisabled?.();
  }
  /** For all items that are the same level as the current item, we expand those items. */
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent) {
      itemsToExpand = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(this._items.filter(item => item.getParent() === null));
    } else {
      itemsToExpand = (0,_angular_cdk_coercion_private__WEBPACK_IMPORTED_MODULE_11__.coerceObservable)(parent.getChildren());
    }
    itemsToExpand.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(items => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
}
/** @docs-private */
function TREE_KEY_MANAGER_FACTORY() {
  return (items, options) => new TreeKeyManager(items, options);
}
/** Injection token that determines the key manager to use. */
const TREE_KEY_MANAGER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('tree-key-manager', {
  providedIn: 'root',
  factory: TREE_KEY_MANAGER_FACTORY
});
/** @docs-private */
const TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: TREE_KEY_MANAGER,
  useFactory: TREE_KEY_MANAGER_FACTORY
};

// NoopTreeKeyManager is a "noop" implementation of TreeKeyMangerStrategy. Methods are noops. Does
// not emit to streams.
//
// Used for applications built before TreeKeyManager to opt-out of TreeKeyManager and revert to
// legacy behavior.
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
class NoopTreeKeyManager {
  constructor() {
    this._isNoopTreeKeyManager = true;
    // Provide change as required by TreeKeyManagerStrategy. NoopTreeKeyManager is a "noop"
    // implementation that does not emit to streams.
    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  destroy() {
    this.change.complete();
  }
  onKeydown() {
    // noop
  }
  getActiveItemIndex() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  getActiveItem() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  focusItem() {
    // noop
  }
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
function NOOP_TREE_KEY_MANAGER_FACTORY() {
  return () => new NoopTreeKeyManager();
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
const NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: TREE_KEY_MANAGER,
  useFactory: NOOP_TREE_KEY_MANAGER_FACTORY
};

/**
 * Configuration for the isFocusable method.
 */
class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }
}
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether it is focusable or
 * tabbable.
 */
let InteractivityChecker = /*#__PURE__*/(() => {
  class InteractivityChecker {
    constructor(_platform) {
      this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    isDisabled(element) {
      // This does not capture some cases, such as a non-form control with a disabled attribute or
      // a form control inside of a disabled form, but should capture the most common cases.
      return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    isVisible(element) {
      return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    isTabbable(element) {
      // Nothing is tabbable on the server 😎
      if (!this._platform.isBrowser) {
        return false;
      }
      const frameElement = getFrameElement(getWindow(element));
      if (frameElement) {
        // Frame elements inherit their tabindex onto all child elements.
        if (getTabIndexValue(frameElement) === -1) {
          return false;
        }
        // Browsers disable tabbing to an element inside of an invisible frame.
        if (!this.isVisible(frameElement)) {
          return false;
        }
      }
      let nodeName = element.nodeName.toLowerCase();
      let tabIndexValue = getTabIndexValue(element);
      if (element.hasAttribute('contenteditable')) {
        return tabIndexValue !== -1;
      }
      if (nodeName === 'iframe' || nodeName === 'object') {
        // The frame or object's content may be tabbable depending on the content, but it's
        // not possibly to reliably detect the content of the frames. We always consider such
        // elements as non-tabbable.
        return false;
      }
      // In iOS, the browser only considers some specific elements as tabbable.
      if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
        return false;
      }
      if (nodeName === 'audio') {
        // Audio elements without controls enabled are never tabbable, regardless
        // of the tabindex attribute explicitly being set.
        if (!element.hasAttribute('controls')) {
          return false;
        }
        // Audio elements with controls are by default tabbable unless the
        // tabindex attribute is set to `-1` explicitly.
        return tabIndexValue !== -1;
      }
      if (nodeName === 'video') {
        // For all video elements, if the tabindex attribute is set to `-1`, the video
        // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
        // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
        // tabindex attribute is the source of truth here.
        if (tabIndexValue === -1) {
          return false;
        }
        // If the tabindex is explicitly set, and not `-1` (as per check before), the
        // video element is always tabbable (regardless of whether it has controls or not).
        if (tabIndexValue !== null) {
          return true;
        }
        // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
        // has controls enabled. Firefox is special as videos are always tabbable regardless
        // of whether there are controls or not.
        return this._platform.FIREFOX || element.hasAttribute('controls');
      }
      return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @param config The config object with options to customize this method's behavior
     * @returns Whether the element is focusable.
     */
    isFocusable(element, config) {
      // Perform checks in order of left to most expensive.
      // Again, naive approach that does not capture many edge cases and browser quirks.
      return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
    }
    static {
      this.ɵfac = function InteractivityChecker_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InteractivityChecker,
        factory: InteractivityChecker.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return InteractivityChecker;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */
function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */
function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }
  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 */
class FocusTrap {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, /** @breaking-change 20.0.0 param to become required */
  _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    this._hasAttached = false;
    // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);
    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      }
      // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    // Iterate in reverse DOM order.
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement('div');
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    // TODO: remove this conditional when injector is required in the constructor.
    if (this._injector) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
}
/**
 * Factory that allows easy instantiation of focus traps.
 */
let FocusTrapFactory = /*#__PURE__*/(() => {
  class FocusTrapFactory {
    constructor(_checker, _ngZone, _document) {
      this._checker = _checker;
      this._ngZone = _ngZone;
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    create(element, deferCaptureElements = false) {
      return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
    }
    static {
      this.ɵfac = function FocusTrapFactory_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FocusTrapFactory,
        factory: FocusTrapFactory.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return FocusTrapFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Directive for trapping focus within a region. */
let CdkTrapFocus = /*#__PURE__*/(() => {
  class CdkTrapFocus {
    /** Whether the focus trap is active. */
    get enabled() {
      return this.focusTrap?.enabled || false;
    }
    set enabled(value) {
      if (this.focusTrap) {
        this.focusTrap.enabled = value;
      }
    }
    constructor(_elementRef, _focusTrapFactory,
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 13.0.0
     */
    _document) {
      this._elementRef = _elementRef;
      this._focusTrapFactory = _focusTrapFactory;
      /** Previously focused element to restore focus to upon destroy when using autoCapture. */
      this._previouslyFocusedElement = null;
      const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
      if (platform.isBrowser) {
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
    }
    ngOnDestroy() {
      this.focusTrap?.destroy();
      // If we stored a previously focused element when using autoCapture, return focus to that
      // element now that the trapped region is being destroyed.
      if (this._previouslyFocusedElement) {
        this._previouslyFocusedElement.focus();
        this._previouslyFocusedElement = null;
      }
    }
    ngAfterContentInit() {
      this.focusTrap?.attachAnchors();
      if (this.autoCapture) {
        this._captureFocus();
      }
    }
    ngDoCheck() {
      if (this.focusTrap && !this.focusTrap.hasAttached()) {
        this.focusTrap.attachAnchors();
      }
    }
    ngOnChanges(changes) {
      const autoCaptureChange = changes['autoCapture'];
      if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
        this._captureFocus();
      }
    }
    _captureFocus() {
      this._previouslyFocusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      this.focusTrap?.focusInitialElementWhenReady();
    }
    static {
      this.ɵfac = function CdkTrapFocus_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkTrapFocus,
        selectors: [["", "cdkTrapFocus", ""]],
        inputs: {
          enabled: [2, "cdkTrapFocus", "enabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        exportAs: ["cdkTrapFocus"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return CdkTrapFocus;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
class ConfigurableFocusTrap extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
}

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }
    this._listener = e => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener('focus', this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.
    if (target && !focusTrapRoot.contains(target) && !target.closest?.('div.cdk-overlay-pane')) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
}

/** The injection token used to specify the inert strategy. */
const FOCUS_TRAP_INERT_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');

/** Injectable that ensures only the most recently enabled FocusTrap is active. */
let FocusTrapManager = /*#__PURE__*/(() => {
  class FocusTrapManager {
    constructor() {
      // A stack of the FocusTraps on the page. Only the FocusTrap at the
      // top of the stack is active.
      this._focusTrapStack = [];
    }
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    register(focusTrap) {
      // Dedupe focusTraps that register multiple times.
      this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
      let stack = this._focusTrapStack;
      if (stack.length) {
        stack[stack.length - 1]._disable();
      }
      stack.push(focusTrap);
      focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    deregister(focusTrap) {
      focusTrap._disable();
      const stack = this._focusTrapStack;
      const i = stack.indexOf(focusTrap);
      if (i !== -1) {
        stack.splice(i, 1);
        if (stack.length) {
          stack[stack.length - 1]._enable();
        }
      }
    }
    static {
      this.ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FocusTrapManager)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FocusTrapManager,
        factory: FocusTrapManager.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return FocusTrapManager;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Factory that allows easy instantiation of configurable focus traps. */
let ConfigurableFocusTrapFactory = /*#__PURE__*/(() => {
  class ConfigurableFocusTrapFactory {
    constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
      this._checker = _checker;
      this._ngZone = _ngZone;
      this._focusTrapManager = _focusTrapManager;
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._document = _document;
      // TODO split up the strategies into different modules, similar to DateAdapter.
      this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
    }
    create(element, config = {
      defer: false
    }) {
      let configObject;
      if (typeof config === 'boolean') {
        configObject = {
          defer: config
        };
      } else {
        configObject = config;
      }
      return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
    }
    static {
      this.ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConfigurableFocusTrapFactory,
        factory: ConfigurableFocusTrapFactory.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ConfigurableFocusTrapFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */
function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when `event.buttons` is zero, or
  // `event.detail` is zero depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `detail` works on Chrome, but fails on Firefox.
  return event.buttons === 0 || event.detail === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */
const INPUT_MODALITY_DETECTOR_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */
const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ALT, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.CONTROL, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.MAC_META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */
const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */
const modalityEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */
let InputModalityDetector = /*#__PURE__*/(() => {
  class InputModalityDetector {
    /** The most recently detected input modality. */
    get mostRecentModality() {
      return this._modality.value;
    }
    constructor(_platform, ngZone, document, options) {
      this._platform = _platform;
      /**
       * The most recently detected input modality event target. Is null if no input modality has been
       * detected or if the associated event target is null for some unknown reason.
       */
      this._mostRecentTarget = null;
      /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
      this._modality = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
      /**
       * The timestamp of the last touch input modality. Used to determine whether mousedown events
       * should be attributed to mouse or touch.
       */
      this._lastTouchMs = 0;
      /**
       * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
       * bound.
       */
      this._onKeydown = event => {
        // If this is one of the keys we should ignore, then ignore it and don't update the input
        // modality to keyboard.
        if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
          return;
        }
        this._modality.next('keyboard');
        this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
      };
      /**
       * Handles mousedown events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      this._onMousedown = event => {
        // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
        // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
        // after the previous touch event.
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
          return;
        }
        // Fake mousedown events are fired by some screen readers when controls are activated by the
        // screen reader. Attribute them to keyboard input modality.
        this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');
        this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
      };
      /**
       * Handles touchstart events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      this._onTouchstart = event => {
        // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
        // events are fired. Again, attribute to keyboard input modality.
        if (isFakeTouchstartFromScreenReader(event)) {
          this._modality.next('keyboard');
          return;
        }
        // Store the timestamp of this touch event, as it's used to distinguish between mouse events
        // triggered via mouse vs touch.
        this._lastTouchMs = Date.now();
        this._modality.next('touch');
        this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
      };
      this._options = {
        ...INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,
        ...options
      };
      // Skip the first emission as it's null.
      this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.skip)(1));
      this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)());
      // If we're not in a browser, this service should do nothing, as there's no relevant input
      // modality to detect.
      if (_platform.isBrowser) {
        ngZone.runOutsideAngular(() => {
          document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
          document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
          document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
        });
      }
    }
    ngOnDestroy() {
      this._modality.complete();
      if (this._platform.isBrowser) {
        document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      }
    }
    static {
      this.ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InputModalityDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INPUT_MODALITY_DETECTOR_OPTIONS, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InputModalityDetector,
        factory: InputModalityDetector.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return InputModalityDetector;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const LIVE_ANNOUNCER_ELEMENT_TOKEN = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
let uniqueIds = 0;
let LiveAnnouncer = /*#__PURE__*/(() => {
  class LiveAnnouncer {
    constructor(elementToken, _ngZone, _document, _defaultOptions) {
      this._ngZone = _ngZone;
      this._defaultOptions = _defaultOptions;
      // We inject the live element and document as `any` because the constructor signature cannot
      // reference browser globals (HTMLElement, Document) on non-browser environments, since having
      // a class decorator causes TypeScript to preserve the constructor signature types.
      this._document = _document;
      this._liveElement = elementToken || this._createLiveElement();
    }
    announce(message, ...args) {
      const defaultOptions = this._defaultOptions;
      let politeness;
      let duration;
      if (args.length === 1 && typeof args[0] === 'number') {
        duration = args[0];
      } else {
        [politeness, duration] = args;
      }
      this.clear();
      clearTimeout(this._previousTimeout);
      if (!politeness) {
        politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
      }
      if (duration == null && defaultOptions) {
        duration = defaultOptions.duration;
      }
      // TODO: ensure changing the politeness works on all environments we support.
      this._liveElement.setAttribute('aria-live', politeness);
      if (this._liveElement.id) {
        this._exposeAnnouncerToModals(this._liveElement.id);
      }
      // This 100ms timeout is necessary for some browser + screen-reader combinations:
      // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
      // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
      //   second time without clearing and then using a non-zero delay.
      // (using JAWS 17 at time of this writing).
      return this._ngZone.runOutsideAngular(() => {
        if (!this._currentPromise) {
          this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
        }
        clearTimeout(this._previousTimeout);
        this._previousTimeout = setTimeout(() => {
          this._liveElement.textContent = message;
          if (typeof duration === 'number') {
            this._previousTimeout = setTimeout(() => this.clear(), duration);
          }
          // For some reason in tests this can be undefined
          // Probably related to ZoneJS and every other thing that patches browser APIs in tests
          this._currentResolve?.();
          this._currentPromise = this._currentResolve = undefined;
        }, 100);
        return this._currentPromise;
      });
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    clear() {
      if (this._liveElement) {
        this._liveElement.textContent = '';
      }
    }
    ngOnDestroy() {
      clearTimeout(this._previousTimeout);
      this._liveElement?.remove();
      this._liveElement = null;
      this._currentResolve?.();
      this._currentPromise = this._currentResolve = undefined;
    }
    _createLiveElement() {
      const elementClass = 'cdk-live-announcer-element';
      const previousElements = this._document.getElementsByClassName(elementClass);
      const liveEl = this._document.createElement('div');
      // Remove any old containers. This can happen when coming in from a server-side-rendered page.
      for (let i = 0; i < previousElements.length; i++) {
        previousElements[i].remove();
      }
      liveEl.classList.add(elementClass);
      liveEl.classList.add('cdk-visually-hidden');
      liveEl.setAttribute('aria-atomic', 'true');
      liveEl.setAttribute('aria-live', 'polite');
      liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
      this._document.body.appendChild(liveEl);
      return liveEl;
    }
    /**
     * Some browsers won't expose the accessibility node of the live announcer element if there is an
     * `aria-modal` and the live announcer is outside of it. This method works around the issue by
     * pointing the `aria-owns` of all modals to the live announcer element.
     */
    _exposeAnnouncerToModals(id) {
      // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with
      // the `SnakBarContainer` and other usages.
      //
      // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
      // section of the DOM we need to look through. This should cover all the cases we support, but
      // the selector can be expanded if it turns out to be too narrow.
      const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
      for (let i = 0; i < modals.length; i++) {
        const modal = modals[i];
        const ariaOwns = modal.getAttribute('aria-owns');
        if (!ariaOwns) {
          modal.setAttribute('aria-owns', id);
        } else if (ariaOwns.indexOf(id) === -1) {
          modal.setAttribute('aria-owns', ariaOwns + ' ' + id);
        }
      }
    }
    static {
      this.ɵfac = function LiveAnnouncer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LiveAnnouncer,
        factory: LiveAnnouncer.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return LiveAnnouncer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
let CdkAriaLive = /*#__PURE__*/(() => {
  class CdkAriaLive {
    /** The aria-live politeness level to use when announcing messages. */
    get politeness() {
      return this._politeness;
    }
    set politeness(value) {
      this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';
      if (this._politeness === 'off') {
        if (this._subscription) {
          this._subscription.unsubscribe();
          this._subscription = null;
        }
      } else if (!this._subscription) {
        this._subscription = this._ngZone.runOutsideAngular(() => {
          return this._contentObserver.observe(this._elementRef).subscribe(() => {
            // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
            const elementText = this._elementRef.nativeElement.textContent;
            // The `MutationObserver` fires also for attribute
            // changes which we don't want to announce.
            if (elementText !== this._previousAnnouncedText) {
              this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
              this._previousAnnouncedText = elementText;
            }
          });
        });
      }
    }
    constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
      this._elementRef = _elementRef;
      this._liveAnnouncer = _liveAnnouncer;
      this._contentObserver = _contentObserver;
      this._ngZone = _ngZone;
      this._politeness = 'polite';
    }
    ngOnDestroy() {
      if (this._subscription) {
        this._subscription.unsubscribe();
      }
    }
    static {
      this.ɵfac = function CdkAriaLive_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAriaLive,
        selectors: [["", "cdkAriaLive", ""]],
        inputs: {
          politeness: [0, "cdkAriaLive", "politeness"],
          duration: [0, "cdkAriaLiveDuration", "duration"]
        },
        exportAs: ["cdkAriaLive"],
        standalone: true
      });
    }
  }
  return CdkAriaLive;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Detection mode used for attributing the origin of a focus event. */
var FocusMonitorDetectionMode = /*#__PURE__*/function (FocusMonitorDetectionMode) {
  /**
   * Any mousedown, keydown, or touchstart event that happened in the previous
   * tick or the current tick will be used to assign a focus event's origin (to
   * either mouse, keyboard, or touch). This is the default option.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["IMMEDIATE"] = 0] = "IMMEDIATE";
  /**
   * A focus event's origin is always attributed to the last corresponding
   * mousedown, keydown, or touchstart event, no matter how long ago it occurred.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["EVENTUAL"] = 1] = "EVENTUAL";
  return FocusMonitorDetectionMode;
}(FocusMonitorDetectionMode || {});
/** InjectionToken for FocusMonitorOptions. */
const FOCUS_MONITOR_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */
const captureEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */
let FocusMonitor = /*#__PURE__*/(() => {
  class FocusMonitor {
    constructor(_ngZone, _platform, _inputModalityDetector, /** @breaking-change 11.0.0 make document required */
    document, options) {
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._inputModalityDetector = _inputModalityDetector;
      /** The focus origin that the next focus event is a result of. */
      this._origin = null;
      /** Whether the window has just been focused. */
      this._windowFocused = false;
      /**
       * Whether the origin was determined via a touch interaction. Necessary as properly attributing
       * focus events to touch interactions requires special logic.
       */
      this._originFromTouchInteraction = false;
      /** Map of elements being monitored to their info. */
      this._elementInfo = new Map();
      /** The number of elements currently being monitored. */
      this._monitoredElementCount = 0;
      /**
       * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
       * as well as the number of monitored elements that they contain. We have to treat focus/blur
       * handlers differently from the rest of the events, because the browser won't emit events
       * to the document when focus moves inside of a shadow root.
       */
      this._rootNodeFocusListenerCount = new Map();
      /**
       * Event listener for `focus` events on the window.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      this._windowFocusListener = () => {
        // Make a note of when the window regains focus, so we can
        // restore the origin info for the focused element.
        this._windowFocused = true;
        this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
      };
      /** Subject for stopping our InputModalityDetector subscription. */
      this._stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      /**
       * Event listener for `focus` and 'blur' events on the document.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      this._rootNodeFocusAndBlurListener = event => {
        const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
        // We need to walk up the ancestor chain in order to support `checkChildren`.
        for (let element = target; element; element = element.parentElement) {
          if (event.type === 'focus') {
            this._onFocus(event, element);
          } else {
            this._onBlur(event, element);
          }
        }
      };
      this._document = document;
      this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
    }
    monitor(element, checkChildren = false) {
      const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__.coerceElement)(element);
      // Do nothing if we're not on the browser platform or the passed in node isn't an element.
      if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
        // Note: we don't want the observable to emit at all so we don't pass any parameters.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)();
      }
      // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
      // the shadow root, rather than the `document`, because the browser won't emit focus events
      // to the `document`, if focus is moving within the same shadow root.
      const rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(nativeElement) || this._getDocument();
      const cachedInfo = this._elementInfo.get(nativeElement);
      // Check if we're already monitoring this element.
      if (cachedInfo) {
        if (checkChildren) {
          // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
          // observers into ones that behave as if `checkChildren` was turned on. We need a more
          // robust solution.
          cachedInfo.checkChildren = true;
        }
        return cachedInfo.subject;
      }
      // Create monitored element info.
      const info = {
        checkChildren: checkChildren,
        subject: new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(),
        rootNode
      };
      this._elementInfo.set(nativeElement, info);
      this._registerGlobalListeners(info);
      return info.subject;
    }
    stopMonitoring(element) {
      const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__.coerceElement)(element);
      const elementInfo = this._elementInfo.get(nativeElement);
      if (elementInfo) {
        elementInfo.subject.complete();
        this._setClasses(nativeElement);
        this._elementInfo.delete(nativeElement);
        this._removeGlobalListeners(elementInfo);
      }
    }
    focusVia(element, origin, options) {
      const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__.coerceElement)(element);
      const focusedElement = this._getDocument().activeElement;
      // If the element is focused already, calling `focus` again won't trigger the event listener
      // which means that the focus classes won't be updated. If that's the case, update the classes
      // directly without waiting for an event.
      if (nativeElement === focusedElement) {
        this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
      } else {
        this._setOrigin(origin);
        // `focus` isn't available on the server
        if (typeof nativeElement.focus === 'function') {
          nativeElement.focus(options);
        }
      }
    }
    ngOnDestroy() {
      this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    /** Access injected document if available or fallback to global document reference */
    _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
      const doc = this._getDocument();
      return doc.defaultView || window;
    }
    _getFocusOrigin(focusEventTarget) {
      if (this._origin) {
        // If the origin was realized via a touch interaction, we need to perform additional checks
        // to determine whether the focus origin should be attributed to touch or program.
        if (this._originFromTouchInteraction) {
          return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
        } else {
          return this._origin;
        }
      }
      // If the window has just regained focus, we can restore the most recent origin from before the
      // window blurred. Otherwise, we've reached the point where we can't identify the source of the
      // focus. This typically means one of two things happened:
      //
      // 1) The element was programmatically focused, or
      // 2) The element was focused via screen reader navigation (which generally doesn't fire
      //    events).
      //
      // Because we can't distinguish between these two cases, we default to setting `program`.
      if (this._windowFocused && this._lastFocusOrigin) {
        return this._lastFocusOrigin;
      }
      // If the interaction is coming from an input label, we consider it a mouse interactions.
      // This is a special case where focus moves on `click`, rather than `mousedown` which breaks
      // our detection, because all our assumptions are for `mousedown`. We need to handle this
      // special case, because it's very common for checkboxes and radio buttons.
      if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
        return 'mouse';
      }
      return 'program';
    }
    /**
     * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
     * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
     * handle a focus event following a touch interaction, we need to determine whether (1) the focus
     * event was directly caused by the touch interaction or (2) the focus event was caused by a
     * subsequent programmatic focus call triggered by the touch interaction.
     * @param focusEventTarget The target of the focus event under examination.
     */
    _shouldBeAttributedToTouch(focusEventTarget) {
      // Please note that this check is not perfect. Consider the following edge case:
      //
      // <div #parent tabindex="0">
      //   <div #child tabindex="0" (click)="#parent.focus()"></div>
      // </div>
      //
      // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
      // #child, #parent is programmatically focused. This code will attribute the focus to touch
      // instead of program. This is a relatively minor edge-case that can be worked around by using
      // focusVia(parent, 'program') to focus #parent.
      return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    _setClasses(element, origin) {
      element.classList.toggle('cdk-focused', !!origin);
      element.classList.toggle('cdk-touch-focused', origin === 'touch');
      element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
      element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
      element.classList.toggle('cdk-program-focused', origin === 'program');
    }
    /**
     * Updates the focus origin. If we're using immediate detection mode, we schedule an async
     * function to clear the origin at the end of a timeout. The duration of the timeout depends on
     * the origin being set.
     * @param origin The origin to set.
     * @param isFromInteraction Whether we are setting the origin from an interaction event.
     */
    _setOrigin(origin, isFromInteraction = false) {
      this._ngZone.runOutsideAngular(() => {
        this._origin = origin;
        this._originFromTouchInteraction = origin === 'touch' && isFromInteraction;
        // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
        // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
        // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
        // a touch event because when a touch event is fired, the associated focus event isn't yet in
        // the event queue. Before doing so, clear any pending timeouts.
        if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
          clearTimeout(this._originTimeoutId);
          const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
          this._originTimeoutId = setTimeout(() => this._origin = null, ms);
        }
      });
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    _onFocus(event, element) {
      // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
      // focus event affecting the monitored element. If we want to use the origin of the first event
      // instead we should check for the cdk-focused class here and return if the element already has
      // it. (This only matters for elements that have includesChildren = true).
      // If we are not counting child-element-focus as focused, make sure that the event target is the
      // monitored element itself.
      const elementInfo = this._elementInfo.get(element);
      const focusEventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
      if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
        return;
      }
      this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event, element) {
      // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
      // order to focus another child of the monitored element.
      const elementInfo = this._elementInfo.get(element);
      if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
        return;
      }
      this._setClasses(element);
      this._emitOrigin(elementInfo, null);
    }
    _emitOrigin(info, origin) {
      if (info.subject.observers.length) {
        this._ngZone.run(() => info.subject.next(origin));
      }
    }
    _registerGlobalListeners(elementInfo) {
      if (!this._platform.isBrowser) {
        return;
      }
      const rootNode = elementInfo.rootNode;
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
      if (!rootNodeFocusListeners) {
        this._ngZone.runOutsideAngular(() => {
          rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        });
      }
      this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
      // Register global listeners when first element is monitored.
      if (++this._monitoredElementCount === 1) {
        // Note: we listen to events in the capture phase so we
        // can detect them even if the user stops propagation.
        this._ngZone.runOutsideAngular(() => {
          const window = this._getWindow();
          window.addEventListener('focus', this._windowFocusListener);
        });
        // The InputModalityDetector is also just a collection of global listeners.
        this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
          this._setOrigin(modality, true /* isFromInteraction */);
        });
      }
    }
    _removeGlobalListeners(elementInfo) {
      const rootNode = elementInfo.rootNode;
      if (this._rootNodeFocusListenerCount.has(rootNode)) {
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
        if (rootNodeFocusListeners > 1) {
          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
        } else {
          rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          this._rootNodeFocusListenerCount.delete(rootNode);
        }
      }
      // Unregister global listeners when last element is unmonitored.
      if (! --this._monitoredElementCount) {
        const window = this._getWindow();
        window.removeEventListener('focus', this._windowFocusListener);
        // Equivalently, stop our InputModalityDetector subscription.
        this._stopInputModalityDetector.next();
        // Clear timeouts for all potentially pending timeouts to prevent the leaks.
        clearTimeout(this._windowFocusTimeoutId);
        clearTimeout(this._originTimeoutId);
      }
    }
    /** Updates all the state on an element once its focus origin has changed. */
    _originChanged(element, origin, elementInfo) {
      this._setClasses(element, origin);
      this._emitOrigin(elementInfo, origin);
      this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */
    _getClosestElementsInfo(element) {
      const results = [];
      this._elementInfo.forEach((info, currentElement) => {
        if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
          results.push([currentElement, info]);
        }
      });
      return results;
    }
    /**
     * Returns whether an interaction is likely to have come from the user clicking the `label` of
     * an `input` or `textarea` in order to focus it.
     * @param focusEventTarget Target currently receiving focus.
     */
    _isLastInteractionFromInputLabel(focusEventTarget) {
      const {
        _mostRecentTarget: mostRecentTarget,
        mostRecentModality
      } = this._inputModalityDetector;
      // If the last interaction used the mouse on an element contained by one of the labels
      // of an `input`/`textarea` that is currently focused, it is very likely that the
      // user redirected focus using the label.
      if (mostRecentModality !== 'mouse' || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== 'INPUT' && focusEventTarget.nodeName !== 'TEXTAREA' || focusEventTarget.disabled) {
        return false;
      }
      const labels = focusEventTarget.labels;
      if (labels) {
        for (let i = 0; i < labels.length; i++) {
          if (labels[i].contains(mostRecentTarget)) {
            return true;
          }
        }
      }
      return false;
    }
    static {
      this.ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FocusMonitor,
        factory: FocusMonitor.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return FocusMonitor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
let CdkMonitorFocus = /*#__PURE__*/(() => {
  class CdkMonitorFocus {
    constructor(_elementRef, _focusMonitor) {
      this._elementRef = _elementRef;
      this._focusMonitor = _focusMonitor;
      this._focusOrigin = null;
      this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get focusOrigin() {
      return this._focusOrigin;
    }
    ngAfterViewInit() {
      const element = this._elementRef.nativeElement;
      this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => {
        this._focusOrigin = origin;
        this.cdkFocusChange.emit(origin);
      });
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
      if (this._monitorSubscription) {
        this._monitorSubscription.unsubscribe();
      }
    }
    static {
      this.ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusMonitor));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkMonitorFocus,
        selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
        outputs: {
          cdkFocusChange: "cdkFocusChange"
        },
        exportAs: ["cdkMonitorFocus"],
        standalone: true
      });
    }
  }
  return CdkMonitorFocus;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Set of possible high-contrast mode backgrounds. */
var HighContrastMode = /*#__PURE__*/function (HighContrastMode) {
  HighContrastMode[HighContrastMode["NONE"] = 0] = "NONE";
  HighContrastMode[HighContrastMode["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode[HighContrastMode["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
  return HighContrastMode;
}(HighContrastMode || {});
/** CSS class applied to the document body when in black-on-white high-contrast mode. */
const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */
const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
let HighContrastModeDetector = /*#__PURE__*/(() => {
  class HighContrastModeDetector {
    constructor(_platform, document) {
      this._platform = _platform;
      this._document = document;
      this._breakpointSubscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.BreakpointObserver).observe('(forced-colors: active)').subscribe(() => {
        if (this._hasCheckedHighContrastMode) {
          this._hasCheckedHighContrastMode = false;
          this._applyBodyHighContrastModeCssClasses();
        }
      });
    }
    /** Gets the current high-contrast-mode for the page. */
    getHighContrastMode() {
      if (!this._platform.isBrowser) {
        return HighContrastMode.NONE;
      }
      // Create a test element with an arbitrary background-color that is neither black nor
      // white; high-contrast mode will coerce the color to either black or white. Also ensure that
      // appending the test element to the DOM does not affect layout by absolutely positioning it
      const testElement = this._document.createElement('div');
      testElement.style.backgroundColor = 'rgb(1,2,3)';
      testElement.style.position = 'absolute';
      this._document.body.appendChild(testElement);
      // Get the computed style for the background color, collapsing spaces to normalize between
      // browsers. Once we get this color, we no longer need the test element. Access the `window`
      // via the document so we can fake it in tests. Note that we have extra null checks, because
      // this logic will likely run during app bootstrap and throwing can break the entire app.
      const documentWindow = this._document.defaultView || window;
      const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
      const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
      testElement.remove();
      switch (computedColor) {
        // Pre Windows 11 dark theme.
        case 'rgb(0,0,0)':
        // Windows 11 dark themes.
        case 'rgb(45,50,54)':
        case 'rgb(32,32,32)':
          return HighContrastMode.WHITE_ON_BLACK;
        // Pre Windows 11 light theme.
        case 'rgb(255,255,255)':
        // Windows 11 light theme.
        case 'rgb(255,250,239)':
          return HighContrastMode.BLACK_ON_WHITE;
      }
      return HighContrastMode.NONE;
    }
    ngOnDestroy() {
      this._breakpointSubscription.unsubscribe();
    }
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
    _applyBodyHighContrastModeCssClasses() {
      if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        const bodyClasses = this._document.body.classList;
        bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
        this._hasCheckedHighContrastMode = true;
        const mode = this.getHighContrastMode();
        if (mode === HighContrastMode.BLACK_ON_WHITE) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
        } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
        }
      }
    }
    static {
      this.ɵfac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HighContrastModeDetector,
        factory: HighContrastModeDetector.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return HighContrastModeDetector;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let A11yModule = /*#__PURE__*/(() => {
  class A11yModule {
    constructor(highContrastModeDetector) {
      highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }
    static {
      this.ɵfac = function A11yModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HighContrastModeDetector));
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: A11yModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__.ObserversModule]
      });
    }
  }
  return A11yModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=a11y.mjs.map

/***/ }),

/***/ 3126:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/bidi.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiModule: () => (/* binding */ BidiModule),
/* harmony export */   DIR_DOCUMENT: () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   Dir: () => (/* binding */ Dir),
/* harmony export */   Directionality: () => (/* binding */ Directionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6610);




/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-browser because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */
const DIR_DOCUMENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/** @docs-private */
function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
}

/** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */
const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/** Resolves a string value to a specific direction. */
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || '';
  if (value === 'auto' && typeof navigator !== 'undefined' && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }
  return value === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
let Directionality = /*#__PURE__*/(() => {
  class Directionality {
    constructor(_document) {
      /** The current 'ltr' or 'rtl' value. */
      this.value = 'ltr';
      /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (_document) {
        const bodyDir = _document.body ? _document.body.dir : null;
        const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
        this.value = _resolveDirectionality(bodyDir || htmlDir || 'ltr');
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static {
      this.ɵfac = function Directionality_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Directionality,
        factory: Directionality.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return Directionality;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
let Dir = /*#__PURE__*/(() => {
  class Dir {
    constructor() {
      /** Normalized direction that accounts for invalid/unsupported values. */
      this._dir = 'ltr';
      /** Whether the `value` has been set to its initial value. */
      this._isInitialized = false;
      /** Event emitted when the direction changes. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /** @docs-private */
    get dir() {
      return this._dir;
    }
    set dir(value) {
      const previousValue = this._dir;
      // Note: `_resolveDirectionality` resolves the language based on the browser's language,
      // whereas the browser does it based on the content of the element. Since doing so based
      // on the content can be expensive, for now we're doing the simpler matching.
      this._dir = _resolveDirectionality(value);
      this._rawDir = value;
      if (previousValue !== this._dir && this._isInitialized) {
        this.change.emit(this._dir);
      }
    }
    /** Current layout direction of the element. */
    get value() {
      return this.dir;
    }
    /** Initialize once default value has been set. */
    ngAfterContentInit() {
      this._isInitialized = true;
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static {
      this.ɵfac = function Dir_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || Dir)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: Dir,
        selectors: [["", "dir", ""]],
        hostVars: 1,
        hostBindings: function Dir_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
          }
        },
        inputs: {
          dir: "dir"
        },
        outputs: {
          change: "dirChange"
        },
        exportAs: ["dir"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: Directionality,
          useExisting: Dir
        }])]
      });
    }
  }
  return Dir;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BidiModule = /*#__PURE__*/(() => {
  class BidiModule {
    static {
      this.ɵfac = function BidiModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BidiModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BidiModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return BidiModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=bidi.mjs.map

/***/ }),

/***/ 9876:
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/cdk.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);


/** Current version of the Angular Component Development Kit. */
const VERSION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('18.2.13');

//# sourceMappingURL=cdk.mjs.map

/***/ }),

/***/ 1432:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isNumberValue: () => (/* binding */ _isNumberValue),
/* harmony export */   coerceArray: () => (/* binding */ coerceArray),
/* harmony export */   coerceBooleanProperty: () => (/* binding */ coerceBooleanProperty),
/* harmony export */   coerceCssPixelValue: () => (/* binding */ coerceCssPixelValue),
/* harmony export */   coerceElement: () => (/* binding */ coerceElement),
/* harmony export */   coerceNumberProperty: () => (/* binding */ coerceNumberProperty),
/* harmony export */   coerceStringArray: () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);


/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
  const result = [];
  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();
      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }
  return result;
}

//# sourceMappingURL=coercion.mjs.map

/***/ }),

/***/ 8344:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion/private.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceObservable: () => (/* binding */ coerceObservable)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2319);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 756);


/**
 * Given either an Observable or non-Observable value, returns either the original
 * Observable, or wraps it in an Observable that emits the non-Observable value.
 */
function coerceObservable(data) {
  if (!(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(data)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data);
  }
  return data;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=private.mjs.map

/***/ }),

/***/ 6809:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   ALT: () => (/* binding */ ALT),
/* harmony export */   APOSTROPHE: () => (/* binding */ APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* binding */ AT_SIGN),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   BACKSLASH: () => (/* binding */ BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* binding */ BACKSPACE),
/* harmony export */   C: () => (/* binding */ C),
/* harmony export */   CAPS_LOCK: () => (/* binding */ CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* binding */ COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* binding */ CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* binding */ CONTROL),
/* harmony export */   D: () => (/* binding */ D),
/* harmony export */   DASH: () => (/* binding */ DASH),
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   DOWN_ARROW: () => (/* binding */ DOWN_ARROW),
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   EIGHT: () => (/* binding */ EIGHT),
/* harmony export */   END: () => (/* binding */ END),
/* harmony export */   ENTER: () => (/* binding */ ENTER),
/* harmony export */   EQUALS: () => (/* binding */ EQUALS),
/* harmony export */   ESCAPE: () => (/* binding */ ESCAPE),
/* harmony export */   F: () => (/* binding */ F),
/* harmony export */   F1: () => (/* binding */ F1),
/* harmony export */   F10: () => (/* binding */ F10),
/* harmony export */   F11: () => (/* binding */ F11),
/* harmony export */   F12: () => (/* binding */ F12),
/* harmony export */   F2: () => (/* binding */ F2),
/* harmony export */   F3: () => (/* binding */ F3),
/* harmony export */   F4: () => (/* binding */ F4),
/* harmony export */   F5: () => (/* binding */ F5),
/* harmony export */   F6: () => (/* binding */ F6),
/* harmony export */   F7: () => (/* binding */ F7),
/* harmony export */   F8: () => (/* binding */ F8),
/* harmony export */   F9: () => (/* binding */ F9),
/* harmony export */   FF_EQUALS: () => (/* binding */ FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* binding */ FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* binding */ FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* binding */ FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* binding */ FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* binding */ FIVE),
/* harmony export */   FOUR: () => (/* binding */ FOUR),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   HOME: () => (/* binding */ HOME),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   INSERT: () => (/* binding */ INSERT),
/* harmony export */   J: () => (/* binding */ J),
/* harmony export */   K: () => (/* binding */ K),
/* harmony export */   L: () => (/* binding */ L),
/* harmony export */   LAST_MEDIA: () => (/* binding */ LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* binding */ LEFT_ARROW),
/* harmony export */   M: () => (/* binding */ M),
/* harmony export */   MAC_ENTER: () => (/* binding */ MAC_ENTER),
/* harmony export */   MAC_META: () => (/* binding */ MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* binding */ META),
/* harmony export */   MUTE: () => (/* binding */ MUTE),
/* harmony export */   N: () => (/* binding */ N),
/* harmony export */   NINE: () => (/* binding */ NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* binding */ NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* binding */ NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* binding */ NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* binding */ NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* binding */ NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* binding */ NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* binding */ NUM_LOCK),
/* harmony export */   O: () => (/* binding */ O),
/* harmony export */   ONE: () => (/* binding */ ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   PAGE_DOWN: () => (/* binding */ PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* binding */ PAGE_UP),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   PERIOD: () => (/* binding */ PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* binding */ PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* binding */ PRINT_SCREEN),
/* harmony export */   Q: () => (/* binding */ Q),
/* harmony export */   QUESTION_MARK: () => (/* binding */ QUESTION_MARK),
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   RIGHT_ARROW: () => (/* binding */ RIGHT_ARROW),
/* harmony export */   S: () => (/* binding */ S),
/* harmony export */   SCROLL_LOCK: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* binding */ SEMICOLON),
/* harmony export */   SEVEN: () => (/* binding */ SEVEN),
/* harmony export */   SHIFT: () => (/* binding */ SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* binding */ SIX),
/* harmony export */   SLASH: () => (/* binding */ SLASH),
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   T: () => (/* binding */ T),
/* harmony export */   TAB: () => (/* binding */ TAB),
/* harmony export */   THREE: () => (/* binding */ THREE),
/* harmony export */   TILDE: () => (/* binding */ TILDE),
/* harmony export */   TWO: () => (/* binding */ TWO),
/* harmony export */   U: () => (/* binding */ U),
/* harmony export */   UP_ARROW: () => (/* binding */ UP_ARROW),
/* harmony export */   V: () => (/* binding */ V),
/* harmony export */   VOLUME_DOWN: () => (/* binding */ VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* binding */ VOLUME_UP),
/* harmony export */   W: () => (/* binding */ W),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   Y: () => (/* binding */ Y),
/* harmony export */   Z: () => (/* binding */ Z),
/* harmony export */   ZERO: () => (/* binding */ ZERO),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;

/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=keycodes.mjs.map

/***/ }),

/***/ 814:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/layout.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointObserver: () => (/* binding */ BreakpointObserver),
/* harmony export */   Breakpoints: () => (/* binding */ Breakpoints),
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule),
/* harmony export */   MediaMatcher: () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 199);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6753);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9406);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8887);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 965);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6340);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);






let LayoutModule = /*#__PURE__*/(() => {
  class LayoutModule {
    static {
      this.ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LayoutModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LayoutModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return LayoutModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = /*#__PURE__*/new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
let MediaMatcher = /*#__PURE__*/(() => {
  class MediaMatcher {
    constructor(_platform, _nonce) {
      this._platform = _platform;
      this._nonce = _nonce;
      this._matchMedia = this._platform.isBrowser && window.matchMedia ?
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window) : noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    matchMedia(query) {
      if (this._platform.WEBKIT || this._platform.BLINK) {
        createEmptyStyleRule(query, this._nonce);
      }
      return this._matchMedia(query);
    }
    static {
      this.ɵfac = function MediaMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MediaMatcher,
        factory: MediaMatcher.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MediaMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Creates an empty stylesheet that is used to work around browser inconsistencies related to
 * `matchMedia`. At the time of writing, it handles the following cases:
 * 1. On WebKit browsers, a media query has to have at least one rule in order for `matchMedia`
 * to fire. We work around it by declaring a dummy stylesheet with a `@media` declaration.
 * 2. In some cases Blink browsers will stop firing the `matchMedia` listener if none of the rules
 * inside the `@media` match existing elements on the page. We work around it by having one rule
 * targeting the `body`. See https://github.com/angular/components/issues/23546.
 */
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      if (nonce) {
        mediaQueryStyleNode.setAttribute('nonce', nonce);
      }
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}

/** Utility for checking the matching state of @media queries. */
let BreakpointObserver = /*#__PURE__*/(() => {
  class BreakpointObserver {
    constructor(_mediaMatcher, _zone) {
      this._mediaMatcher = _mediaMatcher;
      this._zone = _zone;
      /**  A map of all media queries currently being listened for. */
      this._queries = new Map();
      /** A subject for all other observables to takeUntil based on. */
      this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy() {
      this._destroySubject.next();
      this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value) {
      const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
      return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value) {
      const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
      const observables = queries.map(query => this._registerQuery(query).observable);
      let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables);
      // Emit the first state immediately, and then debounce the subsequent emissions.
      stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
      return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breakpointStates => {
        const response = {
          matches: false,
          breakpoints: {}
        };
        breakpointStates.forEach(({
          matches,
          query
        }) => {
          response.matches = response.matches || matches;
          response.breakpoints[query] = matches;
        });
        return response;
      }));
    }
    /** Registers a specific query to be listened for. */
    _registerQuery(query) {
      // Only set up a new MediaQueryList if it is not already being listened for.
      if (this._queries.has(query)) {
        return this._queries.get(query);
      }
      const mql = this._mediaMatcher.matchMedia(query);
      // Create callback for match changes and add it is as a listener.
      const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(observer => {
        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
        // back into the zone because matchMedia is only included in Zone.js by loading the
        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
        // patches it.
        const handler = e => this._zone.run(() => observer.next(e));
        mql.addListener(handler);
        return () => {
          mql.removeListener(handler);
        };
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
        matches
      }) => ({
        query,
        matches
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject));
      // Add the MediaQueryList to the set of queries.
      const output = {
        observable: queryObservable,
        mql
      };
      this._queries.set(query, output);
      return output;
    }
    static {
      this.ɵfac = function BreakpointObserver_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BreakpointObserver,
        factory: BreakpointObserver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return BreakpointObserver;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}

// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
  XSmall: '(max-width: 599.98px)',
  Small: '(min-width: 600px) and (max-width: 959.98px)',
  Medium: '(min-width: 960px) and (max-width: 1279.98px)',
  Large: '(min-width: 1280px) and (max-width: 1919.98px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=layout.mjs.map

/***/ }),

/***/ 3957:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkObserveContent: () => (/* binding */ CdkObserveContent),
/* harmony export */   ContentObserver: () => (/* binding */ ContentObserver),
/* harmony export */   MutationObserverFactory: () => (/* binding */ MutationObserverFactory),
/* harmony export */   ObserversModule: () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8887);






// Angular may add, remove, or edit comment nodes during change detection. We don't care about
// these changes because they don't affect the user-preceived content, and worse it can cause
// infinite change detection cycles where the change detection updates a comment, triggering the
// MutationObserver, triggering another change detection and kicking the cycle off again.
function shouldIgnoreRecord(record) {
  // Ignore changes to comment text.
  if (record.type === 'characterData' && record.target instanceof Comment) {
    return true;
  }
  // Ignore addition / removal of comments.
  if (record.type === 'childList') {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  // Observe everything else.
  return false;
}
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
let MutationObserverFactory = /*#__PURE__*/(() => {
  class MutationObserverFactory {
    create(callback) {
      return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
    static {
      this.ɵfac = function MutationObserverFactory_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MutationObserverFactory)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MutationObserverFactory,
        factory: MutationObserverFactory.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MutationObserverFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** An injectable service that allows watching elements for changes to their content. */
let ContentObserver = /*#__PURE__*/(() => {
  class ContentObserver {
    constructor(_mutationObserverFactory) {
      this._mutationObserverFactory = _mutationObserverFactory;
      /** Keeps track of the existing MutationObservers so they can be reused. */
      this._observedElements = new Map();
      this._ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    }
    ngOnDestroy() {
      this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(elementOrRef) {
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        const stream = this._observeElement(element);
        const subscription = stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(records => records.filter(record => !shouldIgnoreRecord(record))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(records => !!records.length)).subscribe(records => {
          this._ngZone.run(() => {
            observer.next(records);
          });
        });
        return () => {
          subscription.unsubscribe();
          this._unobserveElement(element);
        };
      });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    _observeElement(element) {
      return this._ngZone.runOutsideAngular(() => {
        if (!this._observedElements.has(element)) {
          const stream = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));
          if (observer) {
            observer.observe(element, {
              characterData: true,
              childList: true,
              subtree: true
            });
          }
          this._observedElements.set(element, {
            observer,
            stream,
            count: 1
          });
        } else {
          this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
      });
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;
        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
    /** Clean up the underlying MutationObserver for the specified element. */
    _cleanupObserver(element) {
      if (this._observedElements.has(element)) {
        const {
          observer,
          stream
        } = this._observedElements.get(element);
        if (observer) {
          observer.disconnect();
        }
        stream.complete();
        this._observedElements.delete(element);
      }
    }
    static {
      this.ɵfac = function ContentObserver_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContentObserver,
        factory: ContentObserver.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ContentObserver;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
let CdkObserveContent = /*#__PURE__*/(() => {
  class CdkObserveContent {
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /** Debounce interval for emitting the changes. */
    get debounce() {
      return this._debounce;
    }
    set debounce(value) {
      this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);
      this._subscribe();
    }
    constructor(_contentObserver, _elementRef) {
      this._contentObserver = _contentObserver;
      this._elementRef = _elementRef;
      /** Event emitted for each change in the element's content. */
      this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._disabled = false;
      this._currentSubscription = null;
    }
    ngAfterContentInit() {
      if (!this._currentSubscription && !this.disabled) {
        this._subscribe();
      }
    }
    ngOnDestroy() {
      this._unsubscribe();
    }
    _subscribe() {
      this._unsubscribe();
      const stream = this._contentObserver.observe(this._elementRef);
      this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
    }
    _unsubscribe() {
      this._currentSubscription?.unsubscribe();
    }
    static {
      this.ɵfac = function CdkObserveContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkObserveContent,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
          disabled: [2, "cdkObserveContentDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          debounce: "debounce"
        },
        outputs: {
          event: "cdkObserveContent"
        },
        exportAs: ["cdkObserveContent"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
      });
    }
  }
  return CdkObserveContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ObserversModule = /*#__PURE__*/(() => {
  class ObserversModule {
    static {
      this.ɵfac = function ObserversModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ObserversModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ObserversModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MutationObserverFactory]
      });
    }
  }
  return ObserversModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=observers.mjs.map

/***/ }),

/***/ 1857:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/platform.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* binding */ Platform),
/* harmony export */   PlatformModule: () => (/* binding */ PlatformModule),
/* harmony export */   RtlScrollAxisType: () => (/* binding */ RtlScrollAxisType),
/* harmony export */   _getEventTarget: () => (/* binding */ _getEventTarget),
/* harmony export */   _getFocusedElementPierceShadowDom: () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   _getShadowRoot: () => (/* binding */ _getShadowRoot),
/* harmony export */   _isTestEnvironment: () => (/* binding */ _isTestEnvironment),
/* harmony export */   _supportsShadowDom: () => (/* binding */ _supportsShadowDom),
/* harmony export */   getRtlScrollAxisType: () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   getSupportedInputTypes: () => (/* binding */ getSupportedInputTypes),
/* harmony export */   normalizePassiveListenerOptions: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* binding */ supportsPassiveEventListeners),
/* harmony export */   supportsScrollBehavior: () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6610);




// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
let Platform = /*#__PURE__*/(() => {
  class Platform {
    constructor(_platformId) {
      this._platformId = _platformId;
      // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention
      /** Whether the Angular application is being rendered in the browser. */
      this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
      /** Whether the current browser is Microsoft Edge. */
      this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /** Whether the current rendering engine is Microsoft Trident. */
      this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
      /** Whether the current rendering engine is Blink. */
      this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
      // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.
      /** Whether the current rendering engine is WebKit. */
      this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /** Whether the current platform is Apple iOS. */
      this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
      // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.
      /** Whether the current browser is Firefox. */
      this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /** Whether the current platform is Android. */
      // Trident on mobile adds the android platform to the userAgent to trick detections.
      this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.
      /** Whether the current browser is Safari. */
      this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    static {
      this.ɵfac = function Platform_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Platform,
        factory: Platform.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return Platform;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PlatformModule = /*#__PURE__*/(() => {
  class PlatformModule {
    static {
      this.ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PlatformModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PlatformModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
    }
  }
  return PlatformModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Cached result Set of input types support by the current browser. */
let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
const candidateInputTypes = [
// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.
  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}

/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}

/** The possible ways the browser may handle the horizontal scroll axis in RTL languages. */
var RtlScrollAxisType = /*#__PURE__*/function (RtlScrollAxisType) {
  /**
   * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
  /**
   * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
  /**
   * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
  return RtlScrollAxisType;
}(RtlScrollAxisType || {});
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */
let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported. Also check for `Element`, because
    // some projects stub out the global `document` during SSR which can throw us off.
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    // If the element can have a `scrollBehavior` style, we can be sure that it's supported.
    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.
    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
/**
 * Gets the currently-focused element on the page while
 * also piercing through Shadow DOM boundaries.
 */
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
/** Gets the target of an event while accounting for Shadow DOM. */
function _getEventTarget(event) {
  // If an event is bound outside the Shadow DOM, the `event.target` will
  // point to the shadow root so we have to use `composedPath` instead.
  return event.composedPath ? event.composedPath()[0] : event.target;
}

/** Gets whether the code is currently running in a test environment. */
function _isTestEnvironment() {
  // We can't use `declare const` because it causes conflicts inside Google with the real typings
  // for these symbols and we can't read them off the global object, because they don't appear to
  // be attached there for some runners like Jest.
  // (see: https://github.com/angular/components/issues/23365#issuecomment-938146643)
  return (
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha
  );
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=platform.mjs.map

/***/ }),

/***/ 3788:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/core.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationCurves: () => (/* binding */ AnimationCurves),
/* harmony export */   AnimationDurations: () => (/* binding */ AnimationDurations),
/* harmony export */   DateAdapter: () => (/* binding */ DateAdapter),
/* harmony export */   ErrorStateMatcher: () => (/* binding */ ErrorStateMatcher),
/* harmony export */   MATERIAL_SANITY_CHECKS: () => (/* binding */ MATERIAL_SANITY_CHECKS),
/* harmony export */   MAT_DATE_FORMATS: () => (/* binding */ MAT_DATE_FORMATS),
/* harmony export */   MAT_DATE_LOCALE: () => (/* binding */ MAT_DATE_LOCALE),
/* harmony export */   MAT_DATE_LOCALE_FACTORY: () => (/* binding */ MAT_DATE_LOCALE_FACTORY),
/* harmony export */   MAT_NATIVE_DATE_FORMATS: () => (/* binding */ MAT_NATIVE_DATE_FORMATS),
/* harmony export */   MAT_OPTGROUP: () => (/* binding */ MAT_OPTGROUP),
/* harmony export */   MAT_OPTION_PARENT_COMPONENT: () => (/* binding */ MAT_OPTION_PARENT_COMPONENT),
/* harmony export */   MAT_RIPPLE_GLOBAL_OPTIONS: () => (/* binding */ MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   MatCommonModule: () => (/* binding */ MatCommonModule),
/* harmony export */   MatLine: () => (/* binding */ MatLine),
/* harmony export */   MatLineModule: () => (/* binding */ MatLineModule),
/* harmony export */   MatNativeDateModule: () => (/* binding */ MatNativeDateModule),
/* harmony export */   MatOptgroup: () => (/* binding */ MatOptgroup),
/* harmony export */   MatOption: () => (/* binding */ MatOption),
/* harmony export */   MatOptionModule: () => (/* binding */ MatOptionModule),
/* harmony export */   MatOptionSelectionChange: () => (/* binding */ MatOptionSelectionChange),
/* harmony export */   MatPseudoCheckbox: () => (/* binding */ MatPseudoCheckbox),
/* harmony export */   MatPseudoCheckboxModule: () => (/* binding */ MatPseudoCheckboxModule),
/* harmony export */   MatRipple: () => (/* binding */ MatRipple),
/* harmony export */   MatRippleLoader: () => (/* binding */ MatRippleLoader),
/* harmony export */   MatRippleModule: () => (/* binding */ MatRippleModule),
/* harmony export */   NativeDateAdapter: () => (/* binding */ NativeDateAdapter),
/* harmony export */   NativeDateModule: () => (/* binding */ NativeDateModule),
/* harmony export */   RippleRef: () => (/* binding */ RippleRef),
/* harmony export */   RippleRenderer: () => (/* binding */ RippleRenderer),
/* harmony export */   RippleState: () => (/* binding */ RippleState),
/* harmony export */   ShowOnDirtyErrorStateMatcher: () => (/* binding */ ShowOnDirtyErrorStateMatcher),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   _ErrorStateTracker: () => (/* binding */ _ErrorStateTracker),
/* harmony export */   _MatInternalFormField: () => (/* binding */ _MatInternalFormField),
/* harmony export */   _countGroupLabelsBeforeOption: () => (/* binding */ _countGroupLabelsBeforeOption),
/* harmony export */   _getOptionScrollPosition: () => (/* binding */ _getOptionScrollPosition),
/* harmony export */   defaultRippleAnimationConfig: () => (/* binding */ defaultRippleAnimationConfig),
/* harmony export */   mixinColor: () => (/* binding */ mixinColor),
/* harmony export */   mixinDisableRipple: () => (/* binding */ mixinDisableRipple),
/* harmony export */   mixinDisabled: () => (/* binding */ mixinDisabled),
/* harmony export */   mixinErrorState: () => (/* binding */ mixinErrorState),
/* harmony export */   mixinInitialized: () => (/* binding */ mixinInitialized),
/* harmony export */   mixinTabIndex: () => (/* binding */ mixinTabIndex),
/* harmony export */   provideNativeDateAdapter: () => (/* binding */ provideNativeDateAdapter),
/* harmony export */   setLines: () => (/* binding */ setLines)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2978);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 1992);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 3126);
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk */ 9876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6610);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 1857);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 1432);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 907);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 965);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6809);














/** Current version of Angular Material. */
const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];
const _c2 = ["text"];
const _c3 = [[["mat-icon"]], "*"];
const _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r0.group.label, ")");
  }
}
const _c5 = ["mat-internal-form-field", ""];
const _c6 = ["*"];
const VERSION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('18.2.13');

/** @docs-private */
let AnimationCurves = /*#__PURE__*/(() => {
  class AnimationCurves {
    static {
      this.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    }
    static {
      this.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    }
    static {
      this.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    }
    static {
      this.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
    }
  }
  return AnimationCurves;
})();
/** @docs-private */
let AnimationDurations = /*#__PURE__*/(() => {
  class AnimationDurations {
    static {
      this.COMPLEX = '375ms';
    }
    static {
      this.ENTERING = '225ms';
    }
    static {
      this.EXITING = '195ms';
    }
  }
  return AnimationDurations;
})();
/** @docs-private */
function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
/** Injection token that configures whether the Material sanity checks are enabled. */
const MATERIAL_SANITY_CHECKS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-sanity-checks', {
  providedIn: 'root',
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
let MatCommonModule = /*#__PURE__*/(() => {
  class MatCommonModule {
    constructor(highContrastModeDetector, _sanityChecks, _document) {
      this._sanityChecks = _sanityChecks;
      this._document = _document;
      /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
      this._hasDoneGlobalChecks = false;
      // While A11yModule also does this, we repeat it here to avoid importing A11yModule
      // in MatCommonModule.
      highContrastModeDetector._applyBodyHighContrastModeCssClasses();
      if (!this._hasDoneGlobalChecks) {
        this._hasDoneGlobalChecks = true;
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          // Inject in here so the reference to `Platform` can be removed in production mode.
          const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform, {
            optional: true
          });
          if (this._checkIsEnabled('doctype')) {
            _checkDoctypeIsDefined(this._document);
          }
          if (this._checkIsEnabled('theme')) {
            _checkThemeIsPresent(this._document, !!platform?.isBrowser);
          }
          if (this._checkIsEnabled('version')) {
            _checkCdkVersionMatch();
          }
        }
      }
    }
    /** Gets whether a specific sanity check is enabled. */
    _checkIsEnabled(name) {
      if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._isTestEnvironment)()) {
        return false;
      }
      if (typeof this._sanityChecks === 'boolean') {
        return this._sanityChecks;
      }
      return !!this._sanityChecks[name];
    }
    static {
      this.ɵfac = function MatCommonModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCommonModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
      });
    }
  }
  return MatCommonModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Checks that the page has a doctype. */
function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
  }
}
/** Checks that a theme has been included. */
function _checkThemeIsPresent(doc, isBrowser) {
  // We need to assert that the `body` is defined, because these checks run very early
  // and the `body` won't be defined if the consumer put their scripts in the `head`.
  if (!doc.body || !isBrowser) {
    return;
  }
  const testElement = doc.createElement('div');
  testElement.classList.add('mat-theme-loaded-marker');
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement);
  // In some situations the computed style of the test element can be null. For example in
  // Firefox, the computed style is null if an application is running inside of a hidden iframe.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  if (computedStyle && computedStyle.display !== 'none') {
    console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
  }
  testElement.remove();
}
/** Checks whether the Material version matches the CDK version. */
function _checkCdkVersionMatch() {
  if (VERSION.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_5__.VERSION.full) {
    console.warn('The Angular Material version (' + VERSION.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_5__.VERSION.full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
  }
}
function mixinDisabled(base) {
  return class extends base {
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    }
    constructor(...args) {
      super(...args);
      this._disabled = false;
    }
  };
}
function mixinColor(base, defaultColor) {
  return class extends base {
    get color() {
      return this._color;
    }
    set color(value) {
      const colorPalette = value || this.defaultColor;
      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }
        this._color = colorPalette;
      }
    }
    constructor(...args) {
      super(...args);
      this.defaultColor = defaultColor;
      // Set the default color that can be specified from the mixin.
      this.color = defaultColor;
    }
  };
}
function mixinDisableRipple(base) {
  return class extends base {
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() {
      return this._disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    }
    constructor(...args) {
      super(...args);
      this._disableRipple = false;
    }
  };
}
function mixinTabIndex(base, defaultTabIndex = 0) {
  return class extends base {
    get tabIndex() {
      return this.disabled ? -1 : this._tabIndex;
    }
    set tabIndex(value) {
      // If the specified tabIndex value is null or undefined, fall back to the default value.
      this._tabIndex = value != null ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(value) : this.defaultTabIndex;
    }
    constructor(...args) {
      super(...args);
      this._tabIndex = defaultTabIndex;
      this.defaultTabIndex = defaultTabIndex;
    }
  };
}

/**
 * Class that tracks the error state of a component.
 * @docs-private
 */
class _ErrorStateTracker {
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
    /** Whether the tracker is currently in an error state. */
    this.errorState = false;
  }
  /** Updates the error state based on the provided error state matcher. */
  updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const matcher = this.matcher || this._defaultMatcher;
    const control = this.ngControl ? this.ngControl.control : null;
    const newState = matcher?.isErrorState(control, parent) ?? false;
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
}
function mixinErrorState(base) {
  return class extends base {
    /** Whether the component is in an error state. */
    get errorState() {
      return this._getTracker().errorState;
    }
    set errorState(value) {
      this._getTracker().errorState = value;
    }
    /** An object used to control the error state of the component. */
    get errorStateMatcher() {
      return this._getTracker().matcher;
    }
    set errorStateMatcher(value) {
      this._getTracker().matcher = value;
    }
    /** Updates the error state based on the provided error state matcher. */
    updateErrorState() {
      this._getTracker().updateErrorState();
    }
    _getTracker() {
      if (!this._tracker) {
        this._tracker = new _ErrorStateTracker(this._defaultErrorStateMatcher, this.ngControl, this._parentFormGroup, this._parentForm, this.stateChanges);
      }
      return this._tracker;
    }
    constructor(...args) {
      super(...args);
    }
  };
}

/**
 * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
 * @deprecated Track the initialized state manually.
 * @breaking-change 19.0.0
 */
function mixinInitialized(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      /** Whether this directive has been marked as initialized. */
      this._isInitialized = false;
      /**
       * List of subscribers that subscribed before the directive was initialized. Should be notified
       * during _markInitialized. Set to null after pending subscribers are notified, and should
       * not expect to be populated after.
       */
      this._pendingSubscribers = [];
      /**
       * Observable stream that emits when the directive initializes. If already initialized, the
       * subscriber is stored to be notified once _markInitialized is called.
       */
      this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(subscriber => {
        // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
        // when _markInitialized is called.
        if (this._isInitialized) {
          this._notifySubscriber(subscriber);
        } else {
          this._pendingSubscribers.push(subscriber);
        }
      });
    }
    /**
     * Marks the state as initialized and notifies pending subscribers. Should be called at the end
     * of ngOnInit.
     * @docs-private
     */
    _markInitialized() {
      if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
      }
      this._isInitialized = true;
      this._pendingSubscribers.forEach(this._notifySubscriber);
      this._pendingSubscribers = null;
    }
    /** Emits and completes the subscriber stream (should only emit once). */
    _notifySubscriber(subscriber) {
      subscriber.next();
      subscriber.complete();
    }
  };
}

/** InjectionToken for datepicker that can be used to override default locale code. */
const MAT_DATE_LOCALE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_LOCALE', {
  providedIn: 'root',
  factory: MAT_DATE_LOCALE_FACTORY
});
/** @docs-private */
function MAT_DATE_LOCALE_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */
class DateAdapter {
  constructor() {
    this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    /** A stream that emits when the locale changes. */
    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
}
const MAT_DATE_FORMATS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-date-formats');

/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings with an out of bounds month, date, etc.
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */
let NativeDateAdapter = /*#__PURE__*/(() => {
  class NativeDateAdapter extends DateAdapter {
    constructor(
    /**
     * @deprecated Now injected via inject(), param to be removed.
     * @breaking-change 18.0.0
     */
    matDateLocale) {
      super();
      /**
       * @deprecated No longer being used. To be removed.
       * @breaking-change 14.0.0
       */
      this.useUtcForDisplay = false;
      /** The injected locale. */
      this._matDateLocale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_DATE_LOCALE, {
        optional: true
      });
      if (matDateLocale !== undefined) {
        this._matDateLocale = matDateLocale;
      }
      super.setLocale(this._matDateLocale);
    }
    getYear(date) {
      return date.getFullYear();
    }
    getMonth(date) {
      return date.getMonth();
    }
    getDate(date) {
      return date.getDate();
    }
    getDayOfWeek(date) {
      return date.getDay();
    }
    getMonthNames(style) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        month: style,
        timeZone: 'utc'
      });
      return range(12, i => this._format(dtf, new Date(2017, i, 1)));
    }
    getDateNames() {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        day: 'numeric',
        timeZone: 'utc'
      });
      return range(31, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getDayOfWeekNames(style) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        weekday: style,
        timeZone: 'utc'
      });
      return range(7, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getYearName(date) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        year: 'numeric',
        timeZone: 'utc'
      });
      return this._format(dtf, date);
    }
    getFirstDayOfWeek() {
      // At the time of writing `Intl.Locale` isn't available
      // in the internal types so we need to cast to `any`.
      if (typeof Intl !== 'undefined' && Intl.Locale) {
        const locale = new Intl.Locale(this.locale);
        // Some browsers implement a `getWeekInfo` method while others have a `weekInfo` getter.
        // Note that this isn't supported in all browsers so we need to null check it.
        const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
        // `weekInfo.firstDay` is a number between 1 and 7 where, starting from Monday,
        // whereas our representation is 0 to 6 where 0 is Sunday so we need to normalize it.
        return firstDay === 7 ? 0 : firstDay;
      }
      // Default to Sunday if the browser doesn't provide the week information.
      return 0;
    }
    getNumDaysInMonth(date) {
      return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    clone(date) {
      return new Date(date.getTime());
    }
    createDate(year, month, date) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
          throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
          throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
      }
      let result = this._createDateWithOverflow(year, month, date);
      // Check that the date wasn't above the upper bound for the month, causing the month to overflow
      if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error(`Invalid date "${date}" for month with index "${month}".`);
      }
      return result;
    }
    today() {
      return new Date();
    }
    parse(value, parseFormat) {
      // We have no way using the native JS Date to set the parse format or locale, so we ignore these
      // parameters.
      if (typeof value == 'number') {
        return new Date(value);
      }
      return value ? new Date(Date.parse(value)) : null;
    }
    format(date, displayFormat) {
      if (!this.isValid(date)) {
        throw Error('NativeDateAdapter: Cannot format invalid date.');
      }
      const dtf = new Intl.DateTimeFormat(this.locale, {
        ...displayFormat,
        timeZone: 'utc'
      });
      return this._format(dtf, date);
    }
    addCalendarYears(date, years) {
      return this.addCalendarMonths(date, years * 12);
    }
    addCalendarMonths(date, months) {
      let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
      // It's possible to wind up in the wrong month if the original month has more days than the new
      // month. In this case we want to go to the last day of the desired month.
      // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
      // guarantee this.
      if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
        newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
      }
      return newDate;
    }
    addCalendarDays(date, days) {
      return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    toIso8601(date) {
      return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    deserialize(value) {
      if (typeof value === 'string') {
        if (!value) {
          return null;
        }
        // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
        // string is the right format first.
        if (ISO_8601_REGEX.test(value)) {
          let date = new Date(value);
          if (this.isValid(date)) {
            return date;
          }
        }
      }
      return super.deserialize(value);
    }
    isDateInstance(obj) {
      return obj instanceof Date;
    }
    isValid(date) {
      return !isNaN(date.getTime());
    }
    invalid() {
      return new Date(NaN);
    }
    /** Creates a date but allows the month and date to overflow. */
    _createDateWithOverflow(year, month, date) {
      // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
      // To work around this we use `setFullYear` and `setHours` instead.
      const d = new Date();
      d.setFullYear(year, month, date);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    _2digit(n) {
      return ('00' + n).slice(-2);
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param date Date from which we want to get the string representation according to dtf
     * @returns A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
      // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
      // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
      const d = new Date();
      d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
      return dtf.format(d);
    }
    static {
      this.ɵfac = function NativeDateAdapter_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NativeDateAdapter,
        factory: NativeDateAdapter.ɵfac
      });
    }
  }
  return NativeDateAdapter;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short'
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    }
  }
};
let NativeDateModule = /*#__PURE__*/(() => {
  class NativeDateModule {
    static {
      this.ɵfac = function NativeDateModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NativeDateModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NativeDateModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }]
      });
    }
  }
  return NativeDateModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatNativeDateModule = /*#__PURE__*/(() => {
  class MatNativeDateModule {
    static {
      this.ɵfac = function MatNativeDateModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatNativeDateModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatNativeDateModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [provideNativeDateAdapter()]
      });
    }
  }
  return MatNativeDateModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}

/** Error state matcher that matches when a control is invalid and dirty. */
let ShowOnDirtyErrorStateMatcher = /*#__PURE__*/(() => {
  class ShowOnDirtyErrorStateMatcher {
    isErrorState(control, form) {
      return !!(control && control.invalid && (control.dirty || form && form.submitted));
    }
    static {
      this.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ShowOnDirtyErrorStateMatcher)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowOnDirtyErrorStateMatcher,
        factory: ShowOnDirtyErrorStateMatcher.ɵfac
      });
    }
  }
  return ShowOnDirtyErrorStateMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Provider that defines how form controls behave with regards to displaying error messages. */
let ErrorStateMatcher = /*#__PURE__*/(() => {
  class ErrorStateMatcher {
    isErrorState(control, form) {
      return !!(control && control.invalid && (control.touched || form && form.submitted));
    }
    static {
      this.ɵfac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ErrorStateMatcher)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorStateMatcher,
        factory: ErrorStateMatcher.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ErrorStateMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
let MatLine = /*#__PURE__*/(() => {
  class MatLine {
    static {
      this.ɵfac = function MatLine_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatLine)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatLine,
        selectors: [["", "mat-line", ""], ["", "matLine", ""]],
        hostAttrs: [1, "mat-line"],
        standalone: true
      });
    }
  }
  return MatLine;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
function setLines(lines, element, prefix = 'mat') {
  // Note: doesn't need to unsubscribe, because `changes`
  // gets completed by Angular when the view is destroyed.
  lines.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
/** Adds or removes a class from an element. */
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
let MatLineModule = /*#__PURE__*/(() => {
  class MatLineModule {
    static {
      this.ɵfac = function MatLineModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatLineModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatLineModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [MatCommonModule, MatCommonModule]
      });
    }
  }
  return MatLineModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Possible states for a ripple element. */
var RippleState = /*#__PURE__*/function (RippleState) {
  RippleState[RippleState["FADING_IN"] = 0] = "FADING_IN";
  RippleState[RippleState["VISIBLE"] = 1] = "VISIBLE";
  RippleState[RippleState["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState[RippleState["HIDDEN"] = 3] = "HIDDEN";
  return RippleState;
}(RippleState || {});
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
  constructor(_renderer, /** Reference to the ripple HTML element. */
  element, /** Ripple configuration used for the ripple. */
  config, /* Whether animations are forcibly disabled for ripples through CSS. */
  _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    /** Current state of the ripple. */
    this.state = RippleState.HIDDEN;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
}

/** Options used to bind a passive capturing event. */
const passiveCapturingEventOptions$1 = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Manages events through delegation so that as few event handlers as possible are bound. */
class RippleEventManager {
  constructor() {
    this._events = new Map();
    /** Event handler that is bound and which dispatches the events to the different targets. */
    this._delegateEventHandler = event => {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._getEventTarget)(event);
      if (target) {
        this._events.get(event.type)?.forEach((handlers, element) => {
          if (element === target || element.contains(target)) {
            handlers.forEach(handler => handler.handleEvent(event));
          }
        });
      }
    };
  }
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, new Set([handler]));
      }
    } else {
      this._events.set(name, new Map([[element, new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
}

/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */
const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */
const ignoreMouseEventsTimeout = 800;
/** Options used to bind a passive capturing event. */
const passiveCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Events that signal that the pointer is down. */
const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */
const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */
class RippleRenderer {
  static {
    this._eventManager = /*#__PURE__*/new RippleEventManager();
  }
  constructor(_target, _ngZone, elementOrElementRef, _platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    /** Whether the pointer is currently down or not. */
    this._isPointerDown = false;
    /**
     * Map of currently active ripple references.
     * The ripple reference is mapped to its element event listeners.
     * The reason why `| null` is used is that event listeners are added only
     * when the condition is truthy (see the `_startFadeOutTransition` method).
     */
    this._activeRipples = new Map();
    /** Whether pointer-up event listeners have been registered. */
    this._pointerUpEventsRegistered = false;
    // Only do anything if we're on the browser.
    if (_platform.isBrowser) {
      this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...config.animation
    };
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement('div');
    ripple.classList.add('mat-ripple-element');
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    // If a custom color has been specified, set it as inline style. If no color is
    // set, the default color will be applied through the ripple theme styles.
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    // By default the browser does not recalculate the styles of dynamically created
    // ripple elements. This is critical to ensure that the `scale` animates properly.
    // We enforce a style recalculation by calling `getComputedStyle` and *accessing* a property.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    // Note: We detect whether animation is forcibly disabled through CSS (e.g. through
    // `transition: none` or `display: none`). This is technically unexpected since animations are
    // controlled through the animation config, but this exists for backwards compatibility. This
    // logic does not need to be super accurate since it covers some edge cases which can be easily
    // avoided by users.
    const animationForciblyDisabledThroughCss = userTransitionProperty === 'none' ||
    // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === '0s' || userTransitionDuration === '0s, 0s' ||
    // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    // Exposed reference to the ripple that will be returned.
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    // Start the enter animation by setting the transform/scale to 100%. The animation will
    // execute as part of this statement because we forced a style recalculation before.
    // Note: We use a 3d transform here in order to avoid an issue in Safari where
    // the ripples aren't clipped when inside the shadow DOM (see #24028).
    ripple.style.transform = 'scale3d(1, 1, 1)';
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    // Do not register the `transition` event listener if fade-in and fade-out duration
    // are set to zero. The events won't fire anyway and we can save resources here.
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          // Clear the fallback timer since the transition fired correctly.
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        // In some cases where there's a higher load on the browser, it can choose not to dispatch
        // neither `transitionend` nor `transitioncancel` (see b/227356674). This timer serves as a
        // fallback for such cases so that the ripple doesn't become stuck. We add a 100ms buffer
        // because timers aren't precise. Note that another approach can be to transition the ripple
        // to the `VISIBLE` state immediately above and to `FADING_IN` afterwards inside
        // `transitionstart`. We go with the timer because it's one less event listener and
        // it's less likely to break existing tests.
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener('transitionend', onTransitionEnd);
        // If the transition is cancelled (e.g. due to DOM removal), we destroy the ripple
        // directly as otherwise we would keep it part of the ripple container forever.
        // https://www.w3.org/TR/css-transitions-1/#:~:text=no%20longer%20in%20the%20document.
        ripple.addEventListener('transitioncancel', onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    // Add the ripple reference to the list of all active ripples.
    this._activeRipples.set(rippleRef, eventListeners);
    // In case there is no fade-in transition duration, we need to manually call the transition
    // end listener because `transitionend` doesn't fire if there is no transition.
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    // For ripples already fading out or hidden, this should be a noop.
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...rippleRef.config.animation
    };
    // This starts the fade-out transition and will fire the transition end listener that
    // removes the ripple element from the DOM.
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = RippleState.FADING_OUT;
    // In case there is no fade-out transition duration, we need to manually call the
    // transition end listener because `transitionend` doesn't fire if there is no transition.
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach(ripple => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    // Remove all previously registered event listeners from the trigger element.
    this._removeTriggerEvents();
    this._triggerElement = element;
    // Use event delegation for the trigger events since they're
    // set up during creation and are performance-sensitive.
    pointerDownEvents.forEach(type => {
      RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    // If pointer-up events haven't been registered yet, do so now.
    // We do this on-demand in order to reduce the total number of event listeners
    // registered by the ripples, which speeds up the rendering time for large UIs.
    if (!this._pointerUpEventsRegistered) {
      // The events for hiding the ripple are bound directly on the trigger, because:
      // 1. Some of them occur frequently (e.g. `mouseleave`) and any advantage we get from
      // delegation will be diminished by having to look through all the data structures often.
      // 2. They aren't as performance-sensitive, because they're bound only after the user
      // has interacted with an element.
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach(type => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    // When the timer runs out while the user has kept their pointer down, we want to
    // keep only the persistent ripples and the latest transient ripple. We do this,
    // because we don't want stacked transient ripples to appear after their enter
    // animation has finished.
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    // Clear out the cached bounding rect if we have no more ripples.
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    // If the current ref is the most recent transient ripple, unset it
    // avoid memory leaks.
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener('transitionend', eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener('transitioncancel', eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    // Screen readers will fire fake mouse events for space/enter. Skip launching a
    // ripple in this case for consistency with the non-screen-reader experience.
    const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeMousedownFromScreenReader)(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeTouchstartFromScreenReader)(event)) {
      // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
      // events will launch a second ripple if we don't ignore mouse events for a specific
      // time after a touchstart event.
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      // Use `changedTouches` so we skip any touches where the user put
      // their finger down, but used another finger to tap the element again.
      const touches = event.changedTouches;
      // According to the typings the touches should always be defined, but in some cases
      // the browser appears to not assign them in tests which leads to flakes.
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    // Fade-out all ripples that are visible and not persistent.
    this._getActiveRipples().forEach(ripple => {
      // By default, only ripples that are completely visible will fade out on pointer release.
      // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach(type => RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}

/** Injection token that can be used to specify the global ripple options. */
const MAT_RIPPLE_GLOBAL_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-ripple-global-options');
let MatRipple = /*#__PURE__*/(() => {
  class MatRipple {
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      if (value) {
        this.fadeOutAllNonPersistent();
      }
      this._disabled = value;
      this._setupTriggerEventsIfEnabled();
    }
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     */
    get trigger() {
      return this._trigger || this._elementRef.nativeElement;
    }
    set trigger(trigger) {
      this._trigger = trigger;
      this._setupTriggerEventsIfEnabled();
    }
    constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
      this._elementRef = _elementRef;
      this._animationMode = _animationMode;
      /**
       * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
       * will be the distance from the center of the ripple to the furthest corner of the host element's
       * bounding rectangle.
       */
      this.radius = 0;
      this._disabled = false;
      /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
      this._isInitialized = false;
      this._globalOptions = globalOptions || {};
      this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
    }
    ngOnInit() {
      this._isInitialized = true;
      this._setupTriggerEventsIfEnabled();
    }
    ngOnDestroy() {
      this._rippleRenderer._removeTriggerEvents();
    }
    /** Fades out all currently showing ripple elements. */
    fadeOutAll() {
      this._rippleRenderer.fadeOutAll();
    }
    /** Fades out all currently showing non-persistent ripple elements. */
    fadeOutAllNonPersistent() {
      this._rippleRenderer.fadeOutAllNonPersistent();
    }
    /**
     * Ripple configuration from the directive's input values.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleConfig() {
      return {
        centered: this.centered,
        radius: this.radius,
        color: this.color,
        animation: {
          ...this._globalOptions.animation,
          ...(this._animationMode === 'NoopAnimations' ? {
            enterDuration: 0,
            exitDuration: 0
          } : {}),
          ...this.animation
        },
        terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
      };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleDisabled() {
      return this.disabled || !!this._globalOptions.disabled;
    }
    /** Sets up the trigger event listeners if ripples are enabled. */
    _setupTriggerEventsIfEnabled() {
      if (!this.disabled && this._isInitialized) {
        this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
    }
    /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
    launch(configOrX, y = 0, config) {
      if (typeof configOrX === 'number') {
        return this._rippleRenderer.fadeInRipple(configOrX, y, {
          ...this.rippleConfig,
          ...config
        });
      } else {
        return this._rippleRenderer.fadeInRipple(0, 0, {
          ...this.rippleConfig,
          ...configOrX
        });
      }
    }
    static {
      this.ɵfac = function MatRipple_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRipple,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function MatRipple_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
          }
        },
        inputs: {
          color: [0, "matRippleColor", "color"],
          unbounded: [0, "matRippleUnbounded", "unbounded"],
          centered: [0, "matRippleCentered", "centered"],
          radius: [0, "matRippleRadius", "radius"],
          animation: [0, "matRippleAnimation", "animation"],
          disabled: [0, "matRippleDisabled", "disabled"],
          trigger: [0, "matRippleTrigger", "trigger"]
        },
        exportAs: ["matRipple"],
        standalone: true
      });
    }
  }
  return MatRipple;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatRippleModule = /*#__PURE__*/(() => {
  class MatRippleModule {
    static {
      this.ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatRippleModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatRippleModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [MatCommonModule, MatCommonModule]
      });
    }
  }
  return MatRippleModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
let MatPseudoCheckbox = /*#__PURE__*/(() => {
  class MatPseudoCheckbox {
    constructor(_animationMode) {
      this._animationMode = _animationMode;
      /** Display state of the checkbox. */
      this.state = 'unchecked';
      /** Whether the checkbox is disabled. */
      this.disabled = false;
      /**
       * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
       * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
       */
      this.appearance = 'full';
    }
    static {
      this.ɵfac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPseudoCheckbox,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 12,
        hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          state: "state",
          disabled: "disabled",
          appearance: "appearance"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 0,
        vars: 0,
        template: function MatPseudoCheckbox_Template(rf, ctx) {},
        styles: [".mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color, var(--mat-app-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color, var(--mat-app-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatPseudoCheckbox;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatPseudoCheckboxModule = /*#__PURE__*/(() => {
  class MatPseudoCheckboxModule {
    static {
      this.ɵfac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatPseudoCheckboxModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPseudoCheckboxModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [MatCommonModule]
      });
    }
  }
  return MatPseudoCheckboxModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token used to provide the parent component to options.
 */
const MAT_OPTION_PARENT_COMPONENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_OPTION_PARENT_COMPONENT');

// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
// Counter for unique group ids.
let _uniqueOptgroupIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_OPTGROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatOptgroup');
/**
 * Component that is used to group instances of `mat-option`.
 */
let MatOptgroup = /*#__PURE__*/(() => {
  class MatOptgroup {
    constructor(parent) {
      /** whether the option group is disabled. */
      this.disabled = false;
      /** Unique id for the underlying label. */
      this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
      this._inert = parent?.inertGroups ?? false;
    }
    static {
      this.ɵfac = function MatOptgroup_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatOptgroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOptgroup,
        selectors: [["mat-optgroup"]],
        hostAttrs: [1, "mat-mdc-optgroup"],
        hostVars: 3,
        hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
          }
        },
        inputs: {
          label: "label",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        exportAs: ["matOptgroup"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_OPTGROUP,
          useExisting: MatOptgroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 4,
        consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
        template: function MatOptgroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0)(1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
          }
        },
        styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-app-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-app-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-app-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatOptgroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */
class MatOptionSelectionChange {
  constructor( /** Reference to the option that emitted the event. */
  source, /** Whether the change in the option's value was a result of a user action. */
  isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
}
/**
 * Single option inside of a `<mat-select>` element.
 */
let MatOption = /*#__PURE__*/(() => {
  class MatOption {
    /** Whether the wrapping component is in multiple selection mode. */
    get multiple() {
      return this._parent && this._parent.multiple;
    }
    /** Whether or not the option is currently selected. */
    get selected() {
      return this._selected;
    }
    /** Whether the option is disabled. */
    get disabled() {
      return this.group && this.group.disabled || this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    /** Whether ripples for the option are disabled. */
    get disableRipple() {
      return !!(this._parent && this._parent.disableRipple);
    }
    /** Whether to display checkmark for single-selection. */
    get hideSingleSelectionIndicator() {
      return !!(this._parent && this._parent.hideSingleSelectionIndicator);
    }
    constructor(_element, _changeDetectorRef, _parent, group) {
      this._element = _element;
      this._changeDetectorRef = _changeDetectorRef;
      this._parent = _parent;
      this.group = group;
      this._selected = false;
      this._active = false;
      this._disabled = false;
      this._mostRecentViewValue = '';
      /** The unique ID of the option. */
      this.id = `mat-option-${_uniqueIdCounter++}`;
      /** Event emitted when the option is selected or deselected. */
      // tslint:disable-next-line:no-output-on-prefix
      this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the state of the option changes and any parents have to be notified. */
      this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     */
    get active() {
      return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     */
    get viewValue() {
      // TODO(kara): Add input property alternative for node envs.
      return (this._text?.nativeElement.textContent || '').trim();
    }
    /** Selects the option. */
    select(emitEvent = true) {
      if (!this._selected) {
        this._selected = true;
        this._changeDetectorRef.markForCheck();
        if (emitEvent) {
          this._emitSelectionChangeEvent();
        }
      }
    }
    /** Deselects the option. */
    deselect(emitEvent = true) {
      if (this._selected) {
        this._selected = false;
        this._changeDetectorRef.markForCheck();
        if (emitEvent) {
          this._emitSelectionChangeEvent();
        }
      }
    }
    /** Sets focus onto this option. */
    focus(_origin, options) {
      // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
      // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
      const element = this._getHostElement();
      if (typeof element.focus === 'function') {
        element.focus(options);
      }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles() {
      if (!this._active) {
        this._active = true;
        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles() {
      if (this._active) {
        this._active = false;
        this._changeDetectorRef.markForCheck();
      }
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
      return this.viewValue;
    }
    /** Ensures the option is selected when activated from the keyboard. */
    _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.SPACE) && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.hasModifierKey)(event)) {
        this._selectViaInteraction();
        // Prevent the page from scrolling down and form submits.
        event.preventDefault();
      }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    _selectViaInteraction() {
      if (!this.disabled) {
        this._selected = this.multiple ? !this._selected : true;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent(true);
      }
    }
    /** Returns the correct tabindex for the option depending on disabled state. */
    // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
    // That's because `MatLegacyOption` use `MatOption` type in a few places such as
    // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
    _getTabIndex() {
      return this.disabled ? '-1' : '0';
    }
    /** Gets the host DOM element. */
    _getHostElement() {
      return this._element.nativeElement;
    }
    ngAfterViewChecked() {
      // Since parent components could be using the option's label to display the selected values
      // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
      // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
      // relatively cheap, however we still limit them only to selected options in order to avoid
      // hitting the DOM too often.
      if (this._selected) {
        const viewValue = this.viewValue;
        if (viewValue !== this._mostRecentViewValue) {
          if (this._mostRecentViewValue) {
            this._stateChanges.next();
          }
          this._mostRecentViewValue = viewValue;
        }
      }
    }
    ngOnDestroy() {
      this._stateChanges.complete();
    }
    /** Emits the selection change event. */
    _emitSelectionChangeEvent(isUserInput = false) {
      this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
    static {
      this.ɵfac = function MatOption_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOption,
        selectors: [["mat-option"]],
        viewQuery: function MatOption_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
        hostVars: 11,
        hostBindings: function MatOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
              return ctx._selectViaInteraction();
            })("keydown", function MatOption_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
          }
        },
        inputs: {
          value: "value",
          id: "id",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          onSelectionChange: "onSelectionChange"
        },
        exportAs: ["matOption"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c4,
        decls: 8,
        vars: 5,
        consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
        template: function MatOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3)(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.multiple ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.group && ctx.group._inert ? 6 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
          }
        },
        dependencies: [MatPseudoCheckbox, MatRipple],
        styles: [".mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-app-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color);outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-app-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:\"\"}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}
let MatOptionModule = /*#__PURE__*/(() => {
  class MatOptionModule {
    static {
      this.ɵfac = function MatOptionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatOptionModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatOptionModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule]
      });
    }
  }
  return MatOptionModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** The options for the MatRippleLoader's event listeners. */
const eventListenerOptions = {
  capture: true
};
/**
 * The events that should trigger the initialization of the ripple.
 * Note that we use `mousedown`, rather than `click`, for mouse devices because
 * we can't rely on `mouseenter` in the shadow DOM and `click` happens too late.
 */
const rippleInteractionEvents = ['focus', 'mousedown', 'mouseenter', 'touchstart'];
/** The attribute attached to a component whose ripple has not yet been initialized. */
const matRippleUninitialized = 'mat-ripple-loader-uninitialized';
/** Additional classes that should be added to the ripple when it is rendered. */
const matRippleClassName = 'mat-ripple-loader-class-name';
/** Whether the ripple should be centered. */
const matRippleCentered = 'mat-ripple-loader-centered';
/** Whether the ripple should be disabled. */
const matRippleDisabled = 'mat-ripple-loader-disabled';
/**
 * Handles attaching ripples on demand.
 *
 * This service allows us to avoid eagerly creating & attaching MatRipples.
 * It works by creating & attaching a ripple only when a component is first interacted with.
 *
 * @docs-private
 */
let MatRippleLoader = /*#__PURE__*/(() => {
  class MatRippleLoader {
    constructor() {
      this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT, {
        optional: true
      });
      this._animationMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, {
        optional: true
      });
      this._globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
      });
      this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform);
      this._ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      this._hosts = new Map();
      /**
       * Handles creating and attaching component internals
       * when a component is initially interacted with.
       */
      this._onInteraction = event => {
        const eventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._getEventTarget)(event);
        if (eventTarget instanceof HTMLElement) {
          // TODO(wagnermaciel): Consider batching these events to improve runtime performance.
          const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ''}"]`);
          if (element) {
            this._createRipple(element);
          }
        }
      };
      this._ngZone.runOutsideAngular(() => {
        for (const event of rippleInteractionEvents) {
          this._document?.addEventListener(event, this._onInteraction, eventListenerOptions);
        }
      });
    }
    ngOnDestroy() {
      const hosts = this._hosts.keys();
      for (const host of hosts) {
        this.destroyRipple(host);
      }
      for (const event of rippleInteractionEvents) {
        this._document?.removeEventListener(event, this._onInteraction, eventListenerOptions);
      }
    }
    /**
     * Configures the ripple that will be rendered by the ripple loader.
     *
     * Stores the given information about how the ripple should be configured on the host
     * element so that it can later be retrived & used when the ripple is actually created.
     */
    configureRipple(host, config) {
      // Indicates that the ripple has not yet been rendered for this component.
      host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? '');
      // Store the additional class name(s) that should be added to the ripple element.
      if (config.className || !host.hasAttribute(matRippleClassName)) {
        host.setAttribute(matRippleClassName, config.className || '');
      }
      // Store whether the ripple should be centered.
      if (config.centered) {
        host.setAttribute(matRippleCentered, '');
      }
      if (config.disabled) {
        host.setAttribute(matRippleDisabled, '');
      }
    }
    /** Returns the ripple instance for the given host element. */
    getRipple(host) {
      const ripple = this._hosts.get(host);
      return ripple || this._createRipple(host);
    }
    /** Sets the disabled state on the ripple instance corresponding to the given host element. */
    setDisabled(host, disabled) {
      const ripple = this._hosts.get(host);
      // If the ripple has already been instantiated, just disable it.
      if (ripple) {
        ripple.disabled = disabled;
        return;
      }
      // Otherwise, set an attribute so we know what the
      // disabled state should be when the ripple is initialized.
      if (disabled) {
        host.setAttribute(matRippleDisabled, '');
      } else {
        host.removeAttribute(matRippleDisabled);
      }
    }
    /** Creates a MatRipple and appends it to the given element. */
    _createRipple(host) {
      if (!this._document) {
        return;
      }
      const existingRipple = this._hosts.get(host);
      if (existingRipple) {
        return existingRipple;
      }
      // Create the ripple element.
      host.querySelector('.mat-ripple')?.remove();
      const rippleEl = this._document.createElement('span');
      rippleEl.classList.add('mat-ripple', host.getAttribute(matRippleClassName));
      host.append(rippleEl);
      // Create the MatRipple.
      const ripple = new MatRipple(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(rippleEl), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : undefined, this._animationMode ? this._animationMode : undefined);
      ripple._isInitialized = true;
      ripple.trigger = host;
      ripple.centered = host.hasAttribute(matRippleCentered);
      ripple.disabled = host.hasAttribute(matRippleDisabled);
      this.attachRipple(host, ripple);
      return ripple;
    }
    attachRipple(host, ripple) {
      host.removeAttribute(matRippleUninitialized);
      this._hosts.set(host, ripple);
    }
    destroyRipple(host) {
      const ripple = this._hosts.get(host);
      if (ripple) {
        // Since this directive is created manually, it needs to be destroyed manually too.
        // tslint:disable-next-line:no-lifecycle-invocation
        ripple.ngOnDestroy();
        this._hosts.delete(host);
      }
    }
    static {
      this.ɵfac = function MatRippleLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatRippleLoader)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatRippleLoader,
        factory: MatRippleLoader.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MatRippleLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Internal shared component used as a container in form field controls.
 * Not to be confused with `mat-form-field` which MDC calls a "text field".
 * @docs-private
 */
let _MatInternalFormField = /*#__PURE__*/(() => {
  class _MatInternalFormField {
    static {
      this.ɵfac = function _MatInternalFormField_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatInternalFormField)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatInternalFormField,
        selectors: [["div", "mat-internal-form-field", ""]],
        hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
        hostVars: 2,
        hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-form-field--align-end", ctx.labelPosition === "before");
          }
        },
        inputs: {
          labelPosition: "labelPosition"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        attrs: _c5,
        ngContentSelectors: _c6,
        decls: 1,
        vars: 0,
        template: function _MatInternalFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return _MatInternalFormField;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=core.mjs.map

/***/ })

}]);