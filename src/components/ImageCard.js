import React from 'react';

// Компонент-ребенок является классом, а не функцией. Как в таком случае передать
// своейство?
// Внутри div есть задание атрибутов через this, значит передача идет через
// setState и this, правильно?
// Ожидается, то компоненту ImageCard будет передан реквизит image из компонента-
// родителя. Родитель - это то, куда данный компонент импортируется - ImageList.

class ImageCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = { spans: 0 }; //обнуление свойства span
    this.imageRef = React.createRef(); //создание ссылки на изображение.
  }
  componentDidMount() { // монтирование жизненного цикла
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render () {
    const { description, urls} = this.props.image;

    return (
      <div style={{ gridRowEnd : `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
};

export default ImageCard;
