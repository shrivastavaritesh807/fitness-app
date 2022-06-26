import {Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';
const BodyPart = ({item,setBodyPart,bodyPart}) => {
    return( 
        <>
         <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card"
         sx={{
             borderTop: bodyPart === item ? '4px solid #ff2625' : '',
             backgroundColor:'#fff',
             borderBottomLeftRadius:'20px',
             width:'120px',
             height:'160px',
             cursor:'pointer',
             gap:'17px'
         }}
         onClick = {() => {setBodyPart(item)}}
         >
             <img src={Icon} alt="dumbell" style={{width:'40px',height:'40px'}}/>
             <Typography fontSize="17px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
                 {item}
             </Typography>
         </Stack>
        </>
    )
}

export default BodyPart