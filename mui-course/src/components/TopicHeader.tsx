import TopicMetaDataType from '../models/TopicsMetaDataType';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

function TopicHeader(props: TopicMetaDataType) {
    return (
        <div>
            <Button 
                variant="text" 
                href={props.link} 
                disableElevation 
                disableRipple
                endIcon={<LaunchIcon/>}
                target='_Blank'
            >
                {props.title}
            </Button>
        </div>
    );
}

export default TopicHeader;