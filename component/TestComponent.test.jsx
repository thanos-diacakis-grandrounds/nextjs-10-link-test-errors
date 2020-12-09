import {TestComponent} from './TestComponent.jsx';
import {render, act} from '@testing-library/react';

describe('<TestComponent/>', () => {

    // Commenting out "test a" makes the problem go away.
    // This fails with NextJS 10.x, but works with 9.5.6.
    it('test a', () => {
    });

    it('test c', () => {
        let result;
        act(() => {
            result = render(<TestComponent/>);
        });
    });


});
