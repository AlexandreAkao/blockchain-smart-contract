import React from 'react';
import { drizzleReactHooks } from "@drizzle/react-plugin";

const { useDrizzleState } = drizzleReactHooks;

const LoadingDrizzle = ({ children }) => {
  const drizzleStatus = useDrizzleState(state => state.drizzleStatus);
  if (!drizzleStatus.initialized) {
    return "Loading..."
  }

  return (
    <>{children}</>
  )
}

export default LoadingDrizzle;