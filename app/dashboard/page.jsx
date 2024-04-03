import React from 'react';
import './dash.css';
// import Image from 'next/image';
import PlayerCard from '../ui/dashboard/playercard.jsx';
import NavBar from '../ui/dashboard/navbar.jsx';

export default function Page(){
	return(
		<body>
			<PlayerCard />
			<NavBar />
		</body>
	)
}
