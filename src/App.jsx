import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import data from "./data"


export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        item = {item}   //{...item} and remove .item from card.jsx
      />
    )
  })

  return (
      <div className="container">
        <Navbar />

        <Hero />

        <section className="cards-list">
          {cards}
        </section>
      </div>
  )
}