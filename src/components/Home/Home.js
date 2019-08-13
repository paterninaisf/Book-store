import React, { Component } from 'react'
import * as api from '../../api/books';
import BooksList from '../BooksList';
import BookEditDetail from '../BookEditDetail';
import _uui from 'uuid';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            currentItem: Object
        }
    }

    componentDidMount() {
        api.fetchBooks().then((r) => {
            this.setState({ books: r.data, currentItem: r.data[0] });
        });
    }

    updateItemList = (item) => {
        const newBooksList = this.state.books.map((book) => {
            if (item.id == book.id) {
                book = { ...item };
            }
            return book;
        });

        this.setState({ books: newBooksList, currentItem: item }, () => {
            this.saveBook(item);
        });
    }

    onSelectItem = (item) => {
        this.setState({ currentItem: item });
    }

    saveBook = (item) => {
        if (item.id) {
            api.updateBook(item).then((r) => {
                console.log('updated book');
            });
        } else {
            item.id = _uui.v1();
            api.addBook(item).then((r) => {
                const newItem = r.data;
                const newBooks = [...this.state.books, newItem];
                this.setState(prevState => ({
                    books: newBooks,
                    currentItem: newItem
                }))
            });
        }
    }

    onNewItem = () => {
        this.setState({ currentItem: { id: 0, title: '', autor: '', releaseYear: '', genre: '', imgUrl: '' } })
    }

    onDeleteItem = (item, i) => {
        api.deleteBook(item).then((r) => {
            const newBooks = this.state.books.filter(function (book) {
                return book.id != item.id
            });
            this.setState({ books: newBooks, currentItem: newBooks[0] });
        });
    }

    render() {
        const { books } = this.state;
        return (
            <div>
                {books.length > 0 && (
                    <div className="content-list">
                        <BooksList books={books} onSelectItem={this.onSelectItem} onNewItem={this.onNewItem} onDeleteItem={this.onDeleteItem} />
                        <BookEditDetail updateItemList={this.updateItemList} item={this.state.currentItem} />
                    </div>
                )}
            </div>
        )
    }
}

export default Home;

