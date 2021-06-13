import React, {useState, useEffect} from 'react';
import {formatDateTime} from '../engine/functions';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '20px 0',
    }
  }));

export const List = ({data, count, pageNumber, setPageNumber}) => {

    const [records, setRecords] = useState(data);
    const [rCount, setRCount] = useState(count);

    const recordsPerPage = 10;

    const pageCount = Math.ceil(rCount / recordsPerPage);

    useEffect(() => {
        setRecords(data);
    }, [data]);

    useEffect(() => {
        setRCount(count);
    }, [count]);

    const classes = useStyles();

    if(!records.length) {
        return <p>Записей не обнаружено</p>;
    }

    const displayRecords = records
        .map((record, key) => {
            let id = record.url.replace('http://swapi.dev/api/people/', '');
            id = id.replace('/', '');
            console.log(id);
            return (
                <Link key={key} to={`/vehicles/${id}`}>
                <div className="item">
                    <div className="title">{record.name}</div>
                    <div className="content">
                        <div className="side">
                            <div className="option">
                                <span>Height</span>
                                <p>{record.height}</p>
                            </div>
                            <div className="option">
                                <span>Mass</span>
                                <p>{record.mass}</p>
                            </div>
                            <div className="option">
                                <span>Hair color</span>
                                <p>{record.hair_color}</p>
                            </div>
                            <div className="option">
                                <span>Skin color</span>
                                <p>{record.skin_color}</p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="option">
                                <span>Eye color</span>
                                <p>{record.eye_color}</p>
                            </div>
                            <div className="option">
                                <span>Birth year</span>
                                <p>{record.birth_year}</p>
                            </div>
                            <div className="option">
                                <span>Gender</span>
                                <p>{record.gender}</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <span>{formatDateTime(record.edited)}</span>
                    </div>
                </div>
                </Link>
            )
        });

    const pageHandler = (event, value) => {
        setPageNumber(value);
    }

    return (
        <div>
            <div className="items">
                {displayRecords}
            </div>

            <Pagination
                count={pageCount}
                color="primary"
                className={classes.pagination}
                onChange={pageHandler}
            />
        </div>
    )
}