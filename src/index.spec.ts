import { ndim } from './index';
import { expect } from 'chai';
import 'mocha';

describe('ndim()', () => {

  it('should create correct dimensions', () => {

    const a1 = ndim([3,2,1], (...args) => args.join(":"));
    expect(a1).eql([
      [
        ["0:0:0"],
        ["0:1:0"],
      ],
      [
        ["1:0:0"],
        ["1:1:0"],
      ],
      [
        ["2:0:0"],
        ["2:1:0"],
      ],
    ]);

  });

});