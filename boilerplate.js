import { mkdir } from "fs";

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
mkdir("dogs", { recursive: true }, (err) => {
  if (err) throw err;
});
