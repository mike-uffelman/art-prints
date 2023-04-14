

export default function SizeOptions({size, selected, index}) {

    return (
        <div className="size__dropdown--option" onClick={() => selected(index)}>
            {size.width}" x {size.height}" - {size.price_multiplier}
        </div>
    )
}