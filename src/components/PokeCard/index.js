import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: 20,
        marginButtom: 20,
    },
    media: {
        height: 320,
    },
});

const PokeCard = ({ name, image, abilities, types }) => {
    const classes = useStyles();

    function getId(text) {
        let l = text.length
        let tmp = text.substring(0, l - 1)
        let n = tmp.lastIndexOf("/")
        let id = tmp.substring(n + 1)
        return id
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Abilities :
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {abilities.map((e) => {
                            return `${e.ability.name}, `
                        })}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {types.map(t => {
                    return (
                        <Link key={t.type.name} href={`/?type=${getId(t.type.url)}`} >
                            <Button size="small" color="primary" >
                                {t.type.name}
                            </Button>
                        </Link>
                    )
                })}
            </CardActions>
        </Card>
    );
}

export default PokeCard;