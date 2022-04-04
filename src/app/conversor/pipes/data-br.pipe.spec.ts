import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

it('deve formatar a data 2022-03-18 para 18/03/2022', () => {
  const pipe = new DataBrPipe();
  expect(pipe.transform('2022-03-18')).toEqual('18/03/2022');
})

});
