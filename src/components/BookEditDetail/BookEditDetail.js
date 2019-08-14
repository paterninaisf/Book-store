import React, { Component } from 'react';
import './BookEditDetail.css'

export default class BookEditDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            imgUrl: '',
            title: '',
            autor: '',
            genre: '',
            ReleaseYear: 0,

            savingBook: false
        }

        this.onChangeImgUrl = this.onChangeImgUrl.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAutor = this.onChangeAutor.bind(this);
        this.onChangeReleaseYear = this.onChangeReleaseYear.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { item } = nextProps;
        this.setState({ id: item.id, imgUrl: item.imgUrl, title: item.title, autor: item.autor, genre: item.genre, releaseYear: item.releaseYear });
    }

    componentDidMount() {
        const { item } = this.props;
        this.setState({ id: item.id, imgUrl: item.imgUrl, title: item.title, autor: item.autor, genre: item.genre, releaseYear: item.releaseYear });
    }

    onChangeImgUrl = (event) => {
        this.setState({ imgUrl: event.target.value });
    }

    onChangeTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    onChangeAutor = (event) => {
        this.setState({ autor: event.target.value });
    }

    onChangeReleaseYear = (event) => {
        if(isNaN(event.currentTarget.value) === false ){
            this.setState({ releaseYear: event.target.value });
        }
    }

    onChangeGenre = (event) => {
        this.setState({ genre: event.target.value });
    }

    onSave = () => {
        const { updateItemList } = this.props;
        updateItemList({ id: this.state.id, imgUrl: this.state.imgUrl, title: this.state.title, autor: this.state.autor, genre: this.state.genre, releaseYear: this.state.releaseYear });
    }

    render() {
        return (
            <div className="detail-item-book">
                <div className="flex-center">
                    {this.state.imgUrl && (
                        <img src={this.state.imgUrl} alt=""/>
                    )}
                    {!this.state.imgUrl && (
                        <i className="material-icons book-m">book</i>
                    )}
                    
                    <div>
                        <div className="content-input">
                            <label>Title</label>
                            <input type="text" id="title" value={this.state.title} onChange={this.onChangeTitle} />
                        </div>
                        <div className="content-input">
                            <label>Autor</label>
                            <input type="text" id="autor" value={this.state.autor} onChange={this.onChangeAutor} />
                        </div>
                        <div className="content-input">
                            <label>Genre</label>
                            <input type="text" id="genre" value={this.state.genre} onChange={this.onChangeGenre} />
                        </div>
                        <div className="content-input">
                            <label>Release Year</label>
                            <input type="tel" id="releaseYear" value={this.state.releaseYear} onChange={this.onChangeReleaseYear} />
                        </div>
                        <div className="content-input">
                            <label>Image Url</label>
                            <input type="text" id="imgUrl" value={this.state.imgUrl} onChange={this.onChangeImgUrl} />
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={this.onSave} className="save-button">Save</button>
                </div>
            </div>
        )
    }
}
