import Person = require('Scripts/App/Components/PersonTable/Models/Person');
import ko = require('knockout'); 
class PageViewModel {
    public persons: KnockoutObservableArray<Person>;
    constructor(personData: Person[]) {
        this.persons = ko.observableArray(personData);
    }
} 
export = PageViewModel;