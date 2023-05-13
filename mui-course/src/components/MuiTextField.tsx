import { Box, InputAdornment, Stack, TextField } from '@mui/material';
import TopicMetaDataType from '../models/TopicsMetaDataType';
import TopicHeader from './TopicHeader';
import SubTopicHeader from './SubTopicHeader';
import { useState } from 'react';

function MuiTextField(props: TopicMetaDataType) {

    const [value, setValue] = useState<string>("");

    return (
        <div>
            <TopicHeader title={props.title} link={props.link} />

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Text Field variants" />
                <Stack sx={{backgroundColor:'#fbfbfb', p:3, borderRadius:'5px'}} direction='row' spacing={2}>
                    <TextField color='primary' label='outlined (default)' variant="outlined" />
                    <TextField color='secondary' label='filled' variant="filled" />
                    <TextField color='error' label='standard' variant="standard" />
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Text Field sizes" />
                <Stack sx={{backgroundColor:'#fbfbfb', p:3, borderRadius:'5px'}} direction='row' spacing={2}>
                    <TextField color='success' label='small' size='small' variant="outlined" />
                    <TextField color='warning' label='medium (default)' size='medium' variant="outlined" />
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Form Input" />
                <Stack sx={{backgroundColor:'#fbfbfb', p:3, borderRadius:'5px'}} direction='column' spacing={2}>
                    <TextField label="required" required />
                    <TextField label="form input" helperText="text fild with helper text" />
                    <TextField label="password" helperText="do not share" type='password' />
                    <TextField label='disabled' disabled />
                    <TextField defaultValue="default value" />
                    <TextField label='number' type='number' defaultValue="" />
                    <TextField inputProps={{ readOnly: true }} value='this input field is read only'/>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Input Adornments" />
                <Stack sx={{backgroundColor:'#fbfbfb', p:3, borderRadius:'5px'}} direction='column' spacing={2}>
                    <TextField label='amount' InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }} />
                    <TextField label='weight' InputProps={{
                        endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,
                    }} />
                </Stack>
                <SubTopicHeader title="Error State" />
                <Stack sx={{backgroundColor:'#fbfbfb', p:3, borderRadius:'5px'}} direction='column' spacing={2}>
                    <TextField 
                        label="required" 
                        required
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        error={!value}
                        helperText={!value ? 'Required, cannot be blank.' : 'helper text for input field'}
                    />
                </Stack>
            </Box>
        </div>
    );
}

export default MuiTextField;