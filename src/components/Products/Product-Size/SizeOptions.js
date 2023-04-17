

export default function SizeOptions({size, selected, index, product, updatePrice}) {
    // console.log(size)
    console.log(product)
    
    console.log(size)

    const sizeAmt = product ? (Number(product.base_amt) * size.price_multiplier).toFixed(2) : null

    const handleClick = () => {
        selected(index)
        updatePrice(size)
    }


    return (
        <div className="size__dropdown--option" onClick={() => handleClick(index)}>
            {size.width}" x {size.height}" - {sizeAmt}
        </div>
    )
}