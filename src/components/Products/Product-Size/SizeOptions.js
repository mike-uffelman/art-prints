import classNames from "classnames";

export default function SizeOptions({size, selected, index, product, updatePrice, className}) {
    // console.log(size)
    console.log(product)
    
    // console.log(size)

    const sizeAmt = product ? (Number(product.base_amt) * size.price_multiplier).toFixed(2) : null

    const classes = classNames(className)

    const handleClick = () => {
        if(!selected) return; // selected callback is not defined on the label dropdown, so if clicked just return

        selected(index)
        updatePrice(size)
    }


    return (
        <div className={classes} onClick={() => handleClick(index)}>
            {size.width}" x {size.height}" - {sizeAmt}
        </div>
    )
}