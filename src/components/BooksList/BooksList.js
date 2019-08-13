import React, { Component } from 'react';
import './BooksList.css';

export default class BooksList extends Component {

    constructor(props) {
        super(props);
    }

    onSelectItem = (item) => {
        const { onSelectItem } = this.props;
        if (onSelectItem) {
            onSelectItem(item);
        }
    }

    onDeleteItem = (item, i) => {
        const { onDeleteItem } = this.props;
        if (onDeleteItem) {
            onDeleteItem(item, i);
        }
    }

    render() {
        const { books, onNewItem } = this.props;
        const items = books.map((p, i) => {
            return <div key={i} className="item-relative">
                <div  index={i} className="icon-close" onClick={this.onDeleteItem.bind(this, p, i)}><div>x</div> </div>
                <a id={p.id} href="javascript:;" className="item-book" onClick={this.onSelectItem.bind(this, p)}>
                    <img src={p.imgUrl} />
                    <div>
                        <div className="title"> {p.title}</div>
                    </div>
                </a>
            </div>
        });

        return (
            <div className="books-list">
                {items}
                <div className="add-new-button-content">
                    <button onClick={onNewItem}>+</button>
                </div>
            </div>
        )
    }
}
