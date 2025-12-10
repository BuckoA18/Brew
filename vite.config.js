import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				includePaths: [path.resolve(__dirname, "node_modules")],
			},
		},
	},
});
