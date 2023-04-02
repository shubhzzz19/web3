import React from 'react'
import { CardCollection } from './CardCollection'
import './List.css'
const List = ({listData,setSelectedContent}) => {
    return (
        <div className='list'>
            {listData.map(content => (
                <div onClick={()=>setSelectedContent(content.token_id)}>
                    <CardCollection
                        key={content.token_id}
                        name={content.name}
                        traits={content.traits}
                        image={content.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default List
