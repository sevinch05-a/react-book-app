import react from "react";
const Card=({book})=>{
    console.log(book)
    return(
      
        {
            book.map((item)=>{
                let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks .smallThumbnail;
                let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if(thumbnail!= undefinedn && amount !=undefined )
                {
                return(
                    <>
                    <div className="card">
                    <img src={thumbnail} alt="" />
                    <div className="bottom">
                        <h3 className="title">{item.volumeInfo.title}</h3>
                        <p className="amount">&#9654;{amount}</p>
        
                    </div>
                </div>  
                <Modal/>
                </>
                )
            }
            })
        }
        
        
    )
}