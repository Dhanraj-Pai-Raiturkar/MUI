import { Typography } from '@mui/material';
import SubTopicMetaDataTypes from '../models/SubTopicMetaDataTypes';

function SubTopicHeader(props: SubTopicMetaDataTypes) {
    return (
        <div>
            <Typography variant='subtitle1' sx={{textAlign:'left'}} gutterBottom>{props.title}</Typography>
        </div>
    );
}

export default SubTopicHeader;