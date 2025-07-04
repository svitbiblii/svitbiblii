'use client';

import { SignIn } from '@clerk/nextjs';
// import { useState } from 'react';

export default function AuthModal() {
	// const [open, setOpen] = useState(true);

	if (!open) return null;
	// className="fixed inset-0 bg-black bg-opacity-50 z-50"
	return (
		<div
			className="flex justify-center fixed inset-0 bg-black bg-opacity-50 z-50"
			// onClick={(_) => setShowAuthForm(false)}
		>
			<div className="mt-40">
				<SignIn
					forceRedirectUrl={null}
					// afterSignIn={() => setOpen(false)}
					appearance={{
						elements: {
							card: 'shadow-none border-none',
						},
					}}
				/>
			</div>
		</div>
		// <div className="absolute bg-black bg-opacity-50 z-90" onClick={(e) => e.stopPropagation()}>

		// </div>
	);
}