// See https://svelte.dev/docs/kit/types#app.d.ts[]
// for information about these interfaces
//

import type { getDrizzle } from '$lib/server/db';

declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}

		interface Locals {
			database: ReturnType<typeof getDrizzle>;
		}
	}
}

export {};
