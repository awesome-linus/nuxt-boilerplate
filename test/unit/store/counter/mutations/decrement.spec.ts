import { mutations } from '~/store/counter';
const { DECREMENT } = mutations;

describe('store/counter/mutations/decrement', () => {
  it('should have been called the specified mutation', () => {
    const state = { count: 1 };

    DECREMENT(state, {});

    expect(state.count).toEqual(0);
  });
});
