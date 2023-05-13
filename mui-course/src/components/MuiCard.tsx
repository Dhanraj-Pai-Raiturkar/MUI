import { Card } from '@mui/material';

function MuiCard(props: any) {
    return (
        <div>
            <Card sx={{backgroundColor:'rgb(18, 18, 18)', color:'rgb(255, 255, 255)', px:4, py:2, mb:8}}>
                {props.children}
            </Card>
        </div>
    );
}

export default MuiCard;