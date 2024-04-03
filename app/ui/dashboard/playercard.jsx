import React from 'react'
import './style/playercard.css'
import Image from 'next/image'
import Button from './button';


const playername = "kelly";

function Player(props){
    return(
      <div>
        <Image src={props.src} alt={props.alt} />
        <Button />

        <h4>{props.name}</h4>
      </div>
    )
}

export default function PlayerCard() {
  return (
    <section className="playerCard">
        <div className="player">
           <Player props={{src:'/player.png', alt:"player"}}/>
           <p>{playername}</p>
        </div>
    </section>
  )
}
