import React from "react"


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`/assets/${props.item.coverImg}`}/>
            <div className="card--stats">
                <img className="card--star" src="\assets\star.png" />
                <span>{props.item.stats.rating}</span>
                <span>({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
            </div>
        </div>
    )
}