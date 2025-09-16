import React, { useState } from "react";

const CartTile = ({ item, onQtyChange, onRemove }) => {
	const [qty, setQty] = useState(item.qty);

	const handleIncrease = () => {
		const newQty = qty + 1;
		setQty(newQty);
		onQtyChange(item.productId, newQty);
	};

	const handleDecrease = () => {
		if (qty > 1) {
			const newQty = qty - 1;
			setQty(newQty);
			onQtyChange(item.productId, newQty);
		}
	};

	return (
		<div className="flex items-center gap-4 p-4 border-b">
			<img
				src={item.imageUrl}
				alt={item.name}
				className="w-20 h-20 object-cover rounded"
			/>
			<div className="flex-1">
				<h3 className="font-bold text-lg">{item.name}</h3>
				<p className="text-sm text-gray-500">{item.description}</p>
				<div className="flex items-center gap-2 mt-2">
					<button className="btn btn-sm btn-outline" onClick={handleDecrease} disabled={qty === 1}>-</button>
					<span className="font-bold text-lg">{qty}</span>
					<button className="btn btn-sm btn-outline" onClick={handleIncrease}>+</button>
				</div>
			</div>
			<div className="flex flex-col items-end">
				<span className="font-bold text-base mb-2">Rs.{item.Price}</span>
				<button className="btn btn-xs btn-error" onClick={() => onRemove(item.productId)}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartTile;
