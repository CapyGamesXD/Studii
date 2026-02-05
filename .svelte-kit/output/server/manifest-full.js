export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.ClHkD8sh.js",app:"_app/immutable/entry/app.Gm9eygGf.js",imports:["_app/immutable/entry/start.ClHkD8sh.js","_app/immutable/chunks/C1gW_S5k.js","_app/immutable/chunks/BZcCGWcW.js","_app/immutable/chunks/Bh0wjh_e.js","_app/immutable/entry/app.Gm9eygGf.js","_app/immutable/chunks/BZcCGWcW.js","_app/immutable/chunks/TF8SAySS.js","_app/immutable/chunks/BHMlRAwW.js","_app/immutable/chunks/Bh0wjh_e.js","_app/immutable/chunks/BrW5Xsb6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
