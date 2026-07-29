import type { SVGProps } from "react";

export function MenuSvg(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
            />
        </svg>
    );
}

export function CrossMenuSvg(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-x w-8 h-8 text-black cursor-pointer">
            <path d="M18 6 6 18">
            </path><path d="m6 6 12 12">
            </path>
        </svg>
    )

}