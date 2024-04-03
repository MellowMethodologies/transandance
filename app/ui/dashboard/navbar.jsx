import Image from 'next/image';
import './style/navbar.css';

export default function navBar(){	
	return(
		<section className="navbar">
			<div className="logo">
				<Image src="/42_Logo 1.svg" alt="42 Logo" width={200} height={200}/>
			</div>
			<div className="nav-items">
				<ul>
					<li className="icons"><a href="#">
						<Image className="house" src='/house.svg' alt='house' width={25} height={25}/></a></li>
					<li className="icons"><a href="#">
						<Image className="message" src='/message.svg' alt='message' width={25} height={25}/></a></li>
					<li className="icons"><a href="#">
						<Image className="gamepad" src='/gamepad.svg' alt='gamepad' width={25} height={25}/></a></li>
					<li className="icons"><a href="#">
						<Image className="Vector" src='/Vector.svg' alt='Vector' width={25} height={25}/></a></li>
				</ul>
			</div>
			<div className="nav-btn">
				<a href="#">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} 
			stroke="currentColor" className="w-6 h-6">
  			<path strokeLinecap="round" strokeLinejoin="round" 
  			d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
			</svg></a>
			</div>
		</section>
	);
}
