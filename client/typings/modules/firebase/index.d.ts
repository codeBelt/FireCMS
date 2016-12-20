// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-es6-promise/fb04188767acfec1defd054fc8024fafa5cd4de7/dist/es6-promise.d.ts
declare module '~firebase~es6-promise/dist/es6-promise' {
export interface Thenable <R> {
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

export class Promise <R> implements Thenable <R> {
  /**
   * If you call resolve in the body of the callback passed to the constructor,
   * your promise is fulfilled with result object passed to resolve.
   * If you call reject your promise is rejected with the object passed to resolve.
   * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
   * Any errors thrown in the constructor callback will be implicitly passed to reject().
   */
  constructor (callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);

  /**
   * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
   * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
   * Both callbacks have a single parameter , the fulfillment value or rejection reason.
   * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
   * If an error is thrown in the callback, the returned promise rejects with that error.
   *
   * @param onFulfilled called when/if "promise" resolves
   * @param onRejected called when/if "promise" rejects
   */
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

  /**
   * Sugar for promise.then(undefined, onRejected)
   *
   * @param onRejected called when/if "promise" rejects
   */
  catch <U> (onRejected?: (error: any) => U | Thenable<U>): Promise<U>;

  /**
   * Make a new promise from the thenable.
   * A thenable is promise-like in as far as it has a "then" method.
   */
  static resolve (): Promise<void>;
  static resolve <R> (value: R | Thenable<R>): Promise<R>;

  /**
   * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
   */
  static reject <R> (error: any): Promise<R>;

  /**
   * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
   * the array passed to all can be a mixture of promise-like objects and other objects.
   * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
   */
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
  static all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
  static all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
  static all<T1>(values: [T1 | Thenable<T1>]): Promise<[T1]>;
  static all<TAll>(values: Array<TAll | Thenable<TAll>>): Promise<TAll[]>;

