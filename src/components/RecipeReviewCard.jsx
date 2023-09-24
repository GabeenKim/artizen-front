import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[parseInt(props.colorNum)] }}
            aria-label="recipe"
          >
            {props.isSuccess}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={''.concat(' [ ', props.category, ' ] ', props.contentName)}
        subheader={''.concat(props.start, ' ~ ', props.end)}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://spring-s3-artizen.s3.ap-northeast-2.amazonaws.com/956e71c2-7867-42f1-b5f1-2d98c25766d9.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography>♥ 350 </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: '20px', marginTop: '9px' }}
        >
          나의 수익률 : <b> {props.percent} % </b>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: '20px', marginTop: '9px' }}
        >
          최종 모집 금액 :{' '}
          <b> {parseInt(props.contentSum).toLocaleString('ko-KR')} 원 </b>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RecipeReviewCard;
