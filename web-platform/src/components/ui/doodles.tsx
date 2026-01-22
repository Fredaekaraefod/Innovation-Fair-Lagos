export function ScribbleUnderline({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00025 7.00001C35.9189 3.03362 108.82 -2.57662 198.001 2.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export function ScribbleArrow({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 53 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 28.5C14.8333 32.8333 43.6 39.7 50 20M50 20C46.5 16 38.6 8.9 36.5 7M50 20C47.5 24.5 40.9 34.5 38 38.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function ScribbleCircle({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95 50C95 74.8528 74.8528 95 50 95C25.1472 95 5 74.8528 5 50C5 25.1472 25.1472 5 50 5C74.8528 5 95 25.1472 95 50Z" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
        </svg>
    )
}
