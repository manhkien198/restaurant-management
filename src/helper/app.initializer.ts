import { SigninService } from 'src/components/login/service/signin.service';

export function appInitializer(authenticationService: SigninService) {
  return () =>
    new Promise((resolve: any) => {
      // attempt to refresh token on app start up to auto authenticate
      authenticationService.refreshToken().subscribe().add(resolve);
    });
}
