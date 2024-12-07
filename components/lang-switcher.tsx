// "use client";

// export const LangSwitcher = () => {
//     return (
//         <div className="actions dropdown options switcher-options relative group">
//             <div className="cursor-pointer">
//                 <span>EN</span>
//             </div>
//             <ul className="dropdown switcher-dropdown hidden group-hover:block absolute bg-white shadow-lg p-2">
//                 <li className="text-base">
//                     <a href="/"> DE </a>
//                 </li>
//                 <li className="text-base">
//                     <a href="/"> RU </a>
//                 </li>
//                 <li className="text-base">
//                     <a href="/"> UA </a>
//                 </li>
//             </ul>
//         </div>
//     )
// }

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

// "use client";

// // import { useLocale } from "next-intl";
// import { useParams, usePathname, useRouter } from "next/navigation";
// import { ChangeEvent, ReactNode, useTransition } from "react";

// type Props = {
//     children: ReactNode;
//     defaultValue: string;
//     label: string;
// }

// export default function LangSwitcher({
//     children,
//     defaultValue,
//     label
// }: Props) {
//     const [ isPending, startTransition ] = useTransition();
//     const router = useRouter();
//     // const localActive = useLocale();
//     const pathname = usePathname();
//     const params = useParams();

//     const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         const nextLocal = e.target.value;
//         startTransition(() => {
//             router.replace(
//                 // @ts-ignore
//                 {pathname, params},
//                 {locale:nextLocal}
//             )
//         })
//     }

//     return (
//         <label className="border-2 rounded">
//             <p className="sr-only">{label}</p>
//             <select defaultValue={defaultValue}  
//                     className="bg-transparent py-2"
//                      onChange={onSelectChange}
//                      disabled={isPending}>
//                 {/* <option value="uk">UK</option>
//                 <option value="en">EN</option> */}
//                 {children}
//             </select>
//             <span className="pointer-events-none absolute right-2 top-[8px]"></span>
//         </label>
//     )
// }