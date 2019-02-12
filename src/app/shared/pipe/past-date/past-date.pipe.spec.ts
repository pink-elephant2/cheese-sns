import { PastDatePipe } from './past-date.pipe';

describe('PastDatePipe', () => {
  it('create an instance', () => {
    const pipe = new PastDatePipe();
    expect(pipe).toBeTruthy();
  });
});
