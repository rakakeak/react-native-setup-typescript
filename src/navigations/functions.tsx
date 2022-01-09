import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import * as React from 'react';
import {StackParams} from 'routes';

export const navigationRef =
  React.createRef<NavigationContainerRef<StackParams>>();

export const navigate = (
  screen: any,
  params?: Record<string, unknown>,
): void => {
  navigationRef?.current?.navigate(screen, params);
};

export const goBack = (): void => {
  navigationRef.current?.goBack();
};

export const replace = (name: string, params?: object): void => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};
