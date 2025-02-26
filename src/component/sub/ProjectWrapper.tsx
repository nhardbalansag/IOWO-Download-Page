import {
    InlineContentSingleImage,
} from '../index'

import {
    getstartednew
} from '../../assets/images/IOWOReport/index'

function ProjectWrapper({
    children = <></>,
    title = "title",
    subtitle = "sub",
    bgImage = getstartednew,
    frontImage = getstartednew
}) {
  return (
    <div
    className='bg-[#F9F7F8]'
    style={{
        background: `
        linear-gradient(rgba(255,255,255, .9), 
        rgba(255,255,255, .9)), 
        url(${bgImage})`,
        
        backgroundRepeat:"repeat",
        position: 'absolute',
        backgroundSize:'50%',
        width:'100%',
    }}>
        <div className="py-8 mx-auto">
            <InlineContentSingleImage 
            image={frontImage} 
            title={title} 
            subtext={subtitle}
            textColor={'#0C0C0C'}
            />
            {children}
        </div>
    </div>
  )
}

export default ProjectWrapper