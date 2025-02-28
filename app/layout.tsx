import { Header } from '@/app/components/header/header';
import { Sidebar } from '@/app/components/sidebar/sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckoutModal } from './components/modals/checkout-modal/checkout-modal';
import { SignInModal } from './components/modals/sign-in-modal/sign-in-modal';
import './globals.css';
import StoreProvider from './store-provider';

const inter = Inter({ subsets: ['latin'], weight: ['200', '300'] });

export const metadata: Metadata = {
	title: 'ANVERSO',
	description: 'A fashion hub and marketplace',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} font-extralight antialiased`}>
				<StoreProvider>
					<Sidebar />
					<ToastContainer
						progressStyle={{ background: 'black' }}
						position="bottom-left"
						autoClose={4000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
						transition={Slide}
					/>
					<SignInModal />
					<CheckoutModal />
					<Header />
					<main className="w-full text-center" style={{ minHeight: '88vh' }}>
						{children}
					</main>
				</StoreProvider>
			</body>
		</html>
	);
}
