import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemNotesService implements InMemoryDbService {

    createDb(): {} {
        const notes = [
            {id: 1, name: 'First Note', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip'},
            {id: 2, name: 'Second Note', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius'},
            {id: 3, name: 'Third Note', content: ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor '},
            {id: 4, name: 'Fourth Note', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia '},
            {id: 5, name: 'Fifth Note', content: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'},
            {id: 6, name: 'Sixth Note', content: 'hitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia '},
            {id: 7, name: 'Seventh Note', content: 'erat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem'},
            {id: 8, name: 'Eighth Note', content: 'm, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehend'},
            {id: 9, name: 'Ninth Note', content: ' eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupta'},
            {id: 10, name: 'Tenth Note', content: 'busdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptate'},
            {id: 11, name: 'Eleventh Note', content: 'apiente delectus, ut aut reiciendis voluptatibus maiores alias conseq'},
            {id: 12, name: 'Twelfths Note', content: 'non recusandae. Itaque earum rerum hic tenetur a sa'},
        ];
        return {notes};
    }
}
