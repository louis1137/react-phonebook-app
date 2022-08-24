import React from 'react'

const Item = ({item, ...props}) => {
	return (
		<li>
			<em className="name">{item.name}</em>
			<em className="phone_number">{item.phoneNumber}</em>
		</li>
	)
}

export default Item