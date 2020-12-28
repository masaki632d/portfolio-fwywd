export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface CounterState {
  counter: CounterType;
}

export interface CounterType {
  id: number;
  name: string;
}

export interface IncrementAction {
  type: typeof INCREMENT;
  payload: CounterState;
}
export interface DecrementAction {
  type: typeof DECREMENT;
  payload: CounterState;
}

export type CounterActionTypes = IncrementAction | DecrementAction;
