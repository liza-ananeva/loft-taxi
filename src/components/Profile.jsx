import React, { PureComponent } from 'react';
import { Grid, Paper, Typography, Card, Box, TextField, Button } from '@material-ui/core';
import { MCIcon } from 'loft-taxi-mui-theme';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    profile: {
        display: 'flex'
    },
    grid: {
        width: '752px',
        height: '553px',
        display: 'flex'
    },
    paper: {
        height: '369px',
        backgroundColor: '#fff',
        padding: '44px 60px',
        margin: 'auto 0'
    },
    subtitle: {
        marginBottom: '40px'
    },
    card: {
        width:  '236px',
        height: '157px',
        padding: '16px 32px',
        position: 'relative'
    },
    box: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#ffc617',
        padding: '6px 16px',
        marginTop: '41px',
        marginLeft: '8px'
    }
});

class Profile extends PureComponent {
    render() {
        const { profile, grid, paper, subtitle, card, box, button } = this.props.classes;

        return (
            <div className='wrapper'>
                <section className={profile}>
                    <Grid container justify='center'>
                        <Grid item className={grid}>
                            <Paper className={paper}>
                                <Typography variant='h4' align='center'>Профиль</Typography>
                                <Typography variant='body1' align='center' color='textSecondary' className={subtitle}>Способ оплаты</Typography>
                                <form>
                                    <Grid container>
                                        <Grid item>
                                            <Grid container justify='space-between' spacing={4}>
                                                <Grid item>
                                                    <Card className={card} elevation={3}>
                                                        <MCIcon />
                                                        <Box className={box}>
                                                            <TextField
                                                                required
                                                                label='Номер карты'
                                                                placeholder='0000 0000 0000 0000'
                                                            />
                                                            <TextField
                                                                required
                                                                label='Срок действия'
                                                            />
                                                        </Box>
                                                    </Card>
                                                </Grid>
                                                <Grid item>
                                                    <Card className={card} elevation={3}>
                                                        <Box className={box}>
                                                            <TextField
                                                                required
                                                                label='Имя владельца'
                                                                placeholder='USER NAME'
                                                            />
                                                            <TextField
                                                                required
                                                                label='CVC'
                                                                placeholder='CVC'
                                                            />
                                                        </Box>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                            <Grid align='center'>
                                                <Button type='submit' className={button}>
                                                    Сохранить
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);