import * as fromLogout from './logout.actions';

describe('logoutUserLogouts', () => {
  it('should return an action', () => {
    expect(fromLogout.logoutUserLogouts().type).toBe('[Logout] LogoutUser Logouts');
  });
});
