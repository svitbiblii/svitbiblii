'use client';

import { ReactNode } from 'react';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../Button';

export default function BookmarkDynamicSidebarContent(): ReactNode {
    return (
        <div className="flex flex-col">
            <SignedOut>
                <span className="text-red-600 text-center text-sm">
                  Authroize to save your bookmarks  
                </span>
                <Button className="w-2/3 mx-auto">
                    Sign In / Sign Up
                </Button>
            </SignedOut>
        </div>
    );
}
