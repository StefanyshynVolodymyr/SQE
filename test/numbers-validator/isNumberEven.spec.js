/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { expect } from 'chai';
import { NumbersValidator } from '../../app/numbers-validator.js';

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return falce when provided with even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
