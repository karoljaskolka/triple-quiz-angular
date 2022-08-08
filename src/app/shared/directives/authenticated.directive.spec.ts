import { AuthenticatedDirective } from './authenticated.directive';
import {
  SpectatorDirective,
  createDirectiveFactory,
  mockProvider,
} from '@ngneat/spectator/jest';
import { TokenService } from '../../core/services';
import { of } from 'rxjs';

const TokenServiceMockAuthenticated = {
  tokenChange$: of(null),
  getToken: () => 'jwt_token',
};

describe('AuthenticatedDirective - Authenticated', () => {
  let spec: SpectatorDirective<AuthenticatedDirective>;
  const createDirective = createDirectiveFactory({
    directive: AuthenticatedDirective,
    providers: [mockProvider(TokenService, TokenServiceMockAuthenticated)],
    detectChanges: false,
  });

  it('should render template', () => {
    spec = createDirective(
      '<div *tqAuthenticated data-testid-template>TEMPLATE</div>'
    );
    spec.detectChanges();

    const template = spec.query('[data-testid-template]');

    expect(template).toBeTruthy();
  });
});

const TokenServiceMockNotAuthenticated = {
  tokenChange$: of(null),
  getToken: () => null,
};

describe('AuthenticatedDirective - NotAuthenticated', () => {
  let spec: SpectatorDirective<AuthenticatedDirective>;
  const createDirective = createDirectiveFactory({
    directive: AuthenticatedDirective,
    providers: [mockProvider(TokenService, TokenServiceMockNotAuthenticated)],
    detectChanges: false,
  });
  it('should not render template', () => {
    spec = createDirective(
      '<div *tqAuthenticated data-testid-template>TEMPLATE</div>'
    );
    spec.detectChanges();

    const template = spec.query('[data-testid-template]');

    expect(template).not.toBeTruthy();
  });
});
