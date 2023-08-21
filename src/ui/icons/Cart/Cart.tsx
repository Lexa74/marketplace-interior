import './cart.scss'

interface CartProps {
    toggleActive?: boolean
}

export const Cart = ({toggleActive = false}: CartProps) => {
    return (
        <svg className={`svg-cart ${toggleActive ? 'active' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_30)">
                <path className='svg-path' d="M7.00001 8V6C7.00001 4.67392 7.06232 2.93768 8.00001 2C8.93769 1.06232 10.6739 1 12 1C13.3261 1 15.0623 1.06232 16 2C16.9377 2.93768 17 4.67392 17 6V8H20C20.2652 8 20.8125 7.81246 21 8C21.1875 8.18754 21 8.73478 21 9V21C21 21.2652 21.1875 21.8125 21 22C20.8125 22.1875 20.2652 22 20 22H4.00001C3.73479 22 3.18754 22.1875 3.00001 22C2.81247 21.8125 3.00001 21.2652 3.00001 21V9C3.00001 8.73478 2.81247 8.18754 3.00001 8C3.18754 7.81246 3.73479 8 4.00001 8H7.00001ZM7.00001 10H5.00001V20H19V10H17V12H15V10H9.00001V12H7.00001V10ZM9.00001 8H15V6C15 5.20435 14.5626 4.56261 14 4C13.4374 3.43739 12.7957 3 12 3C11.2044 3 10.5626 3.43739 10 4C9.4374 4.56261 9.00001 5.20435 9.00001 6V8Z"/>
            </g>
            <defs>
                <clipPath id="clip0_1_30">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}