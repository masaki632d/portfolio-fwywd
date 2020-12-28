import { Record } from "immutable";

// store.tsは必要ない？
// Modelはtsx（マネップ）の場合どこにいったのか？
const CountRecord = Record({ count: 0 });

export class CountModel extends CountRecord {
  increment(num = 1) {
    return this.set("count", this.count + num);
  }
  decrement(num = 1) {
    return this.set("count", this.count - num);
  }
}
