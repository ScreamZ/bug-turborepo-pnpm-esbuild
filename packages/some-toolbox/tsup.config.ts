import { defineConfig } from "tsup";

var isRelease = process.env.RELEASE ? true : false;

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: !isRelease,
  silent: isRelease,
  clean: true,
  treeshake: isRelease,
});
