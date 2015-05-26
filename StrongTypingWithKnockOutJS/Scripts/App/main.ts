import ko = require('knockout');
import Person = require('Scripts/App/Components/PersonTable/Models/Person');
import PageViewModel = require('Scripts/App/ViewModels/PageViewModel'); 
require(["jQuery"], function ($) {
    $(document).ready(function () {
        var personArray: Person[] = [
            new Person('Steve', 'Maxwell', 36),
            new Person('John', 'Smith', 40)
        ]; 
        ko.components.register('person-table', {
            viewModel: { require: 'Scripts/App/Components/PersonTable/ViewModels/PersonTableViewModel' },
            template: { require: 'text!Scripts/App/Components/PersonTable/Views/PersonTableView.html' }
        });  
        var pageViewModel: PageViewModel = new PageViewModel(personArray);
        ko.applyBindings(pageViewModel);
    });
});