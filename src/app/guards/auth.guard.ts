import { CanActivateChildFn, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  console.log("Route in Guard:", route)
  console.log("State in Guard: ", state)
  if(route.routeConfig.path === 'userDashboard')
      return true
  else
    return false;
};

export const authGuardChild: CanActivateChildFn = () => {
  return false
}


