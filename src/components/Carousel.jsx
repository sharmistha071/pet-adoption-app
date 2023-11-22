import { useState } from 'react'

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0)

  const handleClick = (e) => {
    console.log('e...', e.target.dataset.index)
    setActive(Number(e.target.dataset.index))
  }

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <img
            onClick={handleClick}
            data-index={index}
            key={image}
            src={image}
            className={index === active ? 'active' : ''}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
