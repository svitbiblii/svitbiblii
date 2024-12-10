"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export const LangSwitcher = () => {
    const [ isPending, startTransition ] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocal = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocal}`)
        })
    }

    return (
        <label className="border-2 rounded">
            <p className="sr-only">change language</p>
            <select defaultValue={localActive}  
                    className="bg-transparent py-2"
                     onChange={onSelectChange}
                     disabled={isPending}>
                <option value="uk">UK</option>
                <option value="en">EN</option>
            </select>
        </label>
    )
}