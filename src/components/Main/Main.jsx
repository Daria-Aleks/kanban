import Column from "../Column/Column";

export default function Main ({cardList, statusList, loading}){
    
    return (
        <main className="main">
			<div className="container">			
				<div className="main__block">
					<div className="main__content">
                        {loading ? statusList.map((status)=>(
                            <Column
                                key={status}
                                title={status}
                                cardList={cardList.filter((card) => card.status === status)}

                            />	
                        )) : "Данные загружаются"}	
					</div>
				
				</div>
			</div>
		</main>
    )
}