import { defineConfig } from 'tsup'

export default defineConfig({
   entry: ['src/index.ts'],
   splitting: true,
   sourcemap: true,
   clean: true,
   dts: true,
   format: ["cjs", "esm"],
   minify: true,
   outDir: "dist",
   treeshake: true,
   jsxFragment: "React.Fragment",
   legacyOutput: true,
   tsconfig: "./tsconfig.json",
})