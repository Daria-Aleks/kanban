import Card from "../Card/Card";

export default function Column({cardList}){
	
    return (
        <div className="main__column">
							<div className="column__title">
								<p>Нужно сделать</p>
							</div>
							<div className="cards">
								<div className="cards__item">
								<div className="cards">
									{cardList.map((card) => (
									<Card name={card.title}
									theme={card.theme}
									date={card.date}
									key={card.id}/> ))}
								</div>
								</div>
							</div>
						</div>
    )
}