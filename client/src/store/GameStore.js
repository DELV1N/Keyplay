import { makeAutoObservable } from "mobx";

export default class GameStore {
  constructor() {
    this._publishers = [];
    this._developers = [];
    this._games = [];
    this._selectedPublisher = {};
    this._selectedDeveloper = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 5;
    makeAutoObservable(this);
  }

  setGame(games) {
    this._games = games;
  }

  setPublisher(publishers) {
    this._publishers = publishers;
  }

  setDeveloper(developers) {
    this._developers = developers;
  }

  setSelectedPublisher(publisher) {
    this.setPage(1);
    this._selectedPublisher = publisher;
  }

  setSelectedDeveloper(developer) {
    this.setPage(1);
    this._selectedDeveloper = developer;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  get games() {
    return this._games;
  }

  get publishers() {
    return this._publishers;
  }

  get developers() {
    return this._developers;
  }

  get selectedPublisher() {
    return this._selectedPublisher;
  }

  get selectedDeveloper() {
    return this._selectedDeveloper;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
