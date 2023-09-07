import React, {useState} from 'react';
import cn from 'classnames';

import styles from './Pagination.module.css';

type PropsType = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = (props: PropsType) => {
    const {
        currentPage,
        pageSize,
        totalItemsCount,
        portionSize = 10,
        onPageChanged
    } = props

    const onClickPrevHandler = () => {
        setPortionNumber(portionNumber - 1)
    }

    const onClickNextHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    const onPageChangedHandler = (pageNumber: number) => {
        onPageChanged(pageNumber)
    }

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
            <div className={styles.pagination}>
                {portionNumber > 1 &&
                    <button className={styles.button} onClick={onClickPrevHandler}>PREV</button>
                }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p, i) => {
                        return (
                            <span key={i}
                                  className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                                  onClick={() => onPageChangedHandler(p)}
                            >
                                {p}
                            </span>
                        )
                    })}
                {portionCount > portionNumber &&
                    <button className={styles.button} onClick={onClickNextHandler}>NEXT</button>
                }
            </div>
    );
}