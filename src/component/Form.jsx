import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {

	const [name, setName] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const dispatch = useDispatch();

	const addContact = (event)=>{
		event.preventDefault();
		dispatch({
			type : 'ADD_CONTACT',
			payload : {
				name,
				phoneNumber
			}
		});
	}

	return (
		<>
			<form onSubmit={addContact}>
				<label>
					<em>이름</em>
					<input type="text" onChange={(event)=>setName(event.target.value)}/>
				</label>
				<label>
					<em>연락처</em>
					<input type="text" onChange={(event)=>setPhoneNumber(event.target.value)}/>
				</label>
				<button type="submit">확 인</button>
			</form>
		</>
	)
}

export default Form