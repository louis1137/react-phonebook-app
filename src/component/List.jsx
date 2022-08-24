import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

const List = () => {
	const contactList = useSelector(state=>state.contactList);
	return (
		<>
			<div className="list_inner">
				<div className="search_area">
					<form action="">
						<input type="text"/>
						<button>검색</button>
					</form>
				</div>
				<div className="list_area">
					<ul>
						{
							contactList.map((item, index)=>(
								<Item key={index} item={item}></Item>
							))
						}
					</ul>
				</div>
			</div>
		</>
	)
}

export default List