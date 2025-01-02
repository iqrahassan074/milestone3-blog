import * as React from "react";
import { cn } from "../../lib/Utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, type, ...props}, ref) => {
        return (
            <input
            type={type}
            className={cn( "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transitin-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-forgronded placeholder:text-muted-forgrounded focus-visble:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ",
                className
            )}

            ref={ref}
            {...props}/>   
            
        );
    }
) 

Input.displayName = "input";
export {Input};