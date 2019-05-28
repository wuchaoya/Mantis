import { action, computed, observable } from "mobx";
export default class ViewModel {
    @observable age = 10;
    @observable users = [];

    @computed get computedAge() {
        return this.age + 1;
    }

    @action.bound setAge(): void {
        this.age++;
    }
    
   
}