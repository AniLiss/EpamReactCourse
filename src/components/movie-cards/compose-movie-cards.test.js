import {composeMovieCards} from './compose-movie-cards';
import {mockData} from './fixtures';

describe('Compose Movie Cards', () => {
    it('is expected to compose card from a given data', () => {
        const result = composeMovieCards(mockData);
        expect(result).toHaveLength(3);
    })
});
