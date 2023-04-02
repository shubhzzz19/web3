import React,{useState,useEffect} from 'react'
import Insta from '../assets/owner/instagram.png'
import Twit from '../assets/owner/twitter.png'
import More from '../assets/owner/more.png'
import './Main.css'
const Main = ({selectedContent,listData}) => {
    const [activeContent, setActiveContent]=useState(listData[0])

    useEffect(()=>{ 
        setActiveContent(listData[selectedContent])
    },[listData,selectedContent])
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='contentHighlight'>
                    <div className='contentContainer'>
                        <img 
                            className='selectedContent' 
                            src={activeContent.image_original_url}
                        />
                    </div>
                </div>
                <div className='textContainer'>
                    <div 
                        className='contentDetails'
                        >
                        <div className='title'>
                            {activeContent.name}
                        </div>
                        <span className='itemNumber'>*#{activeContent.token_id}</span>
                    </div>
                    
                    <div className='owner'>
                        <div className='ownerImgContainer'>
                            <img 
                                className='selectedContent' 
                                src={activeContent.owner.profile_image_url}
                            />
                        </div>

                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div>{activeContent.owner.address}</div>
                                <div className='ownerHandle'>@Shubhzzz</div>
                            </div>
                            <div className='owerlink'>
                                <img src={Insta}/>
                            </div>
                            <div className='owerlink'>
                                <img src={Twit}/>
                            </div>
                            <div className='owerlink'>
                                <img src={More}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Main 
