import { Typography } from '@mui/material';
import TopicHeader from './TopicHeader';
import TopicMetaDataType from '../models/TopicsMetaDataType';

function MuiTypography(props: TopicMetaDataType) {
    return (
        <div>
            <TopicHeader title={props.title} link={props.link} />

            <Typography variant='h1'>h1 (semantic h1)</Typography>
            <Typography variant='h2'>h2 (semantic h2)</Typography>
            <Typography variant='h3'>h3 (semantic h3)</Typography>
            <Typography variant='h4'>h4 (semantic h4)</Typography>
            <Typography variant='h5'>h5 (semantic h5)</Typography>
            <Typography variant='h6' gutterBottom>h6 (semantic h6)</Typography>

            <Typography variant="subtitle1">subtitle1 (semantic h6)</Typography>
            <Typography variant="subtitle2" gutterBottom>subtitle2 (semantic h6)</Typography>

            <Typography variant='body1'>body1 (default for Typography if no variant specified)</Typography>
            <Typography variant='body1'>body2</Typography>
        </div>
    );
}

export default MuiTypography;