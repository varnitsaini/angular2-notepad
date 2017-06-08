import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemNotesService implements InMemoryDbService {

    createDb(): {} {
        const notes = [
            {id: 1, name: 'First', content: 'as'},
            {id: 2, name: 'Second', content: 'as'},
            {id: 3, name: 'Third', content: '123as'},
            {id: 4, name: 'Fourth', content: 'adss'},
            {id: 5, name: 'Fifth', content: 'agdfss'},
            {id: 6, name: 'Sixth', content: 'asvfs'},
            {id: 7, name: 'Seventh', content: 'agsdgdsadsds'},
            {id: 8, name: 'Eighth', content: 'agsdgsds'},
            {id: 9, name: 'Ninth', content: 'agsdgsdsadads'},
            {id: 10, name: 'Tenth', content: 'agsdgfdsafassds'},
            {id: 11, name: 'Eleventh', content: 'agsfsdafsdgsds'},
            {id: 12, name: 'Twelfths', content: 'adsfasgsdgsds'},
        ];
        return {notes};
    }
}
