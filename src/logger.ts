import { g } from "./store";

export function startLogger() {
  // subscribe to all state‐changes
  g.on("update", (state) => {
    console.clear();
    console.log("🕹️  Current games state:", state);
  });
}
