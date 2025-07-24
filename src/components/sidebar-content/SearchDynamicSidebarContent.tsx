'use client';

import { ReactNode } from 'react';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../Button';

export default function SearchDynamicSidebarContent(): ReactNode {
    return (
        <div className="flex flex-col">
            <SignedOut>
                <span className="text-red-600 text-center text-sm">
                  Authorize to save your search history  
                </span>
                <Button className="w-2/3 mx-auto">
                    Sign In / Sign Up
                </Button>
            </SignedOut>
            <h2 className="px-2 py-3 my-3 text-left text-base text-primary font-semibold border-b border-primary">
                Search History
            </h2>
            <p>Here I have to write the code to display the browsing history</p>
        </div>
    );
}
