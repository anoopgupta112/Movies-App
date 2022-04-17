import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Artist from "../../common/Artist";
import Genres from "../../common/Genre";
import { Button } from '@mui/material';



const useStyles = makeStyles((theme) => ({
    formControl: {

        marginTop: 5,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function FindMovie() {
    const classes = useStyles();
    const [personNameArtist, setPersonNameArtist] = useState([]);

    const handleChangeForArtist = (event) => {
        setPersonNameArtist(event.target.value);
    };
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };
    return (
        <Card>

            <form action='/Search' method='GET' style={{ "display": "flex", "flex-direction": "column" }} className="content">
                <h3 style={{ "display": "inline", "color": "#87CEEB" }}>FIND MOVIE BY</h3>
                <div>

                    <input type="Text" placeholder='Movie Name' />
                </div>

                <div>

                    <FormControl className={classes.formControl} style={{ width: 225 }}>
                        <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={personNameArtist}
                            onChange={handleChangeForArtist}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {Artist.map((name) => (
                                <MenuItem key={name.first_name + " " + name.last_name} value={name.first_name + " " + name.last_name}>
                                    <Checkbox checked={personNameArtist.indexOf(name.first_name + " " + name.last_name) > -1} />
                                    <ListItemText primary={name.first_name + " " + name.last_name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>



                    <FormControl className={classes.formControl} style={{ width: 225 }}>
                        <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {Genres.map((name) => (
                                <MenuItem key={name.name} value={name.name}>
                                    <Checkbox checked={personName.indexOf(name.name) > -1} />
                                    <ListItemText primary={name.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </div>
                <div>
                    <label style={{ "display": "inline" }}>
                        Release Date Start

                        <input type="date"></input></label>
                </div>
                <div>

                    <label style={{ "display": "inline" }}>
                        Release Date End
                        <input type="date"></input>
                    </label>
                </div>

                <Button type="submit" variant="contained" style={{ width: 200, margin: 15, marginTop: 30 }} color="primary">
                    APPLY
                </Button>

            </form>


        </Card >
    )
}
