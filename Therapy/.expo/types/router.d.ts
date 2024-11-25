/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/SignUpScreen`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/StackNavigator`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/LoginScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/SignUpScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/WelcomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/navigation/StackNavigator`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/LoginScreen${`?${string}` | `#${string}` | ''}` | `/SignUpScreen${`?${string}` | `#${string}` | ''}` | `/WelcomeScreen${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/navigation/StackNavigator${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/SignUpScreen`; params?: Router.UnknownInputParams; } | { pathname: `/WelcomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/navigation/StackNavigator`; params?: Router.UnknownInputParams; };
    }
  }
}
