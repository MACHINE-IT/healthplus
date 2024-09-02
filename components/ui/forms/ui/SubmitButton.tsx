import Image from 'next/image'
import React from 'react'
import { Button } from '../../button'

interface ButtonProps {
    isLoading: boolean,
    className?: string,
    children: React.ReactNode
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
    return (
        <Button type="submit" disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
            {isLoading ? (
                <div>
                    <Image
                        src="/assets/icons/loader.svg"
                        alt="loader"
                        height={24}
                        width={24}
                    /> Loading ...
                </div>
            ) : children}
        </Button>
    )
}

export default SubmitButton