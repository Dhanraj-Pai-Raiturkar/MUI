import { Box, Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import TopicHeader from './TopicHeader';
import TopicMetaDataType from '../models/TopicsMetaDataType';
import SubTopicHeader from './SubTopicHeader';
import InstagramIcon from '@mui/icons-material/Instagram';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BackHandIcon from '@mui/icons-material/BackHand';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { useState } from 'react';

function MuiButtons(props: TopicMetaDataType) {
    
    const [brightness, setBrightness] = useState<string | null>(null);
    const [format, setFormat] = useState<string[] | null>(null);

    const handleBrightness = (event: React.MouseEvent<HTMLElement>, updatedBrightness: string) => {
        setBrightness(updatedBrightness);
    }

    const handleFormat = (event: React.MouseEvent<HTMLElement>, updatedFormat: string[]) => {
        setFormat(updatedFormat);
    }
    
    return (
        <div>
            <TopicHeader title={props.title} link={props.link} />
            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button variants" />
                <Stack direction='row' spacing={2}>
                    <Button variant='text'>text</Button>
                    <Button variant='contained'>contained</Button>
                    <Button variant='outlined'>outlined</Button>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button sizes" />
                <Stack direction='row' spacing={2} padding={1}>
                    <Button variant='text' size='small'>small</Button>
                    <Button variant='text' size='medium'>medium</Button>
                    <Button variant='text' size='large'>large</Button>
                </Stack>
                <Stack direction='row' spacing={2} padding={1}>
                    <Button variant='contained' size='small'>small</Button>
                    <Button variant='contained' size='medium'>medium</Button>
                    <Button variant='contained' size='large'>large</Button>
                </Stack>
                <Stack direction='row' spacing={2} padding={1}>
                    <Button variant='outlined' size='small'>small</Button>
                    <Button variant='outlined' size='medium'>medium</Button>
                    <Button variant='outlined' size='large'>large</Button>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button colors (text)" />
                <Stack direction='row' spacing={2}>
                    <Button variant='text' color='primary'>primary</Button>
                    <Button variant='text' color='secondary'>secondary</Button>
                    <Button variant='text' color='error'>error</Button>
                    <Button variant='text' color='warning'>warning</Button>
                    <Button variant='text' color='info'>info</Button>
                    <Button variant='text' color='success'>success</Button>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button colors (contained)" />
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' color='primary'>primary</Button>
                    <Button variant='contained' color='secondary'>secondary</Button>
                    <Button variant='contained' color='error'>error</Button>
                    <Button variant='contained' color='warning'>warning</Button>
                    <Button variant='contained' color='info'>info</Button>
                    <Button variant='contained' color='success'>success</Button>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button colors (outlined)" />
                <Stack direction='row' spacing={2}>
                    <Button variant='outlined' color='primary'>primary</Button>
                    <Button variant='outlined' color='secondary'>secondary</Button>
                    <Button variant='outlined' color='error'>error</Button>
                    <Button variant='outlined' color='warning'>warning</Button>
                    <Button variant='outlined' color='info'>info</Button>
                    <Button variant='outlined' color='success'>success</Button>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button Anchor (with icon)" />
                <Stack direction='row' spacing={2}>
                    <TopicHeader title={props.title} link={props.link} />
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Icon Buttons" />
                <Stack direction='row' spacing={2}>
                    <IconButton color='primary' href='http://www.facebok.com' target='_blank'>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color='secondary' href='http://www.instagram.com' target='_blank'>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color='error' href='http://www.youtube.com' target='_blank'>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton color='warning'>
                        <AudiotrackIcon />
                    </IconButton>
                    <IconButton color='info'>
                        <BeachAccessIcon />
                    </IconButton>
                    <IconButton color='success'>
                        <BackHandIcon />
                    </IconButton>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button Group (orientation: horizontal) [default]" />
                <Stack direction='row' spacing={2}>
                    <ButtonGroup variant='contained' color='success'>
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Button Group (orientation: vertical)" />
                <Stack direction='row' spacing={2}>
                    <ButtonGroup variant='contained' color='error' orientation='vertical'>
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Toggle Buttons (ToggleButtonGroup | Exclusive)" />
                <Stack direction='row' spacing={2}>
                    <ToggleButtonGroup 
                        value={brightness}
                        onChange={handleBrightness}
                        sx={{color:'black', border:'1px solid white'}}
                        exclusive
                    >
                        <ToggleButton value='1' sx={{backgroundColor:'white'}}><Brightness5Icon sx={{color:'grey'}} /></ToggleButton>
                        <ToggleButton value='2' sx={{backgroundColor:'white'}}><Brightness6Icon sx={{color:'grey'}} /></ToggleButton>
                        <ToggleButton value='3' sx={{backgroundColor:'white'}}><Brightness7Icon sx={{color:'grey'}} /></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>

            <Box sx={{mb:3}}>
                <SubTopicHeader title="Toggle Buttons (ToggleButtonGroup | Multi-Select)" />
                <Stack direction='row' spacing={2}>
                    <ToggleButtonGroup 
                        value={format}
                        onChange={handleFormat}
                        sx={{color:'black', border:'1px solid white'}}
                        orientation='vertical'
                    >
                        <ToggleButton value='1' sx={{backgroundColor:'white'}}><FormatBoldIcon sx={{color:'grey'}} /></ToggleButton>
                        <ToggleButton value='2' sx={{backgroundColor:'white'}}><FormatItalicIcon sx={{color:'grey'}} /></ToggleButton>
                        <ToggleButton value='3' sx={{backgroundColor:'white'}}><FormatUnderlinedIcon sx={{color:'grey'}} /></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>
        </div>
    );
}

export default MuiButtons;