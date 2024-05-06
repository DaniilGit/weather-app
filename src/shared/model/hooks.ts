import * as ReactRedux from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

export const { useDispatch, useSelector } = ReactRedux as {
  useDispatch: () => AppDispatch;
  useSelector: TypedUseSelectorHook<RootState>;
};
