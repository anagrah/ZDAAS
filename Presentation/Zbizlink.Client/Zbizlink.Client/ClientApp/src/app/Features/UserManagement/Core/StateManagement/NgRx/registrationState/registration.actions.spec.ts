import * as fromRegistration from './registration.actions';

describe('userRegistrations', () => {
  it('should return an action', () => {
    expect(fromRegistration.userRegistrations().type).toBe('[Registration] User Registrations');
  });
});