  /**
   * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
   */
  static race <R> (promises: (R | Thenable<R>)[]): Promise<R>;
}

/**
 * The polyfill method will patch the global environment (in this case to the Promise name) when called.
 */
export function polyfill (): void;
}
declare module '~firebase~es6-promise' {
import alias = require('~firebase~es6-promise/dist/es6-promise');
export = alias;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-firebase/7dceb15d79a7adacbd01163e7f65043900775e00/firebase-node.d.ts
declare module '~firebase/firebase-node' {
/*

1. Delete goog namespaces
2. Delete look of disaproval
3. typealias firebase.Promise to Promise
4. Union type FirebaseOAuthProvider
5. Remove _noStructuralTyping from Promise classes
6. Remove catch() and then() declarations from firebase.Thenable, and extend Promise<t>.

*/

import { Promise } from '~firebase~es6-promise';

interface FirebaseService {
  INTERNAL: Object;
  app: firebase.app.App;
}

interface FirebaseServiceNamespace {
  app(app?: firebase.app.App): FirebaseService;
}

interface Observer {
  complete(): any;
  error(error: Object): any;
  next(value: any): any;
}


type FirebaseOAuthProvider = firebase.auth.GithubAuthProvider |
  firebase.auth.GoogleAuthProvider |
  firebase.auth.FacebookAuthProvider;

class Promise_Instance<TYPE> implements PromiseLike<TYPE> {
  constructor(resolver: (a: (a?: TYPE | PromiseLike<TYPE> | { then: any }) => any, b: (a?: any) => any) => any);
  catch<RESULT>(onRejected: (a: any) => RESULT): Promise<RESULT>;
  then<VALUE, RESULT>(opt_onFulfilled?: (a: TYPE) => VALUE, opt_onRejected?: (a: any) => any): RESULT;
}

namespace firebase {
  type AuthTokenData = { accessToken: string, expirationTime: number, refreshToken: string };
}
namespace firebase {
  type AuthTokenListener = (a: string) => void;
}
namespace firebase {
  type CompleteFn = () => void;
}
namespace firebase {
  type ErrorFn = (a: Object) => void;
}
namespace firebase {
  interface FirebaseError {
    code: string;
    message: string;
    name: string;
    stack: string;
  }
}
namespace firebase {
  type NextFn = (a: any) => void;
}
namespace firebase {
  class Promise<T> extends Promise_Instance<T> {
    static all(values: firebase.Promise<any>[]): firebase.Promise<any[]>;
    static reject(error: Object): firebase.Promise<any>;
    static resolve<T>(value: T): firebase.Promise<T>;
  }
  class Promise_Instance<T> implements firebase.Thenable<any> {
    constructor(resolver: (a?: (a: T) => void, b?: (a: Object) => void) => any);
    catch(onReject?: (a: Object) => any): firebase.Thenable<any>;
    then(onResolve?: (a: T) => any, onReject?: (a: Object) => any): firebase.Promise<any>;
  }
}
namespace firebase {
  var SDK_VERSION: string;
}
namespace firebase {
  type Subscribe = (a?: ((a: any) => void) | Observer, b?: (a: Object) => void, c?: () => void) => () => void;
}
namespace firebase {
  interface Thenable<T> extends Promise<T> {
    //Removed definitions of catch() and then(), and extended Promise.
  }
}
namespace firebase {
  type Unsubscribe = () => void;
}
namespace firebase {
  interface User extends firebase.UserInfo {
    delete(): firebase.Promise<void>;
    emailVerified: boolean;
    getToken(opt_forceRefresh?: boolean): firebase.Promise<string>;
    isAnonymous: boolean;
    link(credential: firebase.auth.AuthCredential): firebase.Promise<firebase.User>;
    linkWithPopup(provider: firebase.auth.AuthProvider): firebase.Promise<{ credential: firebase.auth.AuthCredential, user: firebase.User }>;
    linkWithRedirect(provider: firebase.auth.AuthProvider): firebase.Promise<void>;
    providerData: (firebase.UserInfo)[];
    reauthenticate(credential: firebase.auth.AuthCredential): firebase.Promise<void>;
    refreshToken: string;
    reload(): firebase.Promise<void>;
    sendEmailVerification(): firebase.Promise<void>;
    unlink(providerId: string): firebase.Promise<firebase.User>;
    updateEmail(newEmail: string): firebase.Promise<void>;
    updatePassword(newPassword: string): firebase.Promise<void>;
    updateProfile(profile: { displayName: string, photoURL: string }): firebase.Promise<void>;
  }
}
namespace firebase {
  interface UserInfo {
    displayName: string;
    email: string;
    photoURL: string;
    providerId: string;
    uid: string;
  }
}
namespace firebase {
  function app(name: string): firebase.app.App;
}
namespace firebase.app {
  interface App {
    INTERNAL: Object;
    auth(): firebase.auth.Auth;
    database(): firebase.database.Database;
    delete(): firebase.Promise<any>;
    name: string;
    options: Object;
    storage(): firebase.storage.Storage;
  }
}
namespace firebase {
  var apps: (firebase.app.App)[];
}
namespace firebase {
  function auth(app?: firebase.app.App): firebase.auth.Auth;
}
namespace firebase.auth {
  interface ActionCodeInfo {
  }
}
namespace firebase.auth {
  interface Auth {
    app: firebase.app.App;
    applyActionCode(code: string): firebase.Promise<void>;
    checkActionCode(code: string): firebase.Promise<firebase.auth.ActionCodeInfo>;
    confirmPasswordReset(code: string, newPassword: string): firebase.Promise<void>;
    createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<firebase.User>;
    currentUser: firebase.User;
    fetchProvidersForEmail(email: string): firebase.Promise<string[]>;
    getRedirectResult(): firebase.Promise<{ credential: firebase.auth.AuthCredential, user: firebase.User }>;
    onAuthStateChanged(nextOrObserver: Object, opt_error?: (a: firebase.auth.Error) => any, opt_completed?: () => any): () => any;
    sendPasswordResetEmail(email: string): firebase.Promise<void>;
    signInAnonymously(): firebase.Promise<firebase.User>;
    signInWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise<firebase.User>;
    signInWithCustomToken(token: string): firebase.Promise<firebase.User>;
    signInWithEmailAndPassword(email: string, password: string): firebase.Promise<firebase.User>;
    signInWithPopup(provider: firebase.auth.AuthProvider): firebase.Promise<{ credential: firebase.auth.AuthCredential, user: firebase.User }>;
    signInWithRedirect(provider: firebase.auth.AuthProvider): firebase.Promise<void>;
    signOut(): firebase.Promise<void>;
    verifyPasswordResetCode(code: string): firebase.Promise<string>;
  }
}
namespace firebase.auth {
  interface AuthCredential {
    provider: string;
  }
}
namespace firebase.auth {
  interface AuthProvider {
    providerId: string;
  }
}
namespace firebase.auth {
  class EmailAuthProvider extends EmailAuthProvider_Instance {
    static PROVIDER_ID: string;
  }
  class EmailAuthProvider_Instance implements firebase.auth.AuthProvider {
    private noStructuralTyping_: any;
    credential(email: string, password: string): firebase.auth.AuthCredential;
    providerId: string;
  }
}
namespace firebase.auth {
  interface Error {
    code: string;
    message: string;
  }
}
namespace firebase.auth {
  class FacebookAuthProvider extends FacebookAuthProvider_Instance {
    static PROVIDER_ID: string;
  }
  class FacebookAuthProvider_Instance implements firebase.auth.AuthProvider {
    private noStructuralTyping_: any;
    addScope(scope: string): any;
    credential(token: string): firebase.auth.AuthCredential;
    providerId: string;
  }
}
namespace firebase.auth {
  class GithubAuthProvider extends GithubAuthProvider_Instance {
    static PROVIDER_ID: string;
    // TODO fix upstream
    static credential(token: string): firebase.auth.AuthCredential;
  }
  class GithubAuthProvider_Instance implements firebase.auth.AuthProvider {
    private noStructuralTyping_: any;
    addScope(scope: string): any;
    providerId: string;
  }
}
namespace firebase.auth {
  class GoogleAuthProvider extends GoogleAuthProvider_Instance {
    static PROVIDER_ID: string;
  }
  class GoogleAuthProvider_Instance implements firebase.auth.AuthProvider {
    private noStructuralTyping_: any;
    addScope(scope: string): any;
    credential(idToken?: string, accessToken?: string): firebase.auth.AuthCredential;
    providerId: string;
  }
}
namespace firebase.auth {
  class TwitterAuthProvider extends TwitterAuthProvider_Instance {
    static PROVIDER_ID: string;
    // TODO fix this upstream
    static credential(token: string, secret: string): firebase.auth.AuthCredential;
  }
  class TwitterAuthProvider_Instance implements firebase.auth.AuthProvider {
    private noStructuralTyping_: any;
    providerId: string;
  }
}
namespace firebase.auth {
  type UserCredential = { credential: firebase.auth.AuthCredential, user: firebase.User };
}
namespace firebase {
  function database(app?: firebase.app.App): firebase.database.Database;
}
namespace firebase.database {
  interface DataSnapshot {
    child(path: string): firebase.database.DataSnapshot;
    exists(): boolean;
    exportVal(): any;
    forEach(action: (a: firebase.database.DataSnapshot) => boolean): boolean;
    getPriority(): string | number;
    hasChild(path: string): boolean;
    hasChildren(): boolean;
    key: string;
    numChildren(): number;
    ref: firebase.database.Reference;
    val(): any;
  }
}
namespace firebase.database {
  interface Database {
    app: firebase.app.App;
    goOffline(): any;
    goOnline(): any;
    ref(path?: string): firebase.database.Reference;
    refFromURL(url: string): firebase.database.Reference;
  }
}
namespace firebase.database {
  interface OnDisconnect {
    cancel(onComplete?: (a: Object) => any): firebase.Promise<void>;
    remove(onComplete?: (a: Object) => any): firebase.Promise<void>;
    set(value: any, onComplete?: (a: Object) => any): firebase.Promise<void>;
    setWithPriority(value: any, priority: number | string, onComplete?: (a: Object) => any): firebase.Promise<void>;
    update(values: Object, onComplete?: (a: Object) => any): firebase.Promise<void>;
  }
}
namespace firebase.database {
  interface Query {
    endAt(value: number | string | boolean, key?: string): firebase.database.Query;
    equalTo(value: number | string | boolean, key?: string): firebase.database.Query;
    limitToFirst(limit: number): firebase.database.Query;
    limitToLast(limit: number): firebase.database.Query;
    off(eventType?: string, callback?: (a: firebase.database.DataSnapshot, b?: string) => any, context?: Object): any;
    on(eventType: string, callback: (a: firebase.database.DataSnapshot, b?: string) => any, cancelCallbackOrContext?: Object, context?: Object): (a: firebase.database.DataSnapshot, b?: string) => any;
    once(eventType: string, callback?: (a: firebase.database.DataSnapshot, b?: string) => any): firebase.Promise<any>;
    orderByChild(path: string): firebase.database.Query;
    orderByKey(): firebase.database.Query;
    orderByPriority(): firebase.database.Query;
    orderByValue(): firebase.database.Query;
    ref: firebase.database.Reference;
    startAt(value: number | string | boolean, key?: string): firebase.database.Query;
    toString(): string;
  }
}
namespace firebase.database {
  interface Reference extends firebase.database.Query {
    child(path: string): firebase.database.Reference;
    key: string;
    onDisconnect(): firebase.database.OnDisconnect;
    parent: firebase.database.Reference;
    push(value?: any, onComplete?: (a: Object) => any): firebase.database.ThenableReference;
    remove(onComplete?: (a: Object) => any): firebase.Promise<void>;
    root: firebase.database.Reference;
    set(value: any, onComplete?: (a: Object) => any): firebase.Promise<void>;
    setPriority(priority: string | number, onComplete: (a: Object) => any): firebase.Promise<void>;
    setWithPriority(newVal: any, newPriority: string | number, onComplete?: (a: Object) => any): firebase.Promise<void>;
    transaction(transactionUpdate: (a: any) => any, onComplete?: (a: Object, b: boolean, c: firebase.database.DataSnapshot) => any, applyLocally?: boolean): firebase.Promise<{ committed: boolean, snapshot: firebase.database.DataSnapshot }>;
    update(values: Object, onComplete?: (a: Object) => any): firebase.Promise<void>;
  }
}
namespace firebase.database.ServerValue {
}
namespace firebase.database {
  interface ThenableReference extends firebase.database.Reference, firebase.Thenable<void> {
  }
}
namespace firebase.database {
  function enableLogging(logger?: any, persistent?: boolean): any;
}
namespace firebase {
  function initializeApp(options: Object, name?: string): firebase.app.App;
}
namespace firebase {
  function storage(app?: firebase.app.App): firebase.storage.Storage;
}
namespace firebase.storage {
  interface FullMetadata extends firebase.storage.UploadMetadata {
    bucket: string;
    downloadURLs: string[];
    fullPath: string;
    generation: string;
    metageneration: string;
    name: string;
    size: number;
    timeCreated: string;
    updated: string;
  }
}
namespace firebase.storage {
  interface Reference {
    bucket: string;
    child(path: string): firebase.storage.Reference;
    delete(): Promise<void>;
    fullPath: string;
    getDownloadURL(): Promise<string>;
    getMetadata(): Promise<firebase.storage.FullMetadata>;
    name: string;
    parent: firebase.storage.Reference;
    put(blob: Blob, metadata?: firebase.storage.UploadMetadata): firebase.storage.UploadTask;
    root: firebase.storage.Reference;
    storage: firebase.storage.Storage;
    toString(): string;
    updateMetadata(metadata: firebase.storage.SettableMetadata): Promise<firebase.storage.FullMetadata>;
  }
}
namespace firebase.storage {
  interface SettableMetadata {
    cacheControl: string;
    contentDisposition: string;
    contentEncoding: string;
    contentLanguage: string;
    contentType: string;
    customMetadata: { [key: string]: string };
  }
}
namespace firebase.storage {
  interface Storage {
    app: firebase.app.App;
    maxOperationRetryTime: number;
    maxUploadRetryTime: number;
    ref(path?: string): firebase.storage.Reference;
    refFromURL(url: string): firebase.storage.Reference;
    setMaxOperationRetryTime(time: number): any;
    setMaxUploadRetryTime(time: number): any;
  }
}
namespace firebase.storage {
  type TaskEvent = string;
  var TaskEvent: {
    STATE_CHANGED: TaskEvent,
  };
}
namespace firebase.storage {
  type TaskState = string;
  var TaskState: {
    CANCELED: TaskState,
    ERROR: TaskState,
    PAUSED: TaskState,
    RUNNING: TaskState,
    SUCCESS: TaskState,
  };
}
namespace firebase.storage {
  interface UploadMetadata extends firebase.storage.SettableMetadata {
    md5Hash: string;
  }
}
namespace firebase.storage {
  interface UploadTask {
    cancel(): boolean;
    on(event: firebase.storage.TaskEvent, nextOrObserver?: Object, error?: (a: Object) => any, complete?: () => any): (...a: any[]) => any;
    pause(): boolean;
    resume(): boolean;
    snapshot: firebase.storage.UploadTaskSnapshot;
  }
}
namespace firebase.storage {
  interface UploadTaskSnapshot {
    bytesTransferred: number;
    downloadURL: string;
    metadata: firebase.storage.FullMetadata;
    ref: firebase.storage.Reference;
    state: firebase.storage.TaskState;
    task: firebase.storage.UploadTask;
    totalBytes: number;
  }
}

export = firebase;
}
declare module 'firebase/firebase-node' {
import alias = require('~firebase/firebase-node');
export = alias;
}
declare module 'firebase' {
import alias = require('~firebase/firebase-node');
export = alias;
}
